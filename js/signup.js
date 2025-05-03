const createUser = (e) => {
 e.preventDefault();
 const form = e.target;
 //check validation errors
 validation("fullname","fullname-error");
 validation("email","email-error");
 validation("password","password-error");

 //write logic for signup
 const fullname = document.getElementById("fullname").value.trim();
 const email = document.getElementById("email").value.trim();
 const password = document.getElementById("password").value.trim();
 
 const payload = JSON.stringify({
    fullname,
    email,
    password
 })

 form.reset();
 localStorage.setItem(email,payload);
 new Swal({
    icon: "success",
    title: "Signup success"
 })

}


const validation = (inputId,errorId) => {
     const input = document.getElementById(inputId);
     const label = document.getElementById(errorId);
     const value = input.value.trim();
     if(value.length == 0) {
        label.classList.remove("hidden");
        label.innerHTML = `${input.name} is required.`;
        throw new Error(`${input.name} is required.`);
     }else{
          label.classList.add("hidden");
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


