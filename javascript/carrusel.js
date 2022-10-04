

if(screen.width <=485){
    console.log(screen.width)
    new Splide( '.splide',{
        type: 'loop',
        autoplay: true,
        arrows: false,
    } ).mount();
    new Splide('#slider2',{
        arrows: false,
        pagination:false,
    } ).mount();
    new Splide('#slidervideos',{
        arrows: false,
        pagination:false,
    } ).mount();
}
else{
    console.log(screen.width)
    new Splide( '.splide',{
        autoplay: true,
    } ).mount();
    new Splide( '#slider2',{
        pagination: false,
    } ).mount();
    new Splide( '#slidervideos',{
        pagination: false,
    } ).mount();
}