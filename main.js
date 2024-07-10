var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});



// var swiper = new Swiper(".cards-container", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//     },
//     pagination: {
//     el: ".swiper-pagination",
//     },
// });



var swiper = new Swiper(".coming-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
    // el: ".swiper-pagination",
    clickable: true,
    },
});



// function changeImage(){
//     let display = document.getElementById('img1');
//     if(display.src.match('https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/natural_titanium__ccl12n7vwwxe_large.jpg')){
//         // display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708679040/Croma%20Assets/Communication/Mobiles/Images/300826_0_ujhvyj.png?tr=w-400'
//         display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678594/Croma%20Assets/Communication/Mobiles/Images/300819_0_imwvfj.png?tr=w-400'
//         console.log("nn");
//     }
//     else{
//         display.src = 'https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/natural_titanium__ccl12n7vwwxe_large.jpg'
//     }
// }


function changeImage(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708678594/Croma%20Assets/Communication/Mobiles/Images/300819_0_imwvfj.png?tr=w-400';
    
}

function changeImageb(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708679040/Croma%20Assets/Communication/Mobiles/Images/300826_0_ujhvyj.png?tr=w-400';
    let text  = document.getElementById('look-text');
    text.innerHTML = 'Black Titanium';
    
}



function changeImagec(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708674510/Croma%20Assets/Communication/Mobiles/Images/300757_0_hy18ie.png?tr=w-400';
    let text  = document.getElementById('look-text');
    text.innerHTML = 'White Titanium';
}



function changeImaged(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708674453/Croma%20Assets/Communication/Mobiles/Images/300792_0_luu1mj.png?tr=w-400';
    let text  = document.getElementById('look-text');
    text.innerHTML = 'Blue Titanium';
}



var div = document.getElementById('ipad-models');
var display1 = 1;

function hideShow(){
    if(display1 == 1){
        div.style.display = 'none';
        display1 = 0;
    }
    else{
        div.style.display = 'block';
        display1 = 1;
    }
}
function hideShow2(){
    if(display1 == 1){
        div.style.display = 'none';
        display1 = 0;
    }
}





function changeImagei15a(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708671939/Croma%20Assets/Communication/Mobiles/Images/300679_0_ywgnrd.png?tr=w-400';
    let text  = document.getElementById('look-text');
    text.innerHTML = 'Pink';
}


function changeImagei15b(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673529/Croma%20Assets/Communication/Mobiles/Images/300778_0_indsgn.png?tr=w-400';
    let text  = document.getElementById('look-text');
    text.innerHTML = 'Yellow';
}


function changeImagei15c(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708674029/Croma%20Assets/Communication/Mobiles/Images/300665_0_vveh9a.png?tr=w-400';
    let text  = document.getElementById('look-text');
    text.innerHTML = 'Green';
}

function changeImagei15d(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708673124/Croma%20Assets/Communication/Mobiles/Images/300776_0_et1qto.png?tr=w-400';
    let text  = document.getElementById('look-text');
    text.innerHTML = 'Blue';
}


function changeImagei15e(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708675913/Croma%20Assets/Communication/Mobiles/Images/300770_0_uw5hxv.png?tr=w-400';
    let text  = document.getElementById('look-text');
    text.innerHTML = 'Black';
}



function changeImageipro1(){
    let display = document.getElementById('img1');
    display.src = 'https://www.apple.com/v/ipad-pro/ap/images/overview/closer-look/space-black/slide_3A__fmel0mesnxqq_large.jpg'
    let display2 = document.getElementById('img2');
    display2.src = 'https://www.apple.com/v/ipad-pro/ap/images/overview/closer-look/space-black/slide_4A__c2suhzbfcl8i_large.jpg'
    let text  = document.getElementById('look-text');
    text.innerHTML = 'Black';
}



function changeImageipro(){
    let display = document.getElementById('img1');
    display.src = 'https://www.apple.com/v/ipad-pro/ap/images/overview/closer-look/silver/slide_3A__fmel0mesnxqq_large.jpg'
    let display2 = document.getElementById('img2');
    display2.src = 'https://www.apple.com/v/ipad-pro/ap/images/overview/closer-look/silver/slide_4A__c2suhzbfcl8i_large.jpg'
    let text  = document.getElementById('look-text');
    text.innerHTML = 'White';
}

function changeImageair1(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715758525/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/301932_1_wwwijo.png?tr=w-640'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Space Grey';
}


function changeImageair2(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715758602/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/301955_1_g3lf6r.png?tr=w-640'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Starlight';
}

function changeImageair3(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715758577/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/301944_1_ogfpnc.png?tr=w-640'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Purple';
}


function changeImageair4(){
    let display = document.getElementById('img1');
    display.src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715758500/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/301946_1_cmwazy.png?tr=w-640'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Blue';
}

function changeImagei141(){
    let display = document.getElementById('img1');
    display.src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672572/Croma%20Assets/Communication/Mobiles/Images/261932_0_bieudy.png?tr=w-400'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Purple';
}


function changeImagei142(){
    let display = document.getElementById('img1');
    display.src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672754/Croma%20Assets/Communication/Mobiles/Images/261939_0_pupa1w.png?tr=w-400'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Blue';
}

function changeImagei144(){
    let display = document.getElementById('img1');
    display.src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672676/Croma%20Assets/Communication/Mobiles/Images/261936_0_t49rkf.png?tr=w-400'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Starlight';
}

function changeImagei143(){
    let display = document.getElementById('img1');
    display.src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672263/Croma%20Assets/Communication/Mobiles/Images/261948_0_dggwto.png?tr=w-400'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Red';
}

function changeImagei145(){
    let display = document.getElementById('img1');
    display.src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672193/Croma%20Assets/Communication/Mobiles/Images/261945_0_sawc3n.png?tr=w-400'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Midnight';
}

function changeImagei146(){
    let display = document.getElementById('img1');
    display.src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708671903/Croma%20Assets/Communication/Mobiles/Images/270411_0_uvcqpt.png?tr=w-400'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Yellow';
}


function changeImagei14pro1(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png?tr=w-400'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Purple';
}

function changeImagei14pro2(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662655547/Croma%20Assets/Communication/Mobiles/Images/261970_blsyac.png?tr=w-400'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Starlight';
}

function changeImagei14pro3(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662702922/Croma%20Assets/Communication/Mobiles/Images/261961_xwrqo2.png?tr=w-400'
    let text = document.getElementById('look-text');
    text.innerHTML = 'white';
}


function changeImagei14pro4(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662703169/Croma%20Assets/Communication/Mobiles/Images/261968_wtgxez.png?tr=w-400'
    let text = document.getElementById('look-text');
    text.innerHTML = 'Black';
}



function changeImagempro1(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698822960/Croma%20Assets/Computers%20Peripherals/Laptop/Images/302693_7_e23evh.png?tr=w-640'
    let display2 = document.getElementById('img2');
    display2.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698822959/Croma%20Assets/Computers%20Peripherals/Laptop/Images/302693_5_oxy6qt.png?tr=w-640'
    let text  = document.getElementById('look-text');
    text.innerHTML = 'Space Black';
}


function changeImagempro(){
    let display = document.getElementById('img1');
    display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698815759/Croma%20Assets/Computers%20Peripherals/Laptop/Images/302726_7_dp56c2.png?tr=w-640'
    let display2 = document.getElementById('img2');
    display2.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698815759/Croma%20Assets/Computers%20Peripherals/Laptop/Images/302726_5_vecr9m.png?tr=w-640'
    let text  = document.getElementById('look-text');
    text.innerHTML = 'Silver';
}


function changeImagem1(){
let display = document.getElementById('m-img');
display.src = 'https://www.apple.com/in/macbook-pro/images/overview/themes/performance/pro_apps_software_development__b72dk94g8k4i_large.jpg';

let col = document.getElementById('li-change');
col.style.background ='yellow';
col.style.borderColor = 'yellow';
col.style.color = 'black';

let col1 = document.getElementById('li-change1');
col1.style.background = 'black';
col1.style.borderColor = 'white';
col1.style.color = 'white';

let col2 = document.getElementById('li-change2');
col2.style.background = 'black';
col2.style.borderColor = 'white';
col2.style.color = 'white';

let col3 = document.getElementById('li-change3');
col3.style.background = 'black';
col3.style.borderColor = 'white';
col3.style.color = 'white';


let col4 = document.getElementById('li-change4');
col4.style.background = 'black';
col4.style.borderColor = 'white';
col4.style.color = 'white';


let col5 = document.getElementById('li-change5');
col5.style.background = 'black';
col5.style.borderColor = 'white';
col5.style.color = 'white';
}

function changeImagem2(){
    let display = document.getElementById('m-img');
    display.src = 'https://www.apple.com/in/macbook-pro/images/overview/themes/performance/pro_apps_photo_editing__kfx44ctxrpm6_large.jpg'

    let col = document.getElementById('li-change1');
    col.style.background ='yellow';
    col.style.borderColor = 'yellow';
    col.style.color = 'black';

let col1 = document.getElementById('li-change');
col1.style.background = 'black';
col1.style.borderColor = 'white';
col1.style.color = 'white';

let col2 = document.getElementById('li-change2');
col2.style.background = 'black';
col2.style.borderColor = 'white';
col2.style.color = 'white';

let col3 = document.getElementById('li-change3');
col3.style.background = 'black';
col3.style.borderColor = 'white';
col3.style.color = 'white';


let col4 = document.getElementById('li-change4');
col4.style.background = 'black';
col4.style.borderColor = 'white';
col4.style.color = 'white';


let col5 = document.getElementById('li-change5');
col5.style.background = 'black';
col5.style.borderColor = 'white';
col5.style.color = 'white';
    }

    function changeImagem3(){
        let display = document.getElementById('m-img');
        display.src = 'https://www.apple.com/in/macbook-pro/images/overview/themes/performance/pro_apps_graphic_design__rng4tmvt2oia_large.jpg'


        let col = document.getElementById('li-change2');
        col.style.background ='yellow';
        col.style.borderColor = 'yellow';
        col.style.color = 'black';



let col1 = document.getElementById('li-change');
col1.style.background = 'black';
col1.style.borderColor = 'white';
col1.style.color = 'white';

let col2 = document.getElementById('li-change1');
col2.style.background = 'black';
col2.style.borderColor = 'white';
col2.style.color = 'white';

let col3 = document.getElementById('li-change3');
col3.style.background = 'black';
col3.style.borderColor = 'white';
col3.style.color = 'white';


let col4 = document.getElementById('li-change4');
col4.style.background = 'black';
col4.style.borderColor = 'white';
col4.style.color = 'white';


let col5 = document.getElementById('li-change5');
col5.style.background = 'black';
col5.style.borderColor = 'white';
col5.style.color = 'white';
        }    


        function changeImagem4(){
            let display = document.getElementById('m-img');
            display.src  = 'https://www.apple.com/in/macbook-pro/images/overview/themes/performance/pro_apps_3d_rendering__bro3s1qzel8i_large.jpg'

            let col = document.getElementById('li-change3');
            col.style.background ='yellow';
            col.style.borderColor = 'yellow';
            col.style.color = 'black';



            let col1 = document.getElementById('li-change');
col1.style.background = 'black';
col1.style.borderColor = 'white';
col1.style.color = 'white';

let col2 = document.getElementById('li-change1');
col2.style.background = 'black';
col2.style.borderColor = 'white';
col2.style.color = 'white';

let col3 = document.getElementById('li-change2');
col3.style.background = 'black';
col3.style.borderColor = 'white';
col3.style.color = 'white';


let col4 = document.getElementById('li-change4');
col4.style.background = 'black';
col4.style.borderColor = 'white';
col4.style.color = 'white';


let col5 = document.getElementById('li-change5');
col5.style.background = 'black';
col5.style.borderColor = 'white';
col5.style.color = 'white';
            }    


            function changeImagem5(){
                let display = document.getElementById('m-img');
                display.src = 'https://www.apple.com/in/macbook-pro/images/overview/themes/performance/pro_apps_video_editing__eanvpk01l2s2_large.jpg'
                let col = document.getElementById('li-change4');
                col.style.background ='yellow';
                col.style.borderColor = 'yellow';
                col.style.color = 'black';
                
let col1 = document.getElementById('li-change');
col1.style.background = 'black';
col1.style.borderColor = 'white';
col1.style.color = 'white';

let col2 = document.getElementById('li-change1');
col2.style.background = 'black';
col2.style.borderColor = 'white';
col2.style.color = 'white';

let col3 = document.getElementById('li-change2');
col3.style.background = 'black';
col3.style.borderColor = 'white';
col3.style.color = 'white';


let col4 = document.getElementById('li-change3');
col4.style.background = 'black';
col4.style.borderColor = 'white';
col4.style.color = 'white';


let col5 = document.getElementById('li-change5');
col5.style.background = 'black';
col5.style.borderColor = 'white';
col5.style.color = 'white';
                }                


                function changeImagem6(){
                    let display = document.getElementById('m-img');
                    display.src = 'https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/pro_apps_gaming__e6jjkud0wyky_large.jpg';
                    let col = document.getElementById('li-change5');
                    col.style.background ='yellow';
                    col.style.borderColor = 'yellow';
                    col.style.color = 'black';


let col1 = document.getElementById('li-change');
col1.style.background = 'black';
col1.style.borderColor = 'white';
col1.style.color = 'white';

let col2 = document.getElementById('li-change1');
col2.style.background = 'black';
col2.style.borderColor = 'white';
col2.style.color = 'white';

let col3 = document.getElementById('li-change2');
col3.style.background = 'black';
col3.style.borderColor = 'white';
col3.style.color = 'white';


let col4 = document.getElementById('li-change3');
col4.style.background = 'black';
col4.style.borderColor = 'white';
col4.style.color = 'white';


let col5 = document.getElementById('li-change4');
col5.style.background = 'black';
col5.style.borderColor = 'white';
col5.style.color = 'white';
                    }                     





                    function changeImagemair1(){
                        let display = document.getElementById('img1');
                        display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709827771/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305381_7_qtz3nq.png?tr=w-640'
                        let display2 = document.getElementById('img2');
                        display2.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709827771/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305381_5_bupg5f.png?tr=w-640'    
                        let text  = document.getElementById('look-text');
                        text.innerHTML = 'Starlight';
                    }                    




                    function changeImagemair(){
                        let display = document.getElementById('img1');
                        display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709727278/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305382_7_ig88ze.png?tr=w-640'
                        let display2 = document.getElementById('img2');
                        display2.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709727275/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305382_5_morkxp.png?tr=w-640'    
                        let text  = document.getElementById('look-text');
                        text.innerHTML = 'Midnight';
                    }                    




                    function changeImagemair2(){
                        let display = document.getElementById('img1');
display.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709724943/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305375_7_z29rch.png?tr=w-640'
                        let display2 = document.getElementById('img2');
                        display2.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709724935/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305375_5_uxpqbo.png?tr=w-640'
                        let text  = document.getElementById('look-text');
                        text.innerHTML = 'Space Grey';
                    }                    




                    function changeImagemair3(){
                        let display = document.getElementById('img1');
                        display.src  = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709828376/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305386_7_vuxjfo.png?tr=w-640'
                        let display2 = document.getElementById('img2');
                        display2.src = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709828374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305386_5_vbwdvu.png?tr=w-640'
                        let text  = document.getElementById('look-text');
                        text.innerHTML = 'Silver';
                    }                 



