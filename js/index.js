(function(){
    'use strict';


    // DOM variables
    let $imgContainer = document.querySelector(".img-container");
    let $btnLeft = document.querySelector(".btn-left");
    let $btnRight = document.querySelector(".btn-right");

    // Others variables
    let cont = 0;
    let percentTransform = 100;
    let interval;
    
    // init functions
    imgInterval();
    btnsChangeImg();

    // Functions
    function imgInterval(){
        $imgContainer.style.transform = `translateX(-${cont}%)`;
        cont += percentTransform;
        if(cont > percentTransform * $imgContainer.children.length){
            cont = 0;
            $imgContainer.style.transform = `translateX(-${cont}%)`;
            cont = percentTransform;
        }
        interval = setTimeout(imgInterval, 5000);
    };

    function btnsChangeImg() {
        $btnLeft.addEventListener('click', e=>{
            cont -= percentTransform;
            e.preventDefault();
            if(cont > 0){
                cont -= percentTransform;
                $imgContainer.style.transform = `translateX(-${cont}%)`; 
                clearTimeout(interval);
                imgInterval();
            }
            
        });
        $btnRight.addEventListener('click', e=>{
            e.preventDefault();
            cont -= percentTransform;
            if(cont < percentTransform * $imgContainer.children.length){
                cont += percentTransform;
                $imgContainer.style.transform = `translateX(-${cont}%)`;
                console.log(cont);
                clearTimeout(interval);
                imgInterval();
            }
        })
    }



})();