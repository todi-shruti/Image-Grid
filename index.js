{
document.querySelectorAll('.imgs img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src= image.getAttribute('src');

    } 
});
document.querySelector('.popup span').onclick = () =>{
    document.querySelector('.popup').style.display = 'none';
}

window.onload = choosePic;


// On refreshing the page 4 images are replaced with same pictures from the given array in the grid
var myPix = new Array("1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpeg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg",);

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture" ).src = myPix[randomNum];
     document.getElementById("myPicture1" ).src = myPix[randomNum];
     document.getElementById("myPicture2" ).src = myPix[randomNum];
     document.getElementById("myPicture3" ).src = myPix[randomNum];
}


}