function changebg1(){
    let col = document.getElementById('i-buy1');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy2');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'white';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'white';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'black';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'black';

    let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹134900.00'

    let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹144900.00';

            let inner2 = document.getElementById('c-max3');
    inner2.innerHTML = '₹164900.00';

            let inner3 = document.getElementById('c-max4');
    inner3.innerHTML = '₹184900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Model : 15 Pro';




    // let inner4 = document.getElementById('ci-max1');
    // inner4.innerHTML = '(From ₹79900.00)'

    //         let inner5 = document.getElementById('ci-max2');
    // inner5.innerHTML = '(From ₹89900.00)'

    //         let inner6 = document.getElementById('ci-max3');
    // inner6.innerHTML = '(From ₹109900.00)'


}                    


function changebg1i(){
    let col = document.getElementById('i-buy1');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy2');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'white';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'white';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'black';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'black';

    let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹79900.00'

    let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹89900.00';

            let inner2 = document.getElementById('c-max3');
    inner2.innerHTML = '₹109900.00';


    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Model : 15';




}               



function changebg2(){
    let col = document.getElementById('i-buy2');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy1');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'black';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'black';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'white';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'white';

        let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹159900.00'

            let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹169900.00'

            let inner2 = document.getElementById('c-max3');
    inner2.innerHTML = '₹179900.00'

            let inner3 = document.getElementById('c-max4');
    inner3.innerHTML = '₹199900.00'

            let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Model : 15 Pro Max'


}

function changebg2i(){
    let col = document.getElementById('i-buy2');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy1');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'black';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'black';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'white';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'white';

        let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹89900.00'

            let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹99900.00'

            let inner2 = document.getElementById('c-max3');
    inner2.innerHTML = '₹119900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Model : 15 Plus';



}




function changebg3(){
    // let col = document.getElementById('i-buy-3');
    // col.style.backgroundColor = 'blue';

    let col1 = document.getElementById('i-buy3');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p3');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max1');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy4');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p4');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max2');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy5');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p5');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max3');
    sp3.style.color = 'black';

    let col4 = document.getElementById('i-buy6');
    col4.style.backgroundColor = 'white';
    // console.log("hello");
    let p4 = document.getElementById('i-buy-p6');
    p4.style.color='black';
    let sp4 =document.getElementById('c-max4');
    sp4.style.color = 'black';


    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 128GB';


    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML


}


function minibg1(){
    let col1 = document.getElementById('i-buy3');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p3');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max1');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy4');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p4');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max2');
    sp2.style.color = 'black';



    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 64GB';


    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function changebg3a(){
    let col1 = document.getElementById('i-buy3');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p3');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max1');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy4');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p4');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max2');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy5');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p5');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max3');
    sp3.style.color = 'black';

    let col4 = document.getElementById('i-buy6');
    col4.style.backgroundColor = 'white';
    // console.log("hello");
    let p4 = document.getElementById('i-buy-p6');
    p4.style.color='black';
    let sp4 =document.getElementById('c-max4');
    sp4.style.color = 'black';


    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 256GB';


    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function ifinal1(){
    let col1 = document.getElementById('i-buy3');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p3');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max1');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy4');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p4');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max2');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy5');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p5');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max3');
    sp3.style.color = 'black';


    // console.log("hello");
    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 128GB';


    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function changebg4(){
    let col1 = document.getElementById('i-buy4');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p4');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max2');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy5');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p5');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max3');
    sp3.style.color = 'black';

    let col4 = document.getElementById('i-buy6');
    col4.style.backgroundColor = 'white';
    // console.log("hello");
    let p4 = document.getElementById('i-buy-p6');
    p4.style.color='black';
    let sp4 =document.getElementById('c-max4');
    sp4.style.color = 'black';

    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 256GB';

    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function minibg2(){
    let col1 = document.getElementById('i-buy4');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p4');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max2');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';


    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 256GB';

    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function changebg4a(){
    let col1 = document.getElementById('i-buy4');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p4');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max2');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy5');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p5');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max3');
    sp3.style.color = 'black';

    let col4 = document.getElementById('i-buy6');
    col4.style.backgroundColor = 'white';
    // console.log("hello");
    let p4 = document.getElementById('i-buy-p6');
    p4.style.color='black';
    let sp4 =document.getElementById('c-max4');
    sp4.style.color = 'black';

    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 512GB';

    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}


function ifinal2(){
    let col1 = document.getElementById('i-buy4');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p4');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max2');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy5');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p5');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max3');
    sp3.style.color = 'black';

    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 256GB';

    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function changebg5(){
    let col1 = document.getElementById('i-buy5');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p5');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max3');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy4');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p4');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max2');
    sp3.style.color = 'black';

    let col4 = document.getElementById('i-buy6');
    col4.style.backgroundColor = 'white';
    // console.log("hello");
    let p4 = document.getElementById('i-buy-p6');
    p4.style.color='black';
    let sp4 =document.getElementById('c-max4');
    sp4.style.color = 'black';

    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 512GB';

    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function changebg5a(){
    let col1 = document.getElementById('i-buy5');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p5');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max3');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy4');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p4');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max2');
    sp3.style.color = 'black';

    let col4 = document.getElementById('i-buy6');
    col4.style.backgroundColor = 'white';
    // console.log("hello");
    let p4 = document.getElementById('i-buy-p6');
    p4.style.color='black';
    let sp4 =document.getElementById('c-max4');
    sp4.style.color = 'black';

    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 1TB';

    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function ifinal3(){
    let col1 = document.getElementById('i-buy5');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p5');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max3');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy4');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p4');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max2');
    sp3.style.color = 'black';


    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 512GB';

    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function changebg6(){
    let col1 = document.getElementById('i-buy6');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p6');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max4');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy5');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p5');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max3');
    sp3.style.color = 'black';

    let col4 = document.getElementById('i-buy4');
    col4.style.backgroundColor = 'white';
    // console.log("hello");
    let p4 = document.getElementById('i-buy-p4');
    p4.style.color='black';
    let sp4 =document.getElementById('c-max2');
    sp4.style.color = 'black';

    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 1TB';

    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function changebg6a(){
    let col1 = document.getElementById('i-buy6');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p6');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max4');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';

    let col3 = document.getElementById('i-buy5');
    col3.style.backgroundColor = 'white';
    // console.log("hello");
    let p3 = document.getElementById('i-buy-p5');
    p3.style.color='black';
    let sp3 =document.getElementById('c-max3');
    sp3.style.color = 'black';

    let col4 = document.getElementById('i-buy4');
    col4.style.backgroundColor = 'white';
    // console.log("hello");
    let p4 = document.getElementById('i-buy-p4');
    p4.style.color='black';
    let sp4 =document.getElementById('c-max2');
    sp4.style.color = 'black';

    let text3 = document.getElementById('final-text2');
    text3.innerHTML = 'Storage : 2TB';

    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function buyimg(smallimg){
    let img = document.getElementById('big-img');
    img.src = smallimg.src;
}


function buyimg1(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT3B3azBNWWRMTTJUR1Y1SkFQMTJmY3dDb1F2RTNvUEVHRkpGaGtOSVFHak1BVzRkYUlmdElTYk5KZFpJVWpSSncvTitpdit2K0pPbnlhL04zRlVpb29BPT0=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT0k4dlVhYmNUMncvNW0rMC96dVNWek10TGtFVmpvcXlwUTdtMHkyQ2w5Q3NPNk14R2NXSUllTnlVQmlRN2JrUkJPYWptZWIvZmdEY3kyYXBqM25FNm5Oc2RLaWhkMzRjUVZUOVAxOTR3ZnhzPQ==&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT25hRlBISGtSY21yRmFhS24xOU1mRWFyeklvaXVkOCtBWFpMeWRrK0lya3lwU2htSWFYNUxrcUx0RW1zN3h2QzMwNnhpdUJnd0QxYk5raUFOTCs1K21BPT0=&traceId=1'
    let img4 = document.getElementById('smallimg4');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT0ZpOVRraUptMWVNajRXK05xdHlzazZyeklvaXVkOCtBWFpMeWRrK0lya3lwU2htSWFYNUxrcUx0RW1zN3h2QzNGTXltRnlCdHhadDhRRzZpOXdkeWxRPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT3B3azBNWWRMTTJUR1Y1SkFQMTJmY3dDb1F2RTNvUEVHRkpGaGtOSVFHak1BVzRkYUlmdElTYk5KZFpJVWpSSncvTitpdit2K0pPbnlhL04zRlVpb29BPT0=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Blue Titanium';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Blue Titanium';


}


function ibuyimg1(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OUtONFJuV1pCdWVXaWp6ZXpQQi9FWXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGV4VWh5Y2UwMXBvc0pMNmE5MmxpdHg=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2K0VaOWdDbG0rMWFzWTQvM3Ard1JQMFdnRHVRVjU3QkdNYWVENDFRVkdOcmprMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemNSaGlZMHRldmZJMXZvYnBxVWJZL253PT0=&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2KzY1WDgzZXdobUsrdWl1bW9EYktpdVpGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVZMcnZmMVJzbnlKSkNpUDBDWVk2Y3JXVi9BOUVIMG00R2gwMHk0cXVORTFBPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OUtONFJuV1pCdWVXaWp6ZXpQQi9FWXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGV4VWh5Y2UwMXBvc0pMNmE5MmxpdHg=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - pink';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Pink';
}

function buyimg2(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemN5bURtdG84aElEZERZa0lIV3FCN1lBPT0=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNXBpZTBZSTFXd2NrM2lQQnA5UDd4VXlLNzJTK29IYzVYNmtUZHhNRkxjTW56MTFHVVllUUdwVEVSR2U3Z3lLSkkvYy92Y3dudHhlWXNtY0F0T0xiWlRnTjFwejdkRXRZK1RJY1dDWGcrTGZvPQ==&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNVpEeWhrZkdKWXBoNVhqVm8yYk9VTXppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi93dUM3OHlyVzlyREJKNTVVOTZNZ1lnPT0=&traceId=1'
    let img4 = document.getElementById('smallimg4');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNVpBUWF3RDkwNHZqdTNEb0VrUHNLd1RpOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9pSnZ5ZGc0Nk83a01iRVBkUXpDbU93PT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemN5bURtdG84aElEZERZa0lIV3FCN1lBPT0=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - White Titanium';


    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'White Titanium';

}

