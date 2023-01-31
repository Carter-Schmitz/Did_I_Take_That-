async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="med-name"]').value;
    const dosage = document.querySelector('input[name="med-dosage"]').value;
    const frequency = document.querySelector('input[name="med-frequency"]').value;
    const taken = document.querySelector('input[name="med-taken"]').value;
    const quantity = document.querySelector('input[name="med-quantity"]').value;
  
    const response = await fetch(`/api/medication`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        dosage,
        frequency,
        taken,
        quantity
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-med-form').addEventListener('submit', newFormHandler);