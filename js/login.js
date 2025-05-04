window.onload = () => {
   const user = localStorage.getItem("isLogin");
    if(user) {
          location.replace('profile.html');
    }else{

    }
}


const login = (e) => {
e.preventDefault();
validation('email','email-error');
validation('password','password-error');

const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

const user = localStorage.getItem(email);
if(user) {
  
    const payload = JSON.parse(user);
    if(password == payload.password) {
        localStorage.setItem("isLogin",true);
        location.replace("profile.html");

    }else{
        passwordError.classList.remove('hidden');
        passwordError.innerHTML = "Incorrect Password";
    }

}else{
     emailError.classList.remove('hidden');
     emailError.innerHTML = "User doesn't exist please try to signup to first";
}
}




const validation = (inputId, errorId) =>{
     const input = document.getElementById(inputId);
     const label = document.getElementById(errorId);
     const value = input.value.trim();

     if(value.length == 0) {
        label.classList.remove('hidden');
        label.innerHTML = `${input.name} is required`;
        throw new Error(`${input.name} is required`);

     }else{
        label.classList.add('hidden');
         label.innerHTML = '';
     }
}

const togglePassword = () => {
    const input = document.getElementById('password');
    const passwordIcon = document.getElementById('password-icon');

   const type = input.type;
   if(type == 'password'){
        input.type = "text";
        passwordIcon.className = 'ri-eye-off-line';
   }else{
       input.type = "password";
       passwordIcon.className = 'ri-eye-line';
       
   }
 }
