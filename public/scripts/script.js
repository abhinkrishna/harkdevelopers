$(document).ready(function(){

  //Initialize
  var winWi = window.innerWidth;
  var winHi = window.innerHeight;
  var device = 'desktop';
  optimizeTechIcons();
  optimizeMembers();
  optimizeWorks();


  $('#send').click(function() {
    var email = $('#email').val();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var timeStamp = new Date();
    var flg = 0;
    if(email=='') {flg=1;}
    if(name=='') {flg=1;}
    if(phone=='') {flg=1;}
    if(message=='') {flg=1;}
    if (flg==1) {
      $('#errorAlert').slideDown();
    } else {
      $('#errorAlert').slideUp();
      //Upload Data
      $('#send').html('<span class="spinner-grow spinner-grow-sm" id="sendLoading" role="status" aria-hidden="true"></span> Sending...');
      db.collection("messages").add({
          email: email,
          name: name,
          phoneNumber:phone,
          message:message,
          time:timeStamp
      })
      .then(function(docRef) {
        $('#send').html('Thank You').prop('disabled', true);
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        $('#send').html('Retry');
        console.error("Error adding document: ", error);
      });

    }
  });
  $('.snapWindows').scroll(function() {
    scrolled = true;
  	var height = $('.snapWindows').scrollTop();
    if(height < 50) {
  		$('#topBtn').fadeOut('200');
  	} else {
  		$('#topBtn').fadeIn('200');
  	}
  });

  $('#topBtn').click(function () {
    $('.snapWindows').scrollTop(0);
  });

  var moreIconStat = 1;
  $('#showMoreTechIcons').click(function() {
    if(moreIconStat%2!=0) {
      moreIconStat+=1;
      $('.techIcons').removeClass("hide");
      $('#showMoreTechIcons').html('<i class="fas fa-chevron-up fa-2x"></i>');
    } else {
      moreIconStat+=1;
      $('#showMoreTechIcons').html('<i class="fas fa-chevron-down fa-2x"></i>');
      optimizeTechIcons();
    }
  });
  var moreMemberStat = 1;
  $('#showMoreMembers').click(function() {
    if(moreMemberStat%2!=0) {
      moreMemberStat+=1;
      $('.members').slideDown('200').removeClass("hide");
      $('#showMoreMembers').html('<i class="fas fa-chevron-up fa-2x"></i>');
    } else {
      moreMemberStat+=1;
      $('#showMoreMembers').html('<i class="fas fa-chevron-down fa-2x"></i>');
      optimizeMembers();
    }
  });
  var moreWorksStat = 1;
  $('#showMoreWorks').click(function() {
    if(moreWorksStat%2!=0) {
      moreWorksStat+=1;
      $('.dispworks').slideDown('200').removeClass("hide");
      $('#showMoreWorks').html('<i class="fas fa-chevron-up fa-2x"></i>');
    } else {
      moreWorksStat+=1;
      $('#showMoreWorks').html('<i class="fas fa-chevron-down fa-2x"></i>');
      optimizeWorks();
    }
  });


  function optimizeTechIcons() {
    updateScreen();
    if(winWi>600 && winWi<1000) {
      var col = parseInt(winWi / 200);
    } else if(winWi>600 && winWi>1000){
      var col = parseInt(1000 / 200);
    } else {
      var col = parseInt(winWi / 100);
    }
    var row = Math.round(15 / col);
    var maxRow;
    if (device == 'desktop') {
      maxRow = 2;
    } else {
      //Mobile
      maxRow = 3;
    }
    if(row>maxRow) {
      var cutVar = col*maxRow;
      var cutLength = 0;
      $('.techIcons').each(function(val) {
        if(val>=cutVar) {
          cutLength+=1;
          $('.techIcons').eq(val).addClass("hide");
        }
      });
    }
  }
  function optimizeMembers() {
    updateScreen();
    if(device == 'desktop') {
      var w = $('#teamMembers').width();
      var h = $('#teamMembers').height();
      // console.log(w,h);
      var h1 = $('#ourTeamTitle').height();
      var h2 = $('#ourTeamSubTitle').height();
      var h3 = $('#memberSpecial').height();
      var usedHi = h-(h1+h2+h3);

      if(winWi>1500) {
        teamMemberWidth = 1500;
      } else {
        teamMemberWidth = winWi;
      }
      var col = parseInt(teamMemberWidth/400);
      var row = parseInt(usedHi / 100);
      var maxRow = 2;
      if(col<2 || col == 0) {
        maxRow = 1;
      }
      if(row == 0) {
        row = 1;
      }
      if(row>maxRow) {
        var cutVar = col*maxRow;
        $('.members').each(function(val) {
          if(val>=cutVar) {
            $('.members').eq(val).slideUp('200');
          }
        });
      }
    } else {
      $('.members').each(function(val) {
        if(val>=1) {
          $('.members').eq(val).slideUp('200');
        }
      });
    }
  }
  function optimizeWorks() {
    updateScreen();
    var wid = $('#worksWraper').width();
    var hei = $('#worksWraper').height();
    var w = $('.dispworks').width();
    var h = $('.dispworks').height();
    var col = parseInt(wid/w);
    var row = parseInt(hei/h);
    var cutVar = parseInt(winHi/(h+100));
    if(cutVar==1) {
      cutVar = 2;
    }
    var optimized = false;
    if(row>2) {
      $('.dispworks').each(function(val) {
        if(val>=cutVar) {
          optimized = true;
          $('.dispworks').eq(val).slideUp('200');
        }
      });
    }
    if(!optimized) {
      $('#showMoreWorks').hide();
    }

  }
  function updateScreen() {
    winWi = window.innerWidth;
    winHi = window.innerHeight;
    device = 'desktop'
    if(winWi<600) {
      device = 'mobile';
    }
    // console.log("Device : " , device);
    // console.log("Device-wi : " , winWi);
    // console.log("Device-hi : " , winHi);
  }
}); //document.ready() ends #_#