function ibuyimg2(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OVBYaW5IbkNlYTVSSU9KZTY4cW9ENTBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0R2N1VyNEplcjgvcjN0dkF3OE9LSmZmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OUdiRkwxOEZWME82MmRteUdsTER3aUlUR0draTIzRTFuOXFqRytrZ2pReUlMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2gza1c0SUxDUlpoenFrVjFGellLU1RRPT0=&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OUdiRkwxOEZWME82MmRteUdsTER3aVU4RCtSVjFVQlQ4UUw4UGx6KzBZeXlYR1ZZZnEyMVlVQUliTThGMjNyaFNKdzlrZ2QrQmJ3c2RVTllqb0dIQ2hBMzUyQ2gvT1FHWU4vYXM1VGNEaDZBPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OVBYaW5IbkNlYTVSSU9KZTY4cW9ENTBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0R2N1VyNEplcjgvcjN0dkF3OE9LSmZmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Yellow';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Yellow';
}

function buyimg3(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemNnaGZTejMxa0hnUE1YYTBGeVJZdVBBPT0=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQXBpZTBZSTFXd2NrM2lQQnA5UDd4VXlLNzJTK29IYzVYNmtUZHhNRkxjTW56MTFHVVllUUdwVEVSR2U3Z3lLSkkvYy92Y3dudHhlWXNtY0F0T0xiWlR2b3ZFaWhaMWN5Vkk1SFFXNnplVnhRPQ==&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQVpEeWhrZkdKWXBoNVhqVm8yYk9VTXppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9NQllOblpUSkJRMnZ5WVpqUUxuOFF3PT0=&traceId=1'
    let img4 = document.getElementById('smallimg4');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQVpBUWF3RDkwNHZqdTNEb0VrUHNLd1RpOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9QOUJWemFhWEZHRFBGUDZlTUVHMXVRPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemNnaGZTejMxa0hnUE1YYTBGeVJZdVBBPT0=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Black Titanium';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Black Titanium';
}

function ibuyimg3(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OVN1RVI4NjBlOTAxZFZncWlrRCtEV09MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMzhTOVdVSFMvNkcyTDFvZWFCZUtsU3g=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGlVZHlzbnhhZ1YvbmdZQUl5dHZUaWhTQXNnZWpCZytycUV5NDgydWxCSFNSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFE0dVdFNG10NSs5ZFBjT2tsTnNzbWhnPT0=&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2L3BKNWNHekFKcG9wcm5BL3Z5WHN4ZThLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXUreHNUVGgwRHRrR3A2TEthZGg5R0FqOUw4OTRWZGM1S1M2V1YvaGlHWjZBPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-green?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OVN1RVI4NjBlOTAxZFZncWlrRCtEV09MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMzhTOVdVSFMvNkcyTDFvZWFCZUtsU3g=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Green';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Green';
}

function buyimg4(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0pOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hBa0RRdWFDUTBBczVnS0JqV3BGbkxRPT0=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL1dRWTNScmtQb0FJeTR2RktCeEt5SlZRcjMwV0dlTmkreXZ1Tnl0MUE3TzhBcUVMeE42RHhCaFNSWVpEU0VCb3pBRnVIV2lIN1NFbXpTWFdTRkkwU2NJa1duOXR1MHZEMmk1NEQvNHFrajJVPQ==&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0loc2FoMjNHVy9XNkZuMkNHZ1ZMYTVYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3RqNmtrN2xOOEt0YzdDN1YyR3pXNTcwQktjMmh6SzVQWUdWM3NIWmg0YTZZPQ==&traceId=1'
    let img4 = document.getElementById('smallimg4');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL2xvUnBuYWV4cEhMS1BPZjdQeWJZVnBYSDhSZzY2ODduOURTVGFFY0ZXVW9ZZ2JOWjZNUlpwa083ZytaUU1IQ3RIcnNzVDh6RFFYbklzdWhDVW5vRXk3bTN6OWFscEplRXJVNDhWeU9jWUtFPQ==&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0pOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hBa0RRdWFDUTBBczVnS0JqV3BGbkxRPT0=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Natural Titanium';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Natural Titanium';
}


function ibuyimg4(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGlYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGZPaDVjV2NEQVBZbTZldUQyWkpKRHk=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2KzBHVVRRT3NJZzAweS9QUkhWS0tlYldnRHVRVjU3QkdNYWVENDFRVkdOcmprMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemNBeXlhSmI0TDljSzRWK2doVytLREFnPT0=&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OEdYUFBWVGZFajdpclFpYWR4UnR1TVpGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVZ4eEM4Q0cwN0tXQzIvc1c2ZUN6NWg1SmdseVdkemNCYWFjKzF3OGpkUDFBPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGlYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGZPaDVjV2NEQVBZbTZldUQyWkpKRHk=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Blue';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Blue';
}


function ibuyimg5(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OUFsUUpuUVQ3cUdJUXc0NW5mTVpFdE9MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMytEdlJGYjQxc1NwMWpTZjJjMXIvZnE=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OWs4MU5ETTMxZlpydmdIeS80ekdVNmhTQXNnZWpCZytycUV5NDgydWxCSFNSTUMybCtXNXZpclhWeFpYZUcvRk80dEcwRGlZdHZNUlUyQVJ1QXFtSFFZbVoxdTV2eklXd0NGVGtVN3FWUEp3PT0=&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2L3BmOVJmTVM0WXhacUM3aDAyUURQLzhLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXVTaForUW5SUjJna2MxaXkvbElMRmJyWEdEc1JSTUFRdkk4ZTlIYWJSai9nPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OUFsUUpuUVQ3cUdJUXc0NW5mTVpFdE9MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMytEdlJGYjQxc1NwMWpTZjJjMXIvZnE=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Black';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Black';
}



function changebg1i14(){
    let col = document.getElementById('i-buy1');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy2');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'white';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'white';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'black';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'black';

    let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹69900.00'

    let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹79900.00';

            let inner2 = document.getElementById('c-max3');
    inner2.innerHTML = '₹99900.00';

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Model : 14';


}



function changebg2i14(){
    let col = document.getElementById('i-buy2');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy1');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'black';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'black';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'white';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'white';

        let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹79900.00'

            let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹89900.00'

            let inner2 = document.getElementById('c-max3');
    inner2.innerHTML = '₹109900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Model : 14 Plus';



}

function i14buyimg1(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbVc3RFBiSWNRam1BTnIzd0dDWHVMRXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGNJcDE1azhkV0s2OXk0MGxDQ09uYkI=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbXBIRHVjZ3Q3blVQd01oV0VKOTAyS1dnRHVRVjU3QkdNYWVENDFRVkdOcmprMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemM3NXBiU1J0cFBFaU1Wa2EvV3hFazZ3PT0=&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbjBnNVRzZklWVlpEWkNYaE00bURLaVpGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVY2R3hsY0ZidC8vSW1lQkRzOVd0aGQ4WTl0a1kzbVY5SDFMTVoxSUZsMU9nPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbVc3RFBiSWNRam1BTnIzd0dDWHVMRXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGNJcDE1azhkV0s2OXk0MGxDQ09uYkI=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Blue';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Blue';
}




function i14buyimg2(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArazlhcHIwU1o5bVZPUHA4bTg5eWRrNTBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0FQWHZRdHVDeTN2YVpDb3lvK0x3Z1RmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbncwTHMwd2I0eGN5SHlETjVoOEJwcElUR0draTIzRTFuOXFqRytrZ2pReUlMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hNTks2aUZ4dW9mZW85NDNrSnFubkhRPT0=&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbncwTHMwd2I0eGN5SHlETjVoOEJwcFU4RCtSVjFVQlQ4UUw4UGx6KzBZeXlYR1ZZZnEyMVlVQUliTThGMjNyaFJmMzVNSDRGeHRlVEZ5bm1EUUlRajNBVDZXdkFoQSszZG44Y3BpSUIrNG1BPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArazlhcHIwU1o5bVZPUHA4bTg5eWRrNTBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0FQWHZRdHVDeTN2YVpDb3lvK0x3Z1RmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Purple';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Purple';
}

function i14buyimg3(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-yellow?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbXIraXRtcU5ZQzFyR0o2ZWRlT1gzcTBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0Q3MEgvVy9kSmVWMWFaNndxeEVTYldmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-yellow_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHAra1R6SkFLOENPNFNtVGJ2dDkrUDQwUUlUR0draTIzRTFuOXFqRytrZ2pReUlMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hKZ0ZVRzlaUWxqRmRId2F4dG5ub1ZBPT0=&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-yellow_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHAra1R6SkFLOENPNFNtVGJ2dDkrUDQwUVU4RCtSVjFVQlQ4UUw4UGx6KzBZeXlYR1ZZZnEyMVlVQUliTThGMjNyaFNTb1psUFRJQmtSaUIreUJ2Z25zcTVEcUFwRTRpbzdIT2pSaGxmczNOM0VnPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-yellow?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbXIraXRtcU5ZQzFyR0o2ZWRlT1gzcTBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0Q3MEgvVy9kSmVWMWFaNndxeEVTYldmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Yellow';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Yellow';
}

function i14buyimg4(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArazIrU1NEYjh6WWVrVzhHM2F3a1dJUFpGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVV1ZjlxTlY3MytTR2REMjloelN3ZGs4WTl0a1kzbVY5SDFMTVoxSUZsMU9nPT0=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbkpIdC9TbEtBajY2eTlkeThLQmZ2OHBVWkQ5VTJXT2Y0NTllNitsYnR0QnppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9YR2FjT1phemJHWVppRmVwRnNCZXV3PT0=&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbkpIdC9TbEtBajY2eTlkeThLQmZ2ODVwZk1WSFgzNmhFZllMYTFHb1ZRM3hNQnJMcnc4RkxJd3ZMc3hKZVVFWHVTVU1oMU5mWVVWZ0poVzNqUG5iS05wcFozVERQRHB2MCs3MlVKMUQvRFB3PT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArazIrU1NEYjh6WWVrVzhHM2F3a1dJUFpGQnBBWVp4a3ZSd0Y4NzlDUVE4dUJUU08xVXZOQlVmeWYva2RCcG9vcVV1ZjlxTlY3MytTR2REMjloelN3ZGs4WTl0a1kzbVY5SDFMTVoxSUZsMU9nPT0=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Midnight';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Midnight';
}

function i14buyimg5(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-starlight?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbGUwTlVjOUJldmRGOC84dEFSaDRycThLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXQvQ0pmWjVYZDByTXJHUTNibVM4MnJoWkNxQWY3YXM0UzJvYS9ISU84QUtnPT0=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-starlight_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbGUwTlVjOUJldmRGOC84dEFSaDRycUhXdVRFTEJtYXQwRHV4cnFTcDEySk5JVUY1eklwSElSL2pyWFgySnpoc1RLa0ZJQjcvY2pnYVpRdGdHbzJQemdjbXowSnVIeVlPYkVZNVRSY3M0ZExINXFNVzc5YkZmK2I4YzJ4ZndkZUdjPQ==&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-starlight_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbGUwTlVjOUJldmRGOC84dEFSaDRycTFpZXI3TzRVNFlCMkNIUFdtczRsaFE3b3pFWnhZZ2g0M0pRR0pEdHVSRUVsZ0ZQNE5RSEVsL2tTWTJxWlpiYVpnZks5OU1ZK2NpS3oxTFVDUXZVY1hnPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-starlight?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbGUwTlVjOUJldmRGOC84dEFSaDRycThLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXQvQ0pmWjVYZDByTXJHUTNibVM4MnJoWkNxQWY3YXM0UzJvYS9ISU84QUtnPT0=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Starlight';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Starlight';
}


function i14buyimg6(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-product-red?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbWxXL3pKcXRQSld2d0VIS3Z6V2EyYTFHN0J1cFhnbVRLZGNTN2JhbjJDZkdKTG1lVWJJT2RXQWE0Mm9rU1V0V0MrbDgzTTV6NGFpYlJoUlR3TkpTczJ0dFZtNksyT2N6Y282SCsrbVpUdm9nPT0=&traceId=1'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-product-red_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbWxXL3pKcXRQSld2d0VIS3Z6V2EyYTVGaFNEbm5Id0t5UEloa0lyb1JBVG1SUWFRR0djWkwwY0JmTy9Ra0VQTGdVMGp0Vkx6UVZIOG4vNUhRYWFLS2xWeVpSd0psdjA1VWhEemVtbVE5bklQTXBPQVFrYkVDUXc0VUl2T252Mk5nPQ==&traceId=1'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-product-red_AV2?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbWxXL3pKcXRQSld2d0VIS3Z6V2EyYVRRKy9oMG1XQ29lV0xWbDlNbDhodndUMngwVnJycmY0WkN2ZnNvOUpFNFVycy9DdVBBV1pqMjF1NXdON25wQjN2KzJWU2dzQkRpNnhkMy9qUFhsd2JBPT0=&traceId=1'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-product-red?wid=5120&hei=2880&fmt=webp&qlt=70&.v=bjlYUjk1NXN2Uy9CTWFMaXBneUF0bEthL1VsNXgveGUwQ1JqNzA0ZHArbWxXL3pKcXRQSld2d0VIS3Z6V2EyYTFHN0J1cFhnbVRLZGNTN2JhbjJDZkdKTG1lVWJJT2RXQWE0Mm9rU1V0V0MrbDgzTTV6NGFpYlJoUlR3TkpTczJ0dFZtNksyT2N6Y282SCsrbVpUdm9nPT0=&traceId=1'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - (PRODUCT)RED';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = '(PRODUCT)RED';
}


