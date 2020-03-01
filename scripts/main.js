let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gerrit2.jpg') {
        myImage.setAttribute ('src', 'images/gerrit.jpg');
        myImage.classList.add("secondImg");
    } else {
        myImage.setAttribute('src', 'images/gerrit2.jpg');
        myImage.classList.remove("secondImg");
    }
};
