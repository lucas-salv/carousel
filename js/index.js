(function(){
    'use strict';


    // DOM variables
    let $imgContainer = document.querySelector(".img-container");
    console.log($imgContainer.children.length);

    // Others variables
    let cont = 0;
    
    // init functions
    imgInterval();

    // Functions
    function imgInterval(){
        console.log(cont);
            $imgContainer.style.transform = `translateX(-${cont}%)`;
            cont += 100;
            if(cont > 100 * $imgContainer.children.length){
                cont = 0;
                $imgContainer.style.transform = `translateX(-${cont}%)`;
                cont = 100;
            }
        setTimeout(imgInterval, 5000);
    }


})();