function takenMed() {
  var change = document.getElementById("check");
  if (change.value == "false") {
    change.value = "true";
  } else {
    change.value = "false";
  }
}

document.querySelector("#pill-btn").addEventListener("click", takenMed);

const taken = req.params.taken
const timeout = (req.params.frequency * 60 * 60 * 1000);

document.querySelector('#taken-btn').setTimeout(() => {
  taken = false;
}, timeout );
