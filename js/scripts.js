/*(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');
    let telephoneInput = document.querySelector('#telephone');
    
    function validateEmail() {
      
      return false;
    }
    
    function validateTelephone() {
      
      return false;
    }
    
    function validateForm() {
      return validateEmail() && validateTelephone();
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }else{
        alert('failed')
      }
    })
  
    // THE RETURN STATEMENT HERE
  })();*/