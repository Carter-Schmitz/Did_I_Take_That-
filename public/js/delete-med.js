const deletemedbtn = document.querySelectorAll(".delete-med-btn")
document.querySelector(".delete-med-btn").
async function deleteFormHandler(index) {
  deletemedbtn.forEach((btn,index)=>{ 
    btn.addEventListener('click', ()=> {
      console.log(index)
      deleteFormHandler(index)  
    })
  })
    
    const name = document.querySelectorAll(".med-name")
    const namebtn = name[index].innerHTML
    console.log(namebtn)
    
    const response = await fetch(`/api/medication/${namebtn}`, {
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
  