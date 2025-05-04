var cropper = null;

window.onload = () => {
    const user = localStorage.getItem('isLogin');
    if(!user) {
        location.replace('login.html');
    }

    
}


const logout = () => {
    localStorage.removeItem('isLogin');
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