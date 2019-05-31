var profile = {
  uid : '',
  name : '',
  pic : '',
  email : '',
  providerData : ''
}
var userData = {
  bal : '0',
  totalSpended:0
}
var costs = {

};
var uploadStatus = false;
var loginState = 'a';
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    loginState = true;
    console.log('Logged in as', user.displayName);
    $('.toggleLogin').html('Logout <i class="fas fa-sign-out-alt"></i>').attr('onclick','logout()');
    sw2Toast('success','Logged In')
    profile['name'] = user.displayName;
    profile['pic'] = user.photoURL;
    profile['uid'] = user.uid;
    profile['providerData'] = user.providerData;
    displayUserData();
    fetchAndDisplayFirestore();
  } else {
    // No user is signed in.
    loginState = false
    console.log('User logged out');
    $('.toggleLogin').html('<i class="fas fa-sign-in-alt"></i> Login').attr('onclick','login()');
  }
});


function displayUserData() {
  $('.userName').html(profile['name']);
  $('.balance').html(userData['bal']);
  $('.mdl-card__title')
  .css('background',"url(" + profile['pic'] + ")")
  .css('background-position','center')
  .css('background-size','cover')
  .css('background-repeat','no-repeat');
}


function login() {
  var user = firebase.auth().currentUser;
  if (user) {
    //User Already signed in
    sw2('success','SignedIn','Looks like you have Already Signed In')
  } else {
    //User not signed in
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {

      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
} // End of login()

function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    sw2('question','Logout Success','See you soon!')
  }).catch(function(error) {
    // An error happened.
    console.log('error logout');
    logout();
  });
}

function fetchAndDisplayFirestore() {
  // $('#FetchDataProgressBar').fadeIn(100);
  $('#spendTable').html('');
  $('.totalExpense').html('');
  db.collection("pocketlogger").doc(profile['uid']).collection('spends')
    .orderBy('when','desc').get()
    .then(function(querySnapshot) {
        var expense = 0;
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            var data = doc.data();
            var docId = doc.id;
            costs[docId] = data['howMuch'];
            expense += parseInt(data['howMuch']);
            var dataDesc = ' ';
            if(data['desc']) {
              dataDesc = ' - ' + data['desc'];
            }
            var whenDate = new Date( data['when'].seconds *1000);
            var hh = whenDate.getHours();
            if (hh.toString().length == 1) {hh = '0' + hh;}
            var min = whenDate.getMinutes();
            if (min.toString().length == 1) {min = '0' + min;}
            var time;
            if(hh==12) { time = '12:'+ min +' PM'} else if(hh==0) {time = '12:'+ min +' AM'} else if(hh>12) {time = hh-12+':'+ min +' PM'} else {time = hh+':'+ min +' AM'}
            // console.log(time);
            var dayNumber = whenDate.getDay()
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            // var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            var day = days[dayNumber];
            // console.log(day);
            var dd = whenDate.getDate();
            if (dd.toString().length == 1) {dd = '0' + dd;}
            var mm = whenDate.getMonth() + 1;
            if (mm.toString().length == 1) {mm = '0' + mm;}
            var yyyy = whenDate.getFullYear();
            var date = dd+'-'+mm+'-'+yyyy;
            var when = time + ' <br> ' + date ;
            $('#spendTable').append('<tr onclick()><td>'+ data['what'] + ' ' + dataDesc + '</td><td>'+ when +'</td><td>'+ data['howMuch'] +'</td><td><i  onclick=del("'+ doc.id +'") class="fas fa-trash"></i></td></tr>');
        });
        userData['totalSpended'] = expense;
        $('.totalExpense').html(userData['totalSpended']);
        $('#FetchDataProgressBar').fadeOut(1000);
    })
    .catch(function(error) {
        $('#FetchDataProgressBar').fadeOut(1000);
        console.log("Error getting documents: ", error);
    });
    syncFirestoreBalance()
}

function addMoney() {
  if (loginState == true) {
    Swal.fire({
      title: 'Add Money',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: false,
      confirmButtonText: 'Add',
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        userData['bal'] = parseInt(userData['bal']) + parseInt(result.value);
        updateFirestoreBal();
        sw2Toast('success','Money added!')
      } else {
        sw2Toast('error','Error adding money!')
      }
    })
  } else {
    sw2ConfirmLogin('info','Please Login','Please login to your account','Login')
  }
}
function setMoney() {
  if (loginState == true) {
    Swal.fire({
      title: 'Total amount in my wallet',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: false,
      confirmButtonText: 'Done!',
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        userData['bal'] =  parseInt(result.value);
        updateFirestoreBal();
        sw2Toast('success','Done!')
      } else {
        sw2Toast('error','Not done!')
      }
    })
  } else {
    sw2ConfirmLogin('info','Please Login','Please login to your account','Login')
  }
}

