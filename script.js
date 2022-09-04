function init() {
    let images = document.getElementsByClassName('my-img');
    for(let img of images) {
        img.onclick = () => {
            displayImgPopUp(img.id);
        };
    } 
}

function displayImgPopUp(imgId) {
    let img = document.getElementById(imgId);
    let modal = document.getElementById('modalBg');
    let modalImg = document.getElementById('modalImg');

    modal.style.display = 'block';
    modalImg.src = img.src;

    modal.onclick = () => {
        modal.style.display = 'none';
    }
}

init();