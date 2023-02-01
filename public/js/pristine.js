var pristine;
window.onload = function () {

   var form = document.getElementById("form1");

   pristine = new Pristine(form);

   form.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('Inside pristine submit!')
      var valid = pristine.validate();

   });


};