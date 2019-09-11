(function(){
    'use strict';


    // DOM variables
    let $imgContainer = document.querySelector(".img-container");
    let $btnLeft = document.querySelector(".btn-left");
    let $btnRight = document.querySelector(".btn-right");
    let $imgList = document.querySelector('.img-list');

    // Others variables
    let cont = 0;
    let percentTransform = 100;
    let interval;
    
    // init functions
    showImgList();
    btnsImgList();
    imgInterval();
    btnsChangeImg();

    // Functions
    function imgInterval(){
        classImgContains();
        $imgContainer.style.transform = `translateX(-${cont}%)`;
        if(cont >= percentTransform * $imgContainer.children.length){
            cont = 0;
            $imgContainer.style.transform = `translateX(-${cont}%)`;
            classImgContains();
        }
        cont += percentTransform;
        interval = setTimeout(imgInterval, 5000);
    };

    function btnsChangeImg() {
        $btnLeft.addEventListener('click', e=>{
            e.preventDefault();
            if(cont != 0){
                cont -= percentTransform;
            }
            if(cont > 0){
                cont -= percentTransform;
                $imgContainer.style.transform = `translateX(-${cont}%)`; 
                clearTimeout(interval);
                imgInterval();
            }
            
        });
        $btnRight.addEventListener('click', e=>{
            e.preventDefault();
            if(cont != 0){
                cont -= percentTransform;
            }
            if(cont < percentTransform * $imgContainer.children.length){
                cont += percentTransform;
                $imgContainer.style.transform = `translateX(-${cont}%)`;
                console.log(cont);
                clearTimeout(interval);
                imgInterval();
            }
        })
    }

    function showImgList(){
        for(let i = 0; i < $imgContainer.children.length; i++){
            let li = document.createElement('li');
            li.classList.add('listItem');
            $imgList.appendChild(li);
        }
    }

    function classImgContains(){
        if($imgList.children[cont / percentTransform]){
            [...$imgList.children].forEach(el => {
                if(el != $imgList.children[cont / percentTransform] && el.classList.contains('act')){
                    el.classList.remove('act');
                }
            })
            $imgList.children[cont / percentTransform].classList.add('act');
        }
    }

    function btnsImgList(){
        let arrImgList = [...$imgList.children];
        addEventListenerAll('click', arrImgList, e=>{
            e.stopPropagation();
            cont = arrImgList.indexOf(e.target) * percentTransform;
            clearTimeout(interval);
            imgInterval();
        })
    }

    // utils
    function addEventListenerAll(event, elements, fn){
        elements.forEach(el=>{
            el.addEventListener(event, fn);
        })
    }




})();