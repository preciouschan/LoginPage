
      const passwordInput = document.getElementById('Pass');
      const togglePassword = document.getElementById('toggle-password');
      const toggleIcon = document.getElementById('toggle-icon');

      togglePassword.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          toggleIcon.classList.remove('fa-lock');
          toggleIcon.classList.add('fa-unlock');
        } else {
          passwordInput.type = 'password';
          toggleIcon.classList.remove('fa-unlock');
          toggleIcon.classList.add('fa-lock');
        }
    });

  
    
    
    
    
   
  
  