function changebg1pro(){
    let col = document.getElementById('i-buy1');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy2');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'white';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'white';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'black';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'black';

    let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹99900.00'

    let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹129900.00';

    let inner2 = document.getElementById('c-max3');
    inner2.innerHTML = '₹159900.00';

    let inner3 = document.getElementById('c-max4');
    inner3.innerHTML = '₹199900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Model : 28.22 cm-11″';
}


function changebg2pro(){
    let col = document.getElementById('i-buy2');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy1');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'black';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'black';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'white';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'white';

        let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹129900.00'

            let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹149900.00'

            let inner2 = document.getElementById('c-max3');
    inner2.innerHTML = '₹189900.00'

            let inner3 = document.getElementById('c-max4');
    inner3.innerHTML = '₹229900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Model : 33.02 cm-13″';


}



function buyimgpro(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202405-13inch-spaceblack?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713697823724'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202405-13inch-spaceblack_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1714201067464'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202405-13inch-spaceblack_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713697827134'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202405-13inch-spaceblack?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713697823724'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Space Black';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Space Black';
}

function buyimgpro1(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202405-13inch-silver?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713496110389'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202405-13inch-silver_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1714201067110'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202405-13inch-silver_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713496113143'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202405-13inch-silver?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713496110389'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Silver';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Silver';
}


function changebg1air(){
    let col = document.getElementById('i-buy1');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy2');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'white';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'white';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'black';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'black';

    let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹59900.00'

    let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹69900.00';

    let inner2 = document.getElementById('c-max3');
    inner2.innerHTML = '₹89900.00';

    let inner3 = document.getElementById('c-max4');
    inner3.innerHTML = '₹109900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Model : 28.22 cm-11″';
}




function changebg2air(){
    let col = document.getElementById('i-buy2');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy1');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'black';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'black';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'white';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'white';

        let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹79900.00'

            let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹89900.00'

            let inner2 = document.getElementById('c-max3');
    inner2.innerHTML = '₹109900.00'

            let inner3 = document.getElementById('c-max4');
    inner3.innerHTML = '₹129900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Model : 33.02 cm-13″';


}



function buyimgair1(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-space-gray?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820142254'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-space-gray_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820138551'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-space-gray_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820160815'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-space-gray?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820142254'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Space Grey';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Space Grey';
}


function buyimgair2(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820140517'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-purple_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820137371'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-purple_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820160625'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820140517'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Purple';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Purple';
}


function buyimgair3(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820140987'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-starlight_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820137316'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-starlight_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820160630'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820140987'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Starlight';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Starlight';
}


function buyimgair4(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820142402'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-blue_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820138368'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-blue_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820160855'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-13inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1713820142402'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Blue';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Blue';
}



function changebg1mini(){
    let col = document.getElementById('i-buy1');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy2');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'white';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'white';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'black';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'black';

    let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹49900.00'

    let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹64900.00';


    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Connectivity : Wifi';
}


function changebg2mini(){
    let col = document.getElementById('i-buy2');
    col.style.backgroundColor = '#0077ED';
    let col1 = document.getElementById('i-buy1');
    col1.style.backgroundColor = 'white';
    // col.style.color = 'white';
    let col2 = document.getElementById('i-buy-p1')
    col2.style.color = 'black';

    let col3 = document.getElementById('i-buy-span')
    col3.style.color = 'black';
    let col4 = document.getElementById('i-buy-p2')
    col4.style.color = 'white';

    let col5 = document.getElementById('i-buy-span2')
    col5.style.color = 'white';

        let inner = document.getElementById('c-max1');
    inner.innerHTML = '₹64900.00'

            let inner1 = document.getElementById('c-max2');
    inner1.innerHTML = '₹79900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Connectivity : Wifi + Cellular';
}

function i14buyimgx(){
    let img = document.getElementById('smallimg1');
    img.src = ''
    let img2 = document.getElementById('smallimg2');
    img2.src = ''
    let img3 = document.getElementById('smallimg3');
    img3.src = ''
    let img5 = document.getElementById('big-img');
    img5.src = ''
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Blue';
}


function buyimgmini1(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-space-gray-wificell?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950638471'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-space-gray-wificell_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950644802'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-space-gray-wificell_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670633101617'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-space-gray-wificell?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950638471'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Space Grey';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Space Grey';
}

function buyimgmini2(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-pink-wificell?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950634675'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-pink-wificell_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950646313'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-pink-wificell_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670633101855'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-pink-wificell?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950634675'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Pink';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Pink';
}


function buyimgmini3(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-starlight-wificell?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950636759'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-starlight-wificell_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950645843'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-starlight-wificell_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670633101418'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-starlight-wificell?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950636759'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Starlight';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Starlight';
}


