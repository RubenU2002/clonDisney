

if(screen.width <=485){
    console.log(screen.width)
    new Splide( '.splide',{
        type: 'loop',
        autoplay: true,
        arrows: false,
    } ).mount();
}
else{
    console.log(screen.width)
    new Splide( '.splide',{
        autoplay: true,
    } ).mount();
}