function updateFirestoreBal() {
  db.collection("pocketlogger").doc(profile['uid']).set({
      mainBalance:userData['bal']
  })
  .then(function() {
      console.log("mainBalance update success");
  })
  .catch(function(error) {
      updateFirestoreBal();
      console.error("mainBalance update Error", error);
  });
}

function syncFirestoreBalance() {
  db.collection("pocketlogger").doc(profile['uid'])
    .onSnapshot(function(doc) {
        userData['bal'] = doc.data().mainBalance;
        $('.balance').html(userData['bal']);
    }, function(error) {
        console.log('err : ',error);
    });
}

function del(id) {
  // $('#FetchDataProgressBar').fadeOut(200);
  // sw2('info','Temporarily disabled','This feature is currently have some bugs. Will fix later ')
  $('#FetchDataProgressBar').fadeIn(1000);
  Swal.fire({
    title: 'Delete record?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#242424',
    cancelButtonColor: '#aaa',
    confirmButtonText: 'Delete'
  }).then((result) => {
    if (result.value) {
      db.collection("pocketlogger").doc(profile['uid']).collection('spends').doc(id).delete().then(function() {
          console.log("Document successfully deleted!");
          fetchAndDisplayFirestore();
          sw2Toast('success','Deleted!');
          userData['bal'] = parseInt(userData['bal']) + parseInt(costs[id]);
          updateFirestoreBal();
          $('#FetchDataProgressBar').fadeOut(200);
      }).catch(function(error) {
          $('#FetchDataProgressBar').fadeOut(200);
          console.error("Error removing document: ", error);
          sw2Toast('error','Try again!');
      });
    } else { // cancel button triggers
      $('#FetchDataProgressBar').fadeOut(200);
    }
  });
}

function newEntry() {
  $('#progressBar').fadeIn(500);
  if(loginState) {
    if(uploadStatus != true) {
      getDataAndUpdate();
    } else {
      sw2('info','Please wait','One process is on the way :)')
    }
  } else {
    sw2ConfirmLogin('info','Please Login','Please login to your account','Login')
    $('#progressBar').fadeOut(500);
  }
}
function getDataAndUpdate() { // Adding new record
  uploadStatus = true;
  var what = $('#what').val();
  var whenDate = $('#whenDate').val();
  var whenTime = $('#whenTime').val();
  dateNtime = whenDate + ' ' + whenTime;
  var when = new Date(dateNtime);
  var howMuch = $('#howMuch').val();
  balTemp = userData['bal'];
  userData['bal'] -= howMuch;
  updateFirestoreBal();
  var desc = $('#description').val();
  if(what!='' && whenDate!='' && whenTime!='' && howMuch!='') {
    var timeStamp = new Date();
    db.collection("pocketlogger").doc(profile['uid']).collection("spends").add({
      currentBal : userData['bal'],
      what : what,
      when : when,
      howMuch : howMuch,
      desc : desc,
      timestamp : timeStamp
    })
    .then(function() {
        console.log("Document successfully written!");
        // sw2('success','Added','success')
        $('.balance').html(userData['bal']);
        $('.expense').html(userData['expense']);
        sw2Toast('success','Added')
        fetchAndDisplayFirestore() // Update the currect changes
        $('#progressBar').fadeOut(500);
        uploadStatus = false;
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
        sw2('error','Unsuccessfull','Please try again')
        $('#progressBar').fadeOut(500);
        uploadStatus = false;
    });
  } else {
    sw2('error','Insufficient','Please enter details')
    $('#progressBar').fadeOut(500);
    uploadStatus = false;
  }
}

function formReset() {
  $('#what').val('')
  $('#howMuch').val('')
  $('#description').val('')
  var d = new Date();
  var yyyy = d.getFullYear();
  var mm = d.getMonth() + 1;
  if (mm.toString().length == 1) {mm = '0' + mm;}
  var dd = d.getDate();
  var date = yyyy + '-' +mm+'-'+dd;
  $('#whenDate').val(date).attr('max',date); // set date to form
  var hh = d.getHours();
  var min = d.getMinutes();
  if (hh.toString().length == 1) {hh = '0' + hh;}
  if (min.toString().length == 1) {min = '0' + min;}
  var time = hh + ':' + min;
  $('#whenTime').val(time); // set time to form
}

function sw2Toast(type,title) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500
  });
  Toast.fire({
    type: type,
    title: title
  })
}
function sw2ConfirmLogin(type,title,text,buttonVal,options) {
  Swal.fire({
    title: title,
    text: text,
    type: type,
    showCancelButton: true,
    confirmButtonColor: '#2f3640',
    cancelButtonColor: '#aaa',
    confirmButtonText: buttonVal
  }).then((result) => {
    if (result.value) {
      login();
    }
  })
}
function sw2(type,title,text) {
  Swal.fire(
  title,
  text,
  type
)
}
$(document).ready(function () {
  $('#progressBar').fadeOut();
  if (loginState == false) {
    $('#FetchDataProgressBar').fadeOut();
  }
  formReset();

});
