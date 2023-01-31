async function deleteFormHandler(event) {
    event.preventDefault();
    
    const name = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/medication/${name}`, {
        method: 'DELETE',
        body: JSON.stringify({
          medication_name: name
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
  
  document.querySelector('.delete-med-btn').addEventListener('click', deleteFormHandler);