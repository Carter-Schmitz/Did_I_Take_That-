const deletemedbtn = document.querySelectorAll(".delete-med-btn")

deletemedbtn.forEach((btn,index)=>{ 
  btn.addEventListener('click', ()=> {
    
    deleteFormHandler(index)  
  })
})
  
async function deleteFormHandler(index) {
    const name = document.querySelectorAll(".med-name")
    const namebtn = name[index].innerHTML
    console.log(namebtn)
    
    const response = await fetch(`/api/medication/${namebtn}`, {
        method: 'DELETE',
        body: JSON.stringify({
          medication_name: namebtn
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
  