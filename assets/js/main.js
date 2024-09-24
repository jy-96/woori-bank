// SwiperJS
const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: false,
    
    //pagination 연결
    pagination: {
        el: '.pagination',
        clickable: true
    },

    // 이전 다음 버튼 연결
    navigation: {
        prevEl: '.prev',
        nextEl: '.next',
    }
})
// JQuery
$('.pagination-area .autoplay').click(function(){
    if ($(this).hasClass('on')) {
        swiper.autoplay.stop();
    } else {
        swiper.autoplay.start();
    }
    $(this).toggleClass('on');      // 밑에 있어야 작동함
})


$('.header .auth-list .auth-item').hover(function(){ // auth-item(li) 를 hover 하면
    $(this).addClass('on');    
}, function(){                                       // auth-item(li) 를 non-hover 하면
    $(this).removeClass('on');
    }
);


$('.header .gnb-list .gnb-item').hover(function(){
    $(this).addClass('on');
}, function(){
    $(this).removeClass('on');
})

$('.header .util-area .util-item').hover(function(){
    $(this).addClass('on');
}, function(){
    $(this).removeClass('on');
})




// FOOTER
$('.footer .footer-top .util-item').hover(function(){
    $(this).addClass('on');
}, function(){
    $(this).removeClass('on');
})



// finance-list img (hover 쓰지말고)
$('.inner1 .list .item')
//hover
.on('mouseenter', function(){
    myImg = $(this).find('.img-box img')

    myImg.attr('src', myImg.attr('src').replace('.png', '_over.png')); 
    $(this).addClass('on'); // a 태그 css 꾸미기 위해
})
.on('mouseleave', function(){
    myImg = $(this).find('.img-box img')

    myImg.attr('src', myImg.attr('src').replace('_over.png', '.png')); 
    $(this).removeClass('on');
})

