function takenMed() {
  var change = document.getElementById("check");
  if (change.value == "false") {
    change.value = "true";
  } else {
    change.value = "false";
  }
}

document.querySelector("#pill-btn").addEventListener("click", takenMed);