function buyimgmini4(){
    let img = document.getElementById('smallimg1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-purple-wificell?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950637986'
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-purple-wificell_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950650810'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-purple-wificell_AV2?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670633101734'
    let img5 = document.getElementById('big-img');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-purple-wificell?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670950637986'
    let txt = document.getElementById('buy-img-text');
    txt.innerHTML = 'Color - Purple';

    let imga = document.getElementById('final-img1');
    imga.src  = img5.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Purple';
}


function airm2(){
    let col = document.getElementById('js-air1');
    col.style.backgroundColor = '#0077ED';
    col.style.color = 'white';

    let col1 = document.getElementById('js-air2');
    col1.style.backgroundColor = 'white';
    col1.style.color = 'black';

    let col2 = document.getElementById('js-air3');
    col2.style.backgroundColor = 'white';
    col2.style.color = 'black';

    let change = document.getElementById('air-img1');
    change.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688034';
    change.style.height = '300px';
    // change.id = 'air-img1';

    let change1 = document.getElementById('air-img2');
    change1.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688034';
    change1.style.height = '300px';

    let change3 = document.getElementById('air-img3');
    change3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-m2-icon-202402?wid=52&hei=52&fmt=png-alpha&.v=1708029704426'


    let change4 = document.getElementById('air-img4');
    change4.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-m2-icon-202402?wid=52&hei=52&fmt=png-alpha&.v=1708029704426'

    let text = document.getElementById('air-span1');
    text.innerHTML = '8-Core CPU <br> 8-Core GPU <br> 8GB Unified Memory <br> 256GB SSD Storage'

    let text1 = document.getElementById('air-span2');
    text1.innerHTML = '16-core Neural Engine <br> 1080p FaceTime HD camera <br> MagSafe 3 charging port <br> Two Thunderbolt / USB 4 ports <br> Support for one external display <br> Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 30W USB-C Power Adapter'

    let text3 = document.getElementById('air-span3');
    text3.innerHTML= 'From ₹99900.00';

    let text4 = document.getElementById('air-span4');
    text4.innerHTML = '8-Core CPU <br> 10-Core GPU <br> 8GB Unified Memory <br> 512GB SSD Storage'

    let text5 = document.getElementById('air-span5');
    text5.innerHTML = '16-core Neural Engine <br> 1080p FaceTime HD camera <br> MagSafe 3 charging port <br> Two Thunderbolt / USB 4 ports <br> Support for one external display <br> Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 35W USB-C Power Adapter'

    let text6 = document.getElementById('air-span6');
    text6.innerHTML= 'From ₹119900.00';

    let del = document.getElementById('air-buy-flex3');
    del.style.display = 'block';

}


function airm3(){
    let col = document.getElementById('js-air2');
    col.style.backgroundColor = '#0077ED';
    col.style.color = 'white';

    let col1 = document.getElementById('js-air1');
    col1.style.backgroundColor = 'white';
    col1.style.color = 'black';

    let col2 = document.getElementById('js-air3');
    col2.style.backgroundColor = 'white';
    col2.style.color = 'black';

    let change = document.getElementById('air-img1');
    change.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688034';
    change.style.height = '300px';
    // change.id = 'air1-img1';

    let change1 = document.getElementById('air-img2');
    change1.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688034';
    change1.style.height = '300px';

    let change3 = document.getElementById('air-img3');
    change3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-m3-icon-202402?wid=51&hei=51&fmt=png-alpha&.v=1707346632495'

    let change4 = document.getElementById('air-img4');
    change4.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-m3-icon-202402?wid=51&hei=51&fmt=png-alpha&.v=1707346632495'


    let text = document.getElementById('air-span1');
    text.innerHTML = '8-Core CPU <br> 10-Core GPU <br> 8GB Unified Memory <br> 512GB SSD Storage'

    let text1 = document.getElementById('air-span2');
    text1.innerHTML = '16-core Neural Engine <br> 1080p FaceTime HD camera <br> MagSafe 3 charging port <br> Two Thunderbolt / USB 4 ports <br> Support for two external display <br> Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 35W USB-C Power Adapter'

    let text3 = document.getElementById('air-span3');
    text3.innerHTML= 'From ₹134900.00';

    let text4 = document.getElementById('air-span4');
    text4.innerHTML = '8-Core CPU <br> 10-Core GPU <br> 16GB Unified Memory <br> 512GB SSD Storage'

    let text5 = document.getElementById('air-span5');
    text5.innerHTML = '16-core Neural Engine <br> 1080p FaceTime HD camera <br> MagSafe 3 charging port <br> Two Thunderbolt / USB 4 ports <br> Support for two external display <br> Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 35W USB-C Power Adapter'

    let text6 = document.getElementById('air-span6');
    text6.innerHTML= 'From ₹154900.00';

    let del = document.getElementById('air-buy-flex3');
    del.style.display = 'none';
    // del.style.backgroundColor = 'black';

}


function airm3a(){
    let col = document.getElementById('js-air3');
    col.style.backgroundColor = '#0077ED';
    col.style.color = 'white';

    let col1 = document.getElementById('js-air1');
    col1.style.backgroundColor = 'white';
    col1.style.color = 'black';

    let col2 = document.getElementById('js-air2');
    col2.style.backgroundColor = 'white';
    col2.style.color = 'black';

    let change = document.getElementById('air-img1');
    // change.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1684518479433';
    // change.id = 'update-img1';
    change.style.height = '330px';

    let change1 = document.getElementById('air-img2');
    // change1.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1684518479433';
    change1.style.height = '330px';


    let change3 = document.getElementById('air-img3');
    change3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-m3-icon-202402?wid=51&hei=51&fmt=png-alpha&.v=1707346632495'

    let change4 = document.getElementById('air-img4');
    change4.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-m3-icon-202402?wid=51&hei=51&fmt=png-alpha&.v=1707346632495'


    let text = document.getElementById('air-span1');
    text.innerHTML = '8-Core CPU <br> 10-Core GPU <br> 8GB Unified Memory <br> 512GB SSD Storage'

    let text1 = document.getElementById('air-span2');
    text1.innerHTML = '16-core Neural Engine <br> 1080p FaceTime HD camera <br> MagSafe 3 charging port <br> Two Thunderbolt / USB 4 ports <br> Support for two external display <br> Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 35W USB-C Power Adapter'

    let text3 = document.getElementById('air-span3');
    text3.innerHTML= 'From ₹154900.00';

    let text4 = document.getElementById('air-span4');
    text4.innerHTML = '8-Core CPU <br> 10-Core GPU <br> 16GB Unified Memory <br> 512GB SSD Storage'

    let text5 = document.getElementById('air-span5');
    text5.innerHTML = '16-core Neural Engine <br> 1080p FaceTime HD camera <br> MagSafe 3 charging port <br> Two Thunderbolt / USB 4 ports <br> Support for two external display <br> Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 35W USB-C Power Adapter'

    let text6 = document.getElementById('air-span6');
    text6.innerHTML= 'From ₹179900.00';


var colo = document.getElementById('js-air3') ;
    if ( colo.style.backgroundColor == '#0077ED' && colo.style.color == 'white') {
        console.log("hey");
    }
    else{
        console.log('no');
        // function changeair9(){
        //     let C = document.getElementById('air-img1');
        //     C.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688034'
        //     let txt = document.getElementById('air-text1');
        //     txt.innerHTML = 'Color - Midnighte';    
        // }
    }
}






function changeair1(){
    let C = document.getElementById('air-img1');
    C.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688034'
    let txt = document.getElementById('air-text1');
    txt.innerHTML = 'Color - Midnight';    

    // if (C.src == 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433') {
    //     C.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433';
    // }

    // else{
    //         C.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688034';
    // }


}



function changeair5(){
let C1 = document.getElementById('air-img2');
C1.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688034'
let txt1 = document.getElementById('air-text2');
txt1.innerHTML = 'Color - Midnight';    
}

function changeairx(){
    let C = document.getElementById('air-img1');
    C.src = ''
    let txt = document.getElementById('air-text1');
    txt.innerHTML = 'Color - Midnight';    
}

function changeair2(){
    let C = document.getElementById('air-img1');
    C.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-starlight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367845124'
    let txt = document.getElementById('air-text1');
    txt.innerHTML = 'Color - Starlight';    
}

function changeair6(){
let C1 = document.getElementById('air-img2');
C1.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-starlight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367845124'
let txt1 = document.getElementById('air-text2');
txt1.innerHTML = 'Color - Starlight';  
}

function changeair3(){
    let C = document.getElementById('air-img1');
    C.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-spacegray-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688029'
    let txt = document.getElementById('air-text1');
    txt.innerHTML = 'Color - Space Grey';    
}


function changeair4(){
    let C = document.getElementById('air-img1');
    C.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-silver-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688030'
    let txt = document.getElementById('air-text1');
    txt.innerHTML = 'Color - Silver';    
}


function changeair7(){
    let C = document.getElementById('air-img2');
    C.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-spacegray-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688029'
    let txt = document.getElementById('air-text2');
    txt.innerHTML = 'Color - Space Grey';    
}

function changeair8(){
    let C = document.getElementById('air-img2');
    C.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-silver-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688030'
    let txt = document.getElementById('air-text2');
    txt.innerHTML = 'Color - Silver';    
}

// var col = document.getElementById('js-air3') ;

// if ( js-air3.style.backgroundColor == '#0077ED' && js-air3.style.color == 'white') {
//     // function changeair9(){
//     //     let C = document.getElementById('air-img1');
//     //     C.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1708367688034'
//     //     let txt = document.getElementById('air-text1');
//     //     txt.innerHTML = 'Color - Midnighte';    
//     // }
//     console.log("hey");
// }


function probuy1(){
    let img = document.getElementById('air-img1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830200';
    let text = document.getElementById('air-text1');
    text.innerHTML = 'Color - Space Grey';

}


function probuy2(){
    let img = document.getElementById('air-img1');
    img.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830269';
    let text = document.getElementById('air-text1');
    text.innerHTML = 'Color - Silver';

}

function probuy3(){
    let img1 = document.getElementById('air-img2');
    img1.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830200';
    let text1 = document.getElementById('air-text2');
    text1.innerHTML = 'Color - Space Grey';
}

function probuy4(){
    let img1 = document.getElementById('air-img2');
    img1.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830269';
    let text1 = document.getElementById('air-text2');
    text1.innerHTML = 'Color - Silver';
}

function probuy5(){
        let img2 = document.getElementById('air-img3');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830269';
        let text2 = document.getElementById('air-text3');
    text2.innerHTML = 'Color - Space Grey';
}

function probuy6(){
        let img2 = document.getElementById('air-img3');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830269';
    let text2 = document.getElementById('air-text3');
    text2.innerHTML = 'Color - Silver';
}

function probuy7(){
        let img3 = document.getElementById('air-img4');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830200';
        let text3 = document.getElementById('air-text4');
    text3.innerHTML = 'Color - Space Grey';
}

function probuy8(){
        let img3 = document.getElementById('air-img4');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830269';
        let text3 = document.getElementById('air-text4');
    text3.innerHTML = 'Color - Silver';
}

function probuy9(){
        let img4 = document.getElementById('air-img5');
    img4.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830200';
        let text4 = document.getElementById('air-text5');
    text4.innerHTML = 'Color - Space Grey';
}

function probuy10(){
        let img4 = document.getElementById('air-img5');
    img4.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830269';
        let text4 = document.getElementById('air-text5');
    text4.innerHTML = 'Color - Silver';
}

function probuy11(){
        let img5 = document.getElementById('air-img6');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830200';
        let text5 = document.getElementById('air-text6');
    text5.innerHTML = 'Color - Space Grey';
}

function probuy12(){
        let img5 = document.getElementById('air-img6');
    img5.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830269';
        let text5 = document.getElementById('air-text6');
    text5.innerHTML = 'Color - Silver';
}

function pro14(){
    let col1 = document.getElementById('js-air1');
    col1.style.backgroundColor = '#0077ED';
    col1.style.color = 'white';

    let col2 = document.getElementById('js-air3');
    col2.style.backgroundColor  ='white';
    col2.style.color = 'black';

    let del1 = document.getElementById('pro-del1');
    del1.style.display = 'block';

    let del2 = document.getElementById('pro-del2');
    del2.style.display = 'block';


    let imga = document.getElementById('air-img1');
    imga.style.height = '300px';

    let imgab = document.getElementById('air-img2');
    imgab.style.height = '300px';

    let imgc = document.getElementById('air-img3');
    imgc.style.height = '300px';

    let imgd = document.getElementById('air-img4');
    imgd.style.height = '300px';


    let img1 = document.getElementById('air-img3a');
    img1.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-m3-icon-202310?wid=51&hei=51&fmt=png-alpha&.v=1697039562647'

    let img2 = document.getElementById('air-img4a');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-m3-icon-202310?wid=51&hei=51&fmt=png-alpha&.v=1697039562647'

    let img3 = document.getElementById('air-img5a');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-m3-icon-202310?wid=51&hei=51&fmt=png-alpha&.v=1697039562647'

    let img4 = document.getElementById('air-img6a');
    img4.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-m3-pro-icon-202310?wid=51&hei=51&fmt=png-alpha&.v=1697039562659'


    let text = document.getElementById('air-span1');
    text.innerHTML = '8-core CPU <br> 10-core GPU <br> 8GB Unified Memory <br> 512GB SSD Storage'
    let text1 = document.getElementById('air-span2');
    text1.innerHTML = '(14.2″) Liquid Retina XDR display <br> Magsafe 3 charging port <br> Three Thunderbolt/ USB 4 ports <br> Support for one external display <br>  Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 140W USB-C Power Adapter' 
    let text3 = document.getElementById('air-span3');
    text3.innerHTML = 'From ₹169900.00';

    let text4 = document.getElementById('air-span4');
    text4.innerHTML = '8-core CPU <br> 10-core GPU <br> 8GB Unified Memory <br> 1TB SSD Storage'
    let text5 = document.getElementById('air-span5');
    text5.innerHTML = '(14.2″) Liquid Retina XDR display <br> Magsafe 3 charging port <br> Three Thunderbolt/ USB 4 ports <br> Support for one external display <br>  Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 140W USB-C Power Adapter' 
    let text6 = document.getElementById('air-span6');
    text6.innerHTML = 'From ₹189900.00';

    let text7 = document.getElementById('air-span7');
    text7.innerHTML = '8-core CPU <br> 10-core GPU <br> 16GB Unified Memory <br> 1TB SSD Storage'
    let text8 = document.getElementById('air-span8');
    text8.innerHTML = '(14.2″) Liquid Retina XDR display <br> Magsafe 3 charging port <br> Three Thunderbolt/ USB 4 ports <br> Support for one external display <br>  Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 140W USB-C Power Adapter' 
    let text9 = document.getElementById('air-span9');
    text9.innerHTML = 'From ₹209900.00';


    let text10 = document.getElementById('air-span10');
    text10.innerHTML = '11-core CPU <br> 14-core GPU <br> 18GB Unified Memory <br> 512GB SSD Storage'
    let text11 = document.getElementById('air-span11');
    text11.innerHTML = '(14.2″) Liquid Retina XDR display <br> Magsafe 3 charging port <br> Three Thunderbolt/ USB 4 ports <br> Support for one external display <br>  Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 140W USB-C Power Adapter' 
    let text12 = document.getElementById('air-span12');
    text12.innerHTML = 'From ₹199900.00';
}

function pro16(){
    let col1 = document.getElementById('js-air3');
    col1.style.backgroundColor = '#0077ED';
    col1.style.color = 'white';

    let col2 = document.getElementById('js-air1');
    col2.style.backgroundColor  ='white';
    col2.style.color = 'black';

    let del1 = document.getElementById('pro-del1');
    del1.style.display = 'none';

    let del2 = document.getElementById('pro-del2');
    del2.style.display = 'none';

    let imga = document.getElementById('air-img1');
    imga.style.height = '340px';

    let imgab = document.getElementById('air-img2');
    imgab.style.height = '340px';

    let imgc = document.getElementById('air-img3');
    imgc.style.height = '340px';

    let imgd = document.getElementById('air-img4');
    imgd.style.height = '340px';

    let img1 = document.getElementById('air-img3a');
    img1.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-m3-pro-icon-202310?wid=51&hei=51&fmt=png-alpha&.v=1697039562659'

    let img2 = document.getElementById('air-img4a');
    img2.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-m3-pro-icon-202310?wid=51&hei=51&fmt=png-alpha&.v=1697039562659'

    let img3 = document.getElementById('air-img5a');
    img3.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-m3-max-icon-202310?wid=51&hei=51&fmt=png-alpha&.v=1697039562691'

    let img4 = document.getElementById('air-img6a');
    img4.src = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-m3-max-icon-202310?wid=51&hei=51&fmt=png-alpha&.v=1697039562691'

    let text = document.getElementById('air-span1');
    text.innerHTML = '12-core CPU <br> 18-core GPU <br> 18GB Unified Memory <br> 512GB SSD Storage'
    let text1 = document.getElementById('air-span2');
    text1.innerHTML = '(16.2″) Liquid Retina XDR display <br> Magsafe 3 charging port <br> Three Thunderbolt/ USB 4 ports <br> Support for one external display <br>  Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 140W USB-C Power Adapter' 
    let text3 = document.getElementById('air-span3');
    text3.innerHTML = 'From ₹249900.00';

    let text4 = document.getElementById('air-span4');
    text4.innerHTML = '12-core CPU <br> 18-core GPU <br> 36GB Unified Memory <br> 512GB SSD Storage'
    let text5 = document.getElementById('air-span5');
    text5.innerHTML = '(16.2″) Liquid Retina XDR display <br> Magsafe 3 charging port <br> Three Thunderbolt/ USB 4 ports <br> Support for one external display <br>  Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 140W USB-C Power Adapter' 
    let text6 = document.getElementById('air-span6');
    text6.innerHTML = 'From ₹289900.00';

    let text7 = document.getElementById('air-span7');
    text7.innerHTML = '14-core CPU <br> 30-core GPU <br> 36GB Unified Memory <br> 1TB SSD Storage'
    let text8 = document.getElementById('air-span8');
    text8.innerHTML = '(16.2″) Liquid Retina XDR display <br> Magsafe 3 charging port <br> Three Thunderbolt/ USB 4 ports <br> Support for one external display <br>  Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 140W USB-C Power Adapter' 
    let text9 = document.getElementById('air-span9');
    text9.innerHTML = 'From ₹349900.00';


    let text10 = document.getElementById('air-span10');
    text10.innerHTML = '16-core CPU <br> 40-core GPU <br> 48GB Unified Memory <br> 1TB SSD Storage'
    let text11 = document.getElementById('air-span11');
    text11.innerHTML = '(16.2″) Liquid Retina XDR display <br> Magsafe 3 charging port <br> Three Thunderbolt/ USB 4 ports <br> Support for one external display <br>  Magic Keyboard with Touch ID <br> Force Touch trackpad <br> 140W USB-C Power Adapter' 
    let text12 = document.getElementById('air-span12');
    text12.innerHTML = 'From ₹399900.00';

}

function se1(){
    let col1 = document.getElementById('i-buy1');
    col1.style.backgroundColor = '#0077ED';
    let col3 = document.getElementById('i-buy-p1');
    col3.style.color = 'white';

    let col4 = document.getElementById('i-buy-span1');
    col4.style.color = 'white';

    let col2 = document.getElementById('i-buy2');
    col2.style.backgroundColor = 'white';

    let col5 = document.getElementById('i-buy-p2');
    col5.style.color = 'Black';

    let col6 = document.getElementById('i-buy-span2');
    col6.style.color = 'Black';

    let text1 = document.getElementById('c-max1');
    text1.innerHTML = '₹29900.00'

    let text2 = document.getElementById('c-max2');
    text2.innerHTML = '₹34900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Case Size : 40mm';
}

function se2(){
    let col1 = document.getElementById('i-buy2');
    col1.style.backgroundColor = '#0077ED';
    // col1.style.color = 'white';
    let col3 = document.getElementById('i-buy-p2');
    col3.style.color = 'white';

    let col4 = document.getElementById('i-buy-span2');
    col4.style.color = 'white';

    let col2 = document.getElementById('i-buy1');
    col2.style.backgroundColor = 'white';


    let col5 = document.getElementById('i-buy-p1');
    col5.style.color = 'Black';

    let col6 = document.getElementById('i-buy-span1');
    col6.style.color = 'Black';

    let text1 = document.getElementById('c-max1');
    text1.innerHTML = '₹32900.00'

    let text2 = document.getElementById('c-max2');
    text2.innerHTML = '₹37900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Case Size : 44mm';


}

function sebuy1(){
    let img1 = document.getElementById('smallimg1');
    img1.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT2U3ref_VW_34FR+watch-case-40-aluminum-starlight-cell-se_VW_34FR+watch-face-40-aluminum-starlight-se_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=Nk1sQzUrVmFkSWVyQnJPaHc3ZFViaytGZUJWLzNFUFVydllxZFp0d1M4NktoaXQwYi9wRGFOV2FsZVA1S1dYc0pwdFF5NnR5cUNqbFQrNVdtR2RJc000NFUvdjNTVSt0V2IwU21IaCsyZTZWWXA2M1k2V2FoWUZwQnhPVmpvS1UvRzFIdDQ1d3o4WlZDaURXb3g0R3dKRnZGUUdUeGtYN2gySi9ZaWRpZitLckJnajVCaGRzU0pBREM1Q082Uk51NXVkZ2t0VWxQK2o2M01obVdMRmRjdWY3eTMySit2MkdjZ1VDQjZjRWtZdW4wNjB2MHpUUXEycE9KUUVJZHM5NQ=='
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT2U3ref_VW_PF+watch-case-40-aluminum-starlight-cell-se_VW_PF+watch-face-40-aluminum-starlight-se_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=eE1kT0NSSGsxKzFUZllNd25pbzlkRFh2Y2svR0hOSGs1YWNWeFBUeXNNeVFHa2kzMW15bmN2SExwWlRtbTRDVUUxbFY3Z2ZJN2Y4Z2duazBXcnZKRmhycGFmRWpQdERUMVF0SHdkU2hlU2lVV3hFUGoyYmFLelFuejNXK25sL0ZpUlJxUnZWMEh2a2hJUjFGSW9JQ21nQnJKZk9weFpCcmg2bG5rV2xMNlVmYlg5SUJPR0VaZnV5YVlTck5WQzFJWitOTEs5T0laM0FBYmtOdWx0aUJtTm5YU0ZMdUpkZktWZmlmcG5VMHJzOD0='
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT2U3ref?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=djUweTJmUjdXellZWitJVFRIQnFDTHlqOGJhNEhuamM3dDluVGJ6bnZCcUNUZS9wMUc1eUlUVnRFYzlDc2lGTnJUTUgxNk5DUW5waUJSenV3d1lDMWNkWjdBSkVkUnJ1V20za0thZFVlY2c9'
    let img4 = document.getElementById('big-img');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT2U3ref_VW_34FR+watch-case-40-aluminum-starlight-cell-se_VW_34FR+watch-face-40-aluminum-starlight-se_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=Nk1sQzUrVmFkSWVyQnJPaHc3ZFViaytGZUJWLzNFUFVydllxZFp0d1M4NktoaXQwYi9wRGFOV2FsZVA1S1dYc0pwdFF5NnR5cUNqbFQrNVdtR2RJc000NFUvdjNTVSt0V2IwU21IaCsyZTZWWXA2M1k2V2FoWUZwQnhPVmpvS1UvRzFIdDQ1d3o4WlZDaURXb3g0R3dKRnZGUUdUeGtYN2gySi9ZaWRpZitLckJnajVCaGRzU0pBREM1Q082Uk51NXVkZ2t0VWxQK2o2M01obVdMRmRjdWY3eTMySit2MkdjZ1VDQjZjRWtZdW4wNjB2MHpUUXEycE9KUUVJZHM5NQ=='
    let text = document.getElementById('buy-img-text');
    text.innerHTML = 'Starlight Aluminium Case';

    let imga = document.getElementById('final-img1');
    imga.src  = img4.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = text.innerHTML;
}


function sebuy2(){
    let img1 = document.getElementById('smallimg1');
    img1.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-cell-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYaWhSbVIzRFJTYlp1MEk4OWNDaTcvNTlEbzMrd1Z5SUpEd0hiT0ZLRlZGNHVDTzRRaC84T1VMbXJRN05SRldIelBRWnNWZWtLcTZCYVRER3FsWWowaTk5RG8zK3dWeUlKRHdIYk9GS0ZWRjR4cVNUNDJadDNVSmRncE9SalAvZ24wUVN3R3VxZWhYYXgwOHljYmZFMXBocmMyRTN3NCt6QkoxaUdRb0FBay9VYktGTHdENW9lYUFnak5pcy9ReEdDYitVd1NTQTM3UmZlcFMyUUhtajBOOUFTbk5vY3l1VDJCbGQ3QjJZZUd1bQ=='
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_PF+watch-case-44-aluminum-midnight-cell-se_VW_PF+watch-face-44-aluminum-midnight-se_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=bHFVQVBoeitqYlU0U0prOTUxdG50bWdubGxNYk1RSDZNQVdMZTJKdDdwNVpjRzhoU1U2SFhrVUxaaTlNcXE3c1hZWkh2OUUyOXBpb0RkYTRLZ2cxbnhpWE5LNlBMYStqTjdWem0zakpaYVgrZWJ1dDBQMmRIcG56d2hydStkNFgxeEI1Q1gyYTFEdjFsR05pRUVKUTZNQjZaaVFBVTV1TTNBZXIyTDVibzdTT0lodkdNeWd3SHAzZlUzNms5S2kxU2xDa2ttY2dzWENkb0dDVHdHMXNJNytsMS9wYkJqMEpaUis5MmhXUnhETT0='
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VC9JM0w4TGl3WEFSZTJ2SDREaVRXYnlqOGJhNEhuamM3dDluVGJ6bnZCcUNUZS9wMUc1eUlUVnRFYzlDc2lGTnJUTUgxNk5DUW5waUJSenV3d1lDMWM1bCtjaTVoV2NFcFNDRFB4K1dpamc9'
    let img4 = document.getElementById('big-img');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-cell-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYaWhSbVIzRFJTYlp1MEk4OWNDaTcvNTlEbzMrd1Z5SUpEd0hiT0ZLRlZGNHVDTzRRaC84T1VMbXJRN05SRldIelBRWnNWZWtLcTZCYVRER3FsWWowaTk5RG8zK3dWeUlKRHdIYk9GS0ZWRjR4cVNUNDJadDNVSmRncE9SalAvZ24wUVN3R3VxZWhYYXgwOHljYmZFMXBocmMyRTN3NCt6QkoxaUdRb0FBay9VYktGTHdENW9lYUFnak5pcy9ReEdDYitVd1NTQTM3UmZlcFMyUUhtajBOOUFTbk5vY3l1VDJCbGQ3QjJZZUd1bQ=='
    let text = document.getElementById('buy-img-text');
    text.innerHTML = 'Midnight Aluminium Case';

    let imga = document.getElementById('final-img1');
    imga.src  = img4.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = text.innerHTML;
}


function sebuy3(){
    let img1 = document.getElementById('smallimg1');
    img1.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5H3_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ZVdzMmdqOFY5V2g2UUpEQldHQm1DQmJnWjJGdmhDSm9jUGNSdkZQN3V5RXZBUXVDSWtueGFFWmRtanJVdndvV09KUzdvZ3djYmY2eTQxUi9CM2Izc29DNzYrNGRIMHRPSWhwWHUwTUg4SDkrWk8xOUJna1QreFdobVdRV2dCS1pSd2NzWllSMVowSzNFMjFhV0RNcWhKUDhoaDQvQk1qdG9oYWwxVDBSWE5ueFBYN1QxYzVKQXZvbXpRaU9oa2xkZHZkazlhSGFRM1ZuNElFd082NEFkSXZWYythK09yVUdYeldiNjdtalpQTT0='
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5H3_VW_PF+watch-case-44-aluminum-silver-nc-se_VW_PF+watch-face-44-aluminum-silver-se_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=NjIzbHBmN2I3QWpSM1g5VTI3Sm9tYk04QmlzcXcyaXhBNUVXTDVJUG1GKzZKK0JoTk1CU01hZzlSSkNsNXRHQlBjN1BEdU5RWDJ6MWhkSTZBa3lyYXRta1Q1L3J2aDEzNFc2Z1RBeFBsMjhnV1FnekVncTVUMS9EdFBvWVRySHpIdmpaK0owaEIrZnIxdzM0SXBnMW9rZTd2cCtzTFJKUlhKNkpHTzdKYVEyOFc3T0YxcHl1dHQyUlkxSXdUN2NDQ3VjVVlZNVo5VHg1K1JHVFp6cWhHM3l5YmErZGF2cGtTYjVzN3N1WTJadz0='
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5H3?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=b3hhQlQ1NWxuOTlPWk1NMkg1T21jc0I2WmlRQVU1dU0zQWVyMkw1Ym83U09JaHZHTXlnd0hwM2ZVMzZrOUtpMVNsQ2trbWNnc1hDZG9HQ1R3RzFzSXhOVmJHaWJlTWVEZ1YxSkNpZ2NXVkk9'
    let img4 = document.getElementById('big-img');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5H3_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ZVdzMmdqOFY5V2g2UUpEQldHQm1DQmJnWjJGdmhDSm9jUGNSdkZQN3V5RXZBUXVDSWtueGFFWmRtanJVdndvV09KUzdvZ3djYmY2eTQxUi9CM2Izc29DNzYrNGRIMHRPSWhwWHUwTUg4SDkrWk8xOUJna1QreFdobVdRV2dCS1pSd2NzWllSMVowSzNFMjFhV0RNcWhKUDhoaDQvQk1qdG9oYWwxVDBSWE5ueFBYN1QxYzVKQXZvbXpRaU9oa2xkZHZkazlhSGFRM1ZuNElFd082NEFkSXZWYythK09yVUdYeldiNjdtalpQTT0='
    let text = document.getElementById('buy-img-text');
    text.innerHTML = 'Silver Aluminium Case';

    let imga = document.getElementById('final-img1');
    imga.src  = img4.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = text.innerHTML;
}

function sebuyx(){
    let img1 = document.getElementById('smallimg1');
    img1.src = ''
    let img2 = document.getElementById('smallimg2');
    img2.src = ''
    let img3 = document.getElementById('smallimg3');
    img3.src = ''
    let img4 = document.getElementById('big-img');
    img4.src = ''
    let text = document.getElementById('buy-img-text');
    text.innerHTML = '';
}


function s91(){
    let col1 = document.getElementById('i-buy1');
    col1.style.backgroundColor = '#0077ED';
    let col3 = document.getElementById('i-buy-p1');
    col3.style.color = 'white';

    let col4 = document.getElementById('i-buy-span1');
    col4.style.color = 'white';

    let col2 = document.getElementById('i-buy2');
    col2.style.backgroundColor = 'white';

    let col5 = document.getElementById('i-buy-p2');
    col5.style.color = 'Black';

    let col6 = document.getElementById('i-buy-span2');
    col6.style.color = 'Black';

    let text1 = document.getElementById('c-max1');
    text1.innerHTML = '₹41900.00'

    let text2 = document.getElementById('c-max2');
    text2.innerHTML = '₹51900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Case Size : 41mm';
}


function s92(){
    let col1 = document.getElementById('i-buy2');
    col1.style.backgroundColor = '#0077ED';
    // col1.style.color = 'white';
    let col3 = document.getElementById('i-buy-p2');
    col3.style.color = 'white';

    let col4 = document.getElementById('i-buy-span2');
    col4.style.color = 'white';

    let col2 = document.getElementById('i-buy1');
    col2.style.backgroundColor = 'white';


    let col5 = document.getElementById('i-buy-p1');
    col5.style.color = 'Black';

    let col6 = document.getElementById('i-buy-span1');
    col6.style.color = 'Black';

    let text1 = document.getElementById('c-max1');
    text1.innerHTML = '₹44900.00'

    let text2 = document.getElementById('c-max2');
    text2.innerHTML = '₹54900.00'

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Case Size : 45mm';


}


function s9buy1(){
    let img1 = document.getElementById('smallimg1');
    img1.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML743_VW_34FR+watch-case-41-stainless-graphite-s9_VW_34FR+watch-face-41-stainless-graphite-s9_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=WmtqemNXbzJrSUhnaHJ5ZlJhY3NZdDlWL3ZkbjVDbFV2QXF2czAxWWJXYWlVd3pDUEkyWWl2cFY2TjkzV1lhVHl2M3JFSzgxeU4xYVE5dnVNZmdENjRWZm85VEN4ZlF2aU5KQjlvL2xmaWNrSnk3b2M5RkRpQjdRQ1h1Z0w0N1huM0FONlRQRHZWZmxYTU5RODNNSEFzQjZaaVFBVTV1TTNBZXIyTDVibzdTT0lodkdNeWd3SHAzZlUzNms5S2kxU2xDa2ttY2dzWENkb0dDVHdHMXNJM3lUS2l0akJyQXp6K3BTRi9VNjRDWT0='
    let img2 = document.getElementById('smallimg3');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML743?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TWtySGFNcFVuencrbTdVbi95K3ArY0I2WmlRQVU1dU0zQWVyMkw1Ym83U09JaHZHTXlnd0hwM2ZVMzZrOUtpMVNsQ2trbWNnc1hDZG9HQ1R3RzFzSS9HV1dvODUzVUdtaDFhNzVuSzBlNHM9'
    let img3 = document.getElementById('smallimg2');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML743_VW_PF+watch-case-41-stainless-graphite-s9_VW_PF+watch-face-41-stainless-graphite-s9_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=MWhCeTQrSGF6NGMyY0krVG1TMVZ1SjBmUE5ZVzJOT3NiUExGamRDMFpxT1JSM1BvN0RUNWlDQ3MzbFhIS3FRMFBjN1BEdU5RWDJ6MWhkSTZBa3lyYW50L01aN0dJUnRvSnRIcmZUL0xReFIrT2Fna2gxQnlMZzZiWXc4Qm0vWGVFZTRCS2F5aXFjd3VVM0hzT0JXSTQxMUVGU3ZDVTBuMWZMMFp1U2tHa3hHb3R2dXh2NXNWNTBMcklzcWlBT1RUQmVXT25ISU1VQzY4cnEzL21sOWtZVFlNZ0JjempKMCsxa2VqZGRKV3Y2Zz0='
    let img4 = document.getElementById('big-img');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML743_VW_34FR+watch-case-41-stainless-graphite-s9_VW_34FR+watch-face-41-stainless-graphite-s9_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=WmtqemNXbzJrSUhnaHJ5ZlJhY3NZdDlWL3ZkbjVDbFV2QXF2czAxWWJXYWlVd3pDUEkyWWl2cFY2TjkzV1lhVHl2M3JFSzgxeU4xYVE5dnVNZmdENjRWZm85VEN4ZlF2aU5KQjlvL2xmaWNrSnk3b2M5RkRpQjdRQ1h1Z0w0N1huM0FONlRQRHZWZmxYTU5RODNNSEFzQjZaaVFBVTV1TTNBZXIyTDVibzdTT0lodkdNeWd3SHAzZlUzNms5S2kxU2xDa2ttY2dzWENkb0dDVHdHMXNJM3lUS2l0akJyQXp6K3BTRi9VNjRDWT0='
    let text = document.getElementById('buy-img-text');
    text.innerHTML = 'Graphite Stainless Steel Case';


    let imga = document.getElementById('final-img1');
    imga.src  = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML743_VW_34FR+watch-case-41-stainless-graphite-s9_VW_34FR+watch-face-41-stainless-graphite-s9_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=WmtqemNXbzJrSUhnaHJ5ZlJhY3NZdDlWL3ZkbjVDbFV2QXF2czAxWWJXYWlVd3pDUEkyWWl2cFY2TjkzV1lhVHl2M3JFSzgxeU4xYVE5dnVNZmdENjRWZm85VEN4ZlF2aU5KQjlvL2xmaWNrSnk3b2M5RkRpQjdRQ1h1Z0w0N1huM0FONlRQRHZWZmxYTU5RODNNSEFzQjZaaVFBVTV1TTNBZXIyTDVibzdTT0lodkdNeWd3SHAzZlUzNms5S2kxU2xDa2ttY2dzWENkb0dDVHdHMXNJM3lUS2l0akJyQXp6K3BTRi9VNjRDWT0='
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Graphite Stainless Steel Case'
}


function s9buy2(){
    let img1 = document.getElementById('smallimg1');
    img1.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3Q3ref_VW_34FR+watch-case-45-aluminum-silver-cell-s9_VW_34FR+watch-face-45-aluminum-silver-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VGhSS0g2WFFuQ1NDd2xwd1MrR3QzWE0zNmJwS21GSEN1QlZhZzcwZ0NZbW1sYnRuc1ZQRzh5aEVoS2ZQU0lHdXVZLzhiQzFXbHM1RnQ3L3lBSExDZDk4N20vTG5XYUhSQjdpUUozTVY5OEw5OTdQTEdtb3FQQ1Mzc1NQNDFRK1JRK2cwek9GeTFqYXdtcTZhUlRtanE1cnd4WkV1UEhyNVlMYlR3cC96bW9kdnpMSzRPQjFSblMxeWFGMXBBQlFqUER6eXBiMUlZM2FCVEZYbUgyOUtBVFJ3TkpFZHJKeWdaTlpkRy9vTkZzOGYyZHZBR0NhSDlqUnk4ZUdWRmZoSA=='
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3Q3ref_VW_PF+watch-case-45-aluminum-silver-cell-s9_VW_PF+watch-face-45-aluminum-silver-s9_VW_PF_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ZjVzdVQzaGJlY2JTUVJXbWVBYytKTkZUUVRhbEdEUkMrMG5VUW5iajFmeldQbWt0VXJTVFBnNVVIdHRoY1pkaHQ0c3k3eDJKaHVkQUVGTDltUDRIMFozRndhM081MHR0eDYrdDVpRkduYlBEUmhvaDArRml6QkcxVWJ6ZjdROFF0TW13RURaYWo1WEo0NzE4YWQ5U3JxMCtHMVlHSGttWG40UU14R241ekFhYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNMGdNL3BvRkdKVDVQdS91YnVnbnJuZ3JPZ0xXb3dPVUV6bytXY1hzR2F1cg=='
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3Q3ref?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TmU0RlpXZE1lSFI5ZGVBU3Q2TkVuYnlqOGJhNEhuamM3dDluVGJ6bnZCcUNUZS9wMUc1eUlUVnRFYzlDc2lGTnJUTUgxNk5DUW5waUJSenV3d1lDMWVvTVJVc08wRnd4d1NTcUYwbTI4K289'
    let img4 = document.getElementById('big-img');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3Q3ref_VW_34FR+watch-case-45-aluminum-silver-cell-s9_VW_34FR+watch-face-45-aluminum-silver-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VGhSS0g2WFFuQ1NDd2xwd1MrR3QzWE0zNmJwS21GSEN1QlZhZzcwZ0NZbW1sYnRuc1ZQRzh5aEVoS2ZQU0lHdXVZLzhiQzFXbHM1RnQ3L3lBSExDZDk4N20vTG5XYUhSQjdpUUozTVY5OEw5OTdQTEdtb3FQQ1Mzc1NQNDFRK1JRK2cwek9GeTFqYXdtcTZhUlRtanE1cnd4WkV1UEhyNVlMYlR3cC96bW9kdnpMSzRPQjFSblMxeWFGMXBBQlFqUER6eXBiMUlZM2FCVEZYbUgyOUtBVFJ3TkpFZHJKeWdaTlpkRy9vTkZzOGYyZHZBR0NhSDlqUnk4ZUdWRmZoSA=='
    let text = document.getElementById('buy-img-text');
    text.innerHTML = 'Silver Aluminium Case';

    let imga = document.getElementById('final-img1');
    imga.src  = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3Q3ref_VW_34FR+watch-case-45-aluminum-silver-cell-s9_VW_34FR+watch-face-45-aluminum-silver-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VGhSS0g2WFFuQ1NDd2xwd1MrR3QzWE0zNmJwS21GSEN1QlZhZzcwZ0NZbW1sYnRuc1ZQRzh5aEVoS2ZQU0lHdXVZLzhiQzFXbHM1RnQ3L3lBSExDZDk4N20vTG5XYUhSQjdpUUozTVY5OEw5OTdQTEdtb3FQQ1Mzc1NQNDFRK1JRK2cwek9GeTFqYXdtcTZhUlRtanE1cnd4WkV1UEhyNVlMYlR3cC96bW9kdnpMSzRPQjFSblMxeWFGMXBBQlFqUER6eXBiMUlZM2FCVEZYbUgyOUtBVFJ3TkpFZHJKeWdaTlpkRy9vTkZzOGYyZHZBR0NhSDlqUnk4ZUdWRmZoSA=='
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Silver Aluminium Case'
}


function s9buy3(){
    let img1 = document.getElementById('smallimg1');
    img1.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-45-aluminum-midnight-cell-s9_VW_34FR+watch-face-45-aluminum-midnight-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYbk0zNmJwS21GSEN1QlZhZzcwZ0NZbDlEbzMrd1Z5SUpEd0hiT0ZLRlZGNC9Dc1FCbmxGdFRXRjF3RS8vbDcrL0tNODN4SEZ6QXpHU01yRWZxdXRlZlY5RG8zK3dWeUlKRHdIYk9GS0ZWRjRuMU5rNXFEOEVYUlE4QjJTQ2RNei9ZcTZOVWs3ODQrRmtDTEZFU25DdEtDOG8vRzJ1QjU0M083ZlowMjg1N3dhZ2szdjZkUnVjaUUxYlJIUFFySWhUYTB6QjllalFrSjZZZ1VjN3NNR0F0V0gxWTlYT3RrVXhNU3hzdWxlTkdjUg=='
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_PF+watch-case-45-aluminum-midnight-cell-s9_VW_PF+watch-face-45-aluminum-midnight-s9_VW_PF_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=bHFVQVBoeitqYlU0U0prOTUxdG50dEZUUVRhbEdEUkMrMG5VUW5iajFmeFpjRzhoU1U2SFhrVUxaaTlNcXE3c2x1OEg2V2pFTCtIMTFsNDRzZGhDMGtkNGpsUS9ETU41eFQ0TzIrUnpZdDhXU3ljeHRsOGFJd0orVmVFaGJIZy8zR2pZL05BMDlmcXZibXZwZGR6akw1alRZdm5sVEU0OHBoTXdWUnNEMFdhVC9JWWVQd1RJN2FJV3BkVTlFVnpaOFQxKzA5WE9TUUw2SnMwSWpvWkpYWGIzWlBXaDJrTjFaK0NCTUR1dUFIU1ZFUlRCM0p2Vk9TWkd6TXJOSTFRRg=='
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VC9JM0w4TGl3WEFSZTJ2SDREaVRXYnlqOGJhNEhuamM3dDluVGJ6bnZCcUNUZS9wMUc1eUlUVnRFYzlDc2lGTnJUTUgxNk5DUW5waUJSenV3d1lDMWM1bCtjaTVoV2NFcFNDRFB4K1dpamc9'
    let img4 = document.getElementById('big-img');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-45-aluminum-midnight-cell-s9_VW_34FR+watch-face-45-aluminum-midnight-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYbk0zNmJwS21GSEN1QlZhZzcwZ0NZbDlEbzMrd1Z5SUpEd0hiT0ZLRlZGNC9Dc1FCbmxGdFRXRjF3RS8vbDcrL0tNODN4SEZ6QXpHU01yRWZxdXRlZlY5RG8zK3dWeUlKRHdIYk9GS0ZWRjRuMU5rNXFEOEVYUlE4QjJTQ2RNei9ZcTZOVWs3ODQrRmtDTEZFU25DdEtDOG8vRzJ1QjU0M083ZlowMjg1N3dhZ2szdjZkUnVjaUUxYlJIUFFySWhUYTB6QjllalFrSjZZZ1VjN3NNR0F0V0gxWTlYT3RrVXhNU3hzdWxlTkdjUg=='
    let text = document.getElementById('buy-img-text');
    text.innerHTML = 'Midnight Aluminium Case';

    let imga = document.getElementById('final-img1');
    imga.src  = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-45-aluminum-midnight-cell-s9_VW_34FR+watch-face-45-aluminum-midnight-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYbk0zNmJwS21GSEN1QlZhZzcwZ0NZbDlEbzMrd1Z5SUpEd0hiT0ZLRlZGNC9Dc1FCbmxGdFRXRjF3RS8vbDcrL0tNODN4SEZ6QXpHU01yRWZxdXRlZlY5RG8zK3dWeUlKRHdIYk9GS0ZWRjRuMU5rNXFEOEVYUlE4QjJTQ2RNei9ZcTZOVWs3ODQrRmtDTEZFU25DdEtDOG8vRzJ1QjU0M083ZlowMjg1N3dhZ2szdjZkUnVjaUUxYlJIUFFySWhUYTB6QjllalFrSjZZZ1VjN3NNR0F0V0gxWTlYT3RrVXhNU3hzdWxlTkdjUg=='
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = 'Midnight Aluminium Case'
}


function s9buy4(){
    let img1 = document.getElementById('smallimg1');
    img1.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3W3ref_VW_34FR+watch-case-45-aluminum-red-cell-s9_VW_34FR+watch-face-45-aluminum-red-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=My9rZzA0Z0hTNjMwTHlFTDQ1Q0pqM00zNmJwS21GSEN1QlZhZzcwZ0NZbDlDeHRqZ2JxdUtPbFgyWDZVVk4xa1J3NFM0VlhnUGJhMGcvZU1YOURYWThycFNXOHJTeEhGL2RRZmFzRjVGMVNueHVja093RW5NVzB5VFhGWU1XYWRWRGRkNWd6OXhEb2lBTXYxZnpxbGdLMCtHMVlHSGttWG40UU14R241ekFhYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNMGdNL3BvRkdKVDVQdS91YnVnbnJuZ3JPZ0xXb3dPVUV6bytXY1hzR2F1cg=='
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3W3ref_VW_PF+watch-case-45-aluminum-red-cell-s9_VW_PF+watch-face-45-aluminum-red-s9_VW_PF_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VUxtWC9ibEdtbktJZ3hGNmUrL0RvOUZUUVRhbEdEUkMrMG5VUW5iajFmeVJYTmdNVUZTb3pCWnVvb2FBWU82M3lRTTBFZXBTTHRCM1lPb0F0SXJxQTRwV1lsR082TFdaWDc4YnVWNzlRYVY5cjlyc3RWaTB4ankyVC9JWndBeTVpcm8xU1R2emo0V1FJc1VSS2NLMG9MeWo4YmE0SG5qYzd0OW5UYnpudkJxQ1RlL3AxRzV5SVRWdEVjOUNzaUZOclRNSDE2TkNRbnBpQlJ6dXd3WUMxWWZWajFjNjJSVEV4TEd5NlY0MFp4RT0='
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3W3ref?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=bmJXYmhMQ2xrK3dlcUw2STI5cDlPTHlqOGJhNEhuamM3dDluVGJ6bnZCcUNUZS9wMUc1eUlUVnRFYzlDc2lGTnJUTUgxNk5DUW5waUJSenV3d1lDMWM0NlkzMkdvNWVDSytjTURGc3ZhTlU9'
    let img4 = document.getElementById('big-img');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3W3ref_VW_34FR+watch-case-45-aluminum-red-cell-s9_VW_34FR+watch-face-45-aluminum-red-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=My9rZzA0Z0hTNjMwTHlFTDQ1Q0pqM00zNmJwS21GSEN1QlZhZzcwZ0NZbDlDeHRqZ2JxdUtPbFgyWDZVVk4xa1J3NFM0VlhnUGJhMGcvZU1YOURYWThycFNXOHJTeEhGL2RRZmFzRjVGMVNueHVja093RW5NVzB5VFhGWU1XYWRWRGRkNWd6OXhEb2lBTXYxZnpxbGdLMCtHMVlHSGttWG40UU14R241ekFhYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNMGdNL3BvRkdKVDVQdS91YnVnbnJuZ3JPZ0xXb3dPVUV6bytXY1hzR2F1cg=='
    let text = document.getElementById('buy-img-text');
    text.innerHTML = 'PRODUCT(RED) Aluminium Case';

    let imga = document.getElementById('final-img1');
    imga.src  = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3W3ref_VW_34FR+watch-case-45-aluminum-red-cell-s9_VW_34FR+watch-face-45-aluminum-red-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=My9rZzA0Z0hTNjMwTHlFTDQ1Q0pqM00zNmJwS21GSEN1QlZhZzcwZ0NZbDlDeHRqZ2JxdUtPbFgyWDZVVk4xa1J3NFM0VlhnUGJhMGcvZU1YOURYWThycFNXOHJTeEhGL2RRZmFzRjVGMVNueHVja093RW5NVzB5VFhGWU1XYWRWRGRkNWd6OXhEb2lBTXYxZnpxbGdLMCtHMVlHSGttWG40UU14R241ekFhYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNMGdNL3BvRkdKVDVQdS91YnVnbnJuZ3JPZ0xXb3dPVUV6bytXY1hzR2F1cg=='
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = text.innerHTML;
}


function s9buy5(){
    let img1 = document.getElementById('smallimg1');
    img1.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3U3ref_VW_34FR+watch-case-45-aluminum-pink-nc-s9_VW_34FR+watch-face-45-aluminum-pink-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=cG1TdmNGMEdiK0toTWlCU01yRlIzbk0zNmJwS21GSEN1QlZhZzcwZ0NZbXlESTJEU21VQ3kwMTlnSk9SWXc3T1lmQTM3dWwxOEVOeWkrSnZJS3hUWHAzRndhM081MHR0eDYrdDVpRkduYlBvRFBDZ2ppL3VKbG5SaHlPeG9SOGNWRGRkNWd6OXhEb2lBTXYxZnpxbGdLMCtHMVlHSGttWG40UU14R241ekFhYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNMGdNL3BvRkdKVDVQdS91YnVnbnJuZ3JPZ0xXb3dPVUV6bytXY1hzR2F1cg=='
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3U3ref_VW_PF+watch-case-45-aluminum-pink-nc-s9_VW_PF+watch-face-45-aluminum-pink-s9_VW_PF_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=YUl4SGJNYjZteWlQMTYvajBqc1pGdEZUUVRhbEdEUkMrMG5VUW5iajFmeUltUC84S3lQdWlrWDNVZXdMalYwRVR0cDFmR1puRmhTV2thSllhazVUSVRUWVQvd0RTeGhqbzRIV1RQNThHVUdhS2Y0K05lSEhvTGh4MUhMS1g1OTJpcm8xU1R2emo0V1FJc1VSS2NLMG9MeWo4YmE0SG5qYzd0OW5UYnpudkJxQ1RlL3AxRzV5SVRWdEVjOUNzaUZOclRNSDE2TkNRbnBpQlJ6dXd3WUMxWWZWajFjNjJSVEV4TEd5NlY0MFp4RT0='
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3U3ref?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TXZsUlRpWjNZaWlMZ1dUR3ZlUExsN3lqOGJhNEhuamM3dDluVGJ6bnZCcUNUZS9wMUc1eUlUVnRFYzlDc2lGTnJUTUgxNk5DUW5waUJSenV3d1lDMWRhNm4vY3pCRDJYSHNaNlpJdDVMWjA9'
    let img4 = document.getElementById('big-img');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3U3ref_VW_34FR+watch-case-45-aluminum-pink-nc-s9_VW_34FR+watch-face-45-aluminum-pink-s9_VW_34FR_WF_CO_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=cG1TdmNGMEdiK0toTWlCU01yRlIzbk0zNmJwS21GSEN1QlZhZzcwZ0NZbXlESTJEU21VQ3kwMTlnSk9SWXc3T1lmQTM3dWwxOEVOeWkrSnZJS3hUWHAzRndhM081MHR0eDYrdDVpRkduYlBvRFBDZ2ppL3VKbG5SaHlPeG9SOGNWRGRkNWd6OXhEb2lBTXYxZnpxbGdLMCtHMVlHSGttWG40UU14R241ekFhYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNMGdNL3BvRkdKVDVQdS91YnVnbnJuZ3JPZ0xXb3dPVUV6bytXY1hzR2F1cg=='
    let text = document.getElementById('buy-img-text');
    text.innerHTML = 'Pink Aluminium Case';

    let imga = document.getElementById('final-img1');
    imga.src  = img4.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = text.innerHTML;
}


function s9buy6(){
    let img1 = document.getElementById('smallimg1');
    img1.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML763_VW_34FR+watch-case-45-stainless-gold-s9_VW_34FR+watch-face-45-stainless-gold-s9_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=MEp1NU0yNHJrRzJPTzV4alVta3BRbUtvSkhsRytqVWE5dUpMRCtqb2E5M0RsaU1LbHJSSUdkbzU1bnVMdkRDT2VPYzl6QnR0dWVTR2N5RXJHSkhsQXJBWkdiQ2pTTHVjdzZSbFp4dWtpVXRQQ2k0c3ptdHNUTktGQnRKZVhpNWtrVzhWQVpQR1JmdUhZbjlpSjJKLzRxc0dDUGtHRjJ4SWtBTUxrSTdwRTI3bTUyQ1MxU1UvNlByY3lHWllzVjF5a1AxMDBWaEZaZjBIRlozV3U5UDRzcC9iZFJBVCtLZm1EQWl3SnZQL0Jpaz0='
    let img2 = document.getElementById('smallimg2');
    img2.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML763_VW_PF+watch-case-45-stainless-gold-s9_VW_PF+watch-face-45-stainless-gold-s9_VW_PF?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=NnEwc2RLUHphZHlBVVkxY2lvOThYdWZ1a2VMSlJiKy9SQkRoT0lFQ1cxK3FFbVlzY0NIMkgwM3pDdEZya3FZOVpTVG41NUEvUGFjOU80ajVsWG5jSlI5eXNDVndFQUZ3b25uWHpXK2FIOUdHS2xnV0syWnlNaDRyTy9PS25OblZBR3NsODZuRmtHdUhxV2VSYVV2cFI5dGYwZ0U0WVJsKzdKcGhLczFVTFVobjQwc3IwNGhuY0FCdVEyNlcySUdZNW05ZlhJQWRRSk9FdkcvWHRmSVpTdz09'
    let img3 = document.getElementById('smallimg3');
    img3.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML763?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=RjJIU2pqRVI0NVhiVmtvTVRnaDR0Y0I2WmlRQVU1dU0zQWVyMkw1Ym83U09JaHZHTXlnd0hwM2ZVMzZrOUtpMVNsQ2trbWNnc1hDZG9HQ1R3RzFzSTRYRmIyM29oK2RyNmxzYTVMY3JvV009'
    let img4 = document.getElementById('big-img');
    img4.src = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ML763_VW_34FR+watch-case-45-stainless-gold-s9_VW_34FR+watch-face-45-stainless-gold-s9_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=MEp1NU0yNHJrRzJPTzV4alVta3BRbUtvSkhsRytqVWE5dUpMRCtqb2E5M0RsaU1LbHJSSUdkbzU1bnVMdkRDT2VPYzl6QnR0dWVTR2N5RXJHSkhsQXJBWkdiQ2pTTHVjdzZSbFp4dWtpVXRQQ2k0c3ptdHNUTktGQnRKZVhpNWtrVzhWQVpQR1JmdUhZbjlpSjJKLzRxc0dDUGtHRjJ4SWtBTUxrSTdwRTI3bTUyQ1MxU1UvNlByY3lHWllzVjF5a1AxMDBWaEZaZjBIRlozV3U5UDRzcC9iZFJBVCtLZm1EQWl3SnZQL0Jpaz0='
    let text = document.getElementById('buy-img-text');
    text.innerHTML = 'Gold Stainless Steel Case';

    let imga = document.getElementById('final-img1');
    imga.src  = img4.src;
    let text2 = document.getElementById('final-body1');
    text2.innerHTML = text.innerHTML;
}


function ultra1(){
    let col1 = document.getElementById('i-buy1');
    col1.style.backgroundColor = '#0077ED';
    let col3 = document.getElementById('i-buy-p1');
    col3.style.color = 'white';

    let col4 = document.getElementById('i-buy-span1');
    col4.style.color = 'white';

    let col2 = document.getElementById('i-buy2');
    col2.style.backgroundColor = 'white';

    let col5 = document.getElementById('i-buy-p2');
    col5.style.color = 'Black';

    let col6 = document.getElementById('i-buy-span2');
    col6.style.color = 'Black';

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Case Size : 45mm';

        let btn = document.getElementById('final-buy1');
    btn.innerHTML = '₹85900.00'


}


function ultra2(){
    let col1 = document.getElementById('i-buy2');
    col1.style.backgroundColor = '#0077ED';
    // col1.style.color = 'white';
    let col3 = document.getElementById('i-buy-p2');
    col3.style.color = 'white';

    let col4 = document.getElementById('i-buy-span2');
    col4.style.color = 'white';

    let col2 = document.getElementById('i-buy1');
    col2.style.backgroundColor = 'white';


    let col5 = document.getElementById('i-buy-p1');
    col5.style.color = 'Black';

    let col6 = document.getElementById('i-buy-span1');
    col6.style.color = 'Black';

    let text3 = document.getElementById('final-text1');
    text3.innerHTML = 'Case Size : 49mm';

            let btn = document.getElementById('final-buy1');
    btn.innerHTML = '₹89900.00'


}



function final1(){
    // let col = document.getElementById('i-buy-3');
    // col.style.backgroundColor = 'blue';

    let col1 = document.getElementById('i-buy3');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p3');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max1');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy4');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p4');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max2');
    sp2.style.color = 'black';

        let text = document.getElementById('final-text2');
    text.innerHTML = 'Connectivity : GPS'

        let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML

    
}


