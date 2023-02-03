

document.querySelectorAll(".delete-med-btn").forEach((btn,index)=>{ 
  btn.addEventListener('click', ()=> {
    deleteFormHandler(index)  
  })
})
  
async function deleteFormHandler(index) {
    const name = document.querySelectorAll(".med-id")
    const namebtn = name[index].innerHTML
    console.log(namebtn)
    
    const response = await fetch(`/api/medication/${namebtn}`, {
        method: 'DELETE',
        body: JSON.stringify({
          medication_id: namebtn
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
  