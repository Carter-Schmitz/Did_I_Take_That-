var pristine;
window.onload = function () {

   var form = document.getElementById("signup-form");

   pristine = new Pristine(form);

   form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = pristine.validate();

   });


};