$(document).ready(function () {
  $('#fullName').html("Harkian");
  $('.welcome_address').html("Asst. Prof, MET'S School Of Engineering");

  let classes = ['S2_CSE', 'S4_CSE', 'S6_CSE', 'S8_CSE'];
  loadClass(classes);

  function loadClass(classes) {
    for (var i = 0; i < classes.length; i++) {
      $('#Classes').append(`
        <div class="card">
          <div class="card-header" id="heading`+ classes[i] +`">
            <h2 class="mb-0">
              <button class="btn btn-sm" type="button" data-toggle="collapse" data-target="#collapse`+ classes[i] +`" aria-expanded="true" aria-controls="collapse`+ classes[i] +`">
                `+ classes[i] +`
              </button>
            </h2>
          </div>

          <div id="collapse`+ classes[i] +`" class="collapse" aria-labelledby="heading`+ classes[i] +`" data-parent="#Classes">
            <div class="card-body">
              `+ load_data(classes[i]) +`
            </div>
          </div>
        </div>
      `);
    }
  }
  function load_data(current_class) {
    return `

    <table class="table table-bordered table-hover">
      <thead>
        <tr class="bg-dark text-light">
          <td width="10%"> Roll No </td>
          <td width="60%"> Student Name </td>
          <td width="10%"> Credits Earned </td>
          <td width="10%"> Total CGPA </td>
          <td width="10%"> Action </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>`+ current_class +`</td>
          <td>3</td>
          <td>4</td>
          <td> <button class="btn btn-sm btn-dark" onclick="window.location.href = '../student/';"> View </button> </td>
        </tr>
      </tbody>
    </table>

    `;
  }
});
