var cropper = null;

window.onload = () => {
    const user = localStorage.getItem('session');
    if(!user) {
        location.replace('login.html');
    }

    showUserInfo();
}


const logout = () => {
    localStorage.removeItem('session');
    location.replace('login.html');
}

const uploadImage = () => {
    const input = document.getElementById('file-input');
    const picture = document.getElementById('picture');
    const file = input.files[0];
    const url = URL.createObjectURL(file);
    picture.src = url;
    
}

const loadCropper = () => {
    const downloadButton = document.getElementById('download-button');
     if(!cropper){
        const picture = document.getElementById('picture');
        cropper =  new Cropper(picture, {
           // aspectRatio: 1,
            viewMode: 1,
         });
        downloadButton.classList.remove('hidden');
     }else{
        cropper.destroy();
        cropper = null;
        downloadButton.classList.add('hidden');
     }
    
       

}


const downloadImage = () => {
    const canvas = cropper.getCroppedCanvas();
    const imageString = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = imageString;
    a.download = "sample.png";
    a.click();
    a.remove();
    
}


const showUserInfo =() =>{
 const session = localStorage.getItem("session");
 const profilePicture = localStorage.getItem("profile-picture")
 const sessionFullname = document.getElementById("session-fullname");
 const sessionEmail = document.getElementById("session-email");
 const user = JSON.parse(session);
 sessionFullname.innerHTML = user.fullname;
 sessionEmail.innerHTML = user.email;

 if(profilePicture) {
    const userPic = document.getElementById("user-pic");
    userPic.src = profilePicture;
 }
}


const uploadProfilePicture = () => {
    const input = document.getElementById("profile-input-pic");
    const userPic = document.getElementById("user-pic");
    const file = input.files[0];
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = (e) =>{
         const fileString = e.target.result;
         userPic.src = fileString;
         localStorage.setItem('profile-picture',fileString);
    }
}