function final2(){
    let col1 = document.getElementById('i-buy4');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p4');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max2');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';


    let text = document.getElementById('final-text2');
    text.innerHTML = 'Connectivity : GPS + Cellular'

    let btn = document.getElementById('final-buy1');
    btn.innerHTML = sp1.innerHTML
}

function ultrabg1(){
    let col1 = document.getElementById('i-buy3');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p3');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max1');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy4');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p4');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max2');
    sp2.style.color = 'black';

        let text = document.getElementById('final-text2');
    text.innerHTML = 'Strap size : Medium'

}

function ultrabg2(){
    let col1 = document.getElementById('i-buy4');
    col1.style.backgroundColor = '#0077ED';
    // console.log("hello");
    let p1 = document.getElementById('i-buy-p4');
    p1.style.color='white';
    let sp1 =document.getElementById('c-max2');
    sp1.style.color = 'white';


    let col2 = document.getElementById('i-buy3');
    col2.style.backgroundColor = 'white';
    // console.log("hello");
    let p2 = document.getElementById('i-buy-p3');
    p2.style.color='black';
    let sp2 =document.getElementById('c-max1');
    sp2.style.color = 'black';


    let text = document.getElementById('final-text2');
    text.innerHTML = 'Strap size : Large'


}


const signupbtnlink = document.querySelector('.signupbtn-link');
const signinbtnlink = document.querySelector('.signinbtn-link');
const wrap = document.querySelector('.wrap');

signupbtnlink.addEventListener('click',()=>{
    wrap.classList.toggle('active');
})

signinbtnlink.addEventListener('click',()=>{
    wrap.classList.toggle('active');
})