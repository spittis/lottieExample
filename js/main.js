(() => {
//to make the brackets fast like in HTML, you can make snippets and make a shortcut


//grab that div container and feed that information 
//get a ref to the lottie container
const preloader = document.querySelector('.preloader');

let preloadAnim = bodymovin.loadAnimation({
    wrapper : preloader,
    animType : 'svg',
    loop : false, //turned this to false, now it only plays once
    autoplay: false, //by default, it is on true, we want it to play when you mouseover
    path : 'data/search.json'
});


//try it in firefox because chrome sometimes gives you an error where you can't load in files

function playAnimation() {
    preloadAnim.play();
    preloadAnim.setSpeed(3); //changed the speed to make it faster
}


preloader.addEventListener("mouseover", playAnimation);


//trying to do a mouseout

function stopAnim() {
    preloadAnim.pause();
}

preloader.addEventListener("mouseout", stopAnim);



})();