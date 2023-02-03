function takenMed() {
  if(req.medication.taken == false) {
    req.medication.taken = true;
  }
  window.reload()
}

const taken = req.params.taken
const timeout = (req.params.frequency * 60 * 60 * 1000);

document.querySelector('#taken-btn').setTimeout(() => {
  taken = false;
}, timeout );

document.getElementById("taken-btn").addEventListener("click", takenMed)
