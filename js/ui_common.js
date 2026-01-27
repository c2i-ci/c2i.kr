$(document).ready(function () {

    resize();
    setFlowBanner();  
    $(window).resize(function () {
        resize();
        setFlowBanner();  
    });
    
    $('.menu').click(function (e) {
        $('#gnb').addClass('gnb_show');
        $('html').addClass('menu_show');
        $('body').addClass('menu_show');
       // $(this).toggleClass('on');
    });
    $('.menu_close').click(function (e) {
        $('#gnb').removeClass('gnb_show');
        $('html').removeClass('menu_show');
        $('body').removeClass('menu_show');
       // $(this).toggleClass('on');
    });

    $('.tab_list > li > a').click(function (e) {
        if ($(this).parent().hasClass('active')) {
            
        } else {
            $('.tab_list > li').removeClass('active');
           $(this).parent().addClass('active');
        }
    });
    
    
});

//gnb 
$.fn.accessibleDropDown = function () {

    $('#header').mouseenter(function () {
        $('#gnb li div').show();
        $('.submenubg').show();
        if ($(this).hasClass('subnone')) {
            $('.submenubg').hide();
        }
    }).mouseleave(function () {
        $('.submenu').hide();
        $('.submenubg').hide();
    });
    $("#header").focus(function () {
        $('#gnb li div').show();
        $('.submenubg').show();
    });
    $('#header').focusout(function () {
        $('.submenubg').hide();
    });

    $('#gnb > ul > li > a').focusout(function () {
        $(this).parents('li').removeClass('active');
        if ($(this).hasClass('top')) {
            $('.submenu').not($(this).parent("li").find(".submenu")).hide();
        } else {
            $('.submenu').not($(this).parents('.submenu')).hide();
        }
        $('.submenubg').hide();
    });


    $('#gnb > ul > li').mouseenter(function () {
        $(this).addClass('active');
        $('#gnb li div').show();
        $('.submenubg').show();
        if ($(this).hasClass('subnone')) {
            $('.submenubg').hide();
        }
    }).mouseleave(function () {
        $(this).removeClass('active');
        $('.submenu').hide();
        $('.submenubg').hide();
    });

    $("#gnb > ul > li > a").focus(function () {
        $(this).parents('li').addClass('active');
        $('#gnb li div').show();
        if ($(this).hasClass('top')) {
            $('.submenu').not($(this).parent("li").find(".submenu")).hide();
        }
        $('.submenubg').show();
        if ($(this).parents('li').hasClass('subnone')) {
            $('.submenubg').hide();
        }
    });

    $('#gnb > ul > li > a').focusout(function () {
        $(this).parents('li').removeClass('active');
        if ($(this).hasClass('top')) {
            $('.submenu').not($(this).parent("li").find(".submenu")).hide();
        } else {
            $('.submenu').not($(this).parents('.submenu')).hide();
        }
        $('.submenubg').hide();
    });

    $('li:last-child > div > ul > li > a:last ').focusout(function () {
        $('.submenu').hide();
        $('.submenubg').hide();
    });
}



$(function() {
    if($('.business').length > 0) {
            $(window).scroll(function() {
                //alert('비즈니스 페이지');
                
                if($(document).scrollTop() < $('#business_info1').offset().top + $('#business_info1').outerHeight()-2) {
                    if ($('#b1').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#b1').addClass('active');
                    }
                   
                }
                else if($(document).scrollTop() < $('#business_info2').offset().top + $('#business_info2').outerHeight()-2) {
                    if ($('#b2').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#b2').addClass('active');
                    }

                }
                else if($(document).scrollTop() < $('#business_info3').offset().top + $('#business_info3').outerHeight()-2) {
                    if ($('#b3').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#b3').addClass('active');
                    }
                }
                else if($(document).scrollTop() < $('#business_info4').offset().top + $('#business_info4').outerHeight()-2) {
                    if ($('#b4').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#b4').addClass('active');
                    }
                }
            });
        }

    else if($('.solution').length > 0) {
            $(window).scroll(function() {
                //alert('비즈니스 페이지');
                
                if($(document).scrollTop() < $('#solution_info1').offset().top + $('#solution_info1').outerHeight()-2) {
                    if ($('#s1').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#s1').addClass('active');
                    }
                   
                }
                else if($(document).scrollTop() < $('#solution_info2').offset().top + $('#solution_info2').outerHeight()-2) {
                    if ($('#s2').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#s2').addClass('active');
                    }

                }
                else if($(document).scrollTop() < $('#solution_info3').offset().top + $('#solution_info3').outerHeight()-2) {
                    if ($('#s3').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#s3').addClass('active');
                    }

                }
                
            });
        }

    else if($('.company').length > 0) {
            $(window).scroll(function() {
                //alert('비즈니스 페이지');
                
                if($(document).scrollTop() < $('#company_info1').offset().top + $('#company_info1').outerHeight()-2) {
                    if ($('#c1').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#c1').addClass('active');
                    }
                   
                }
                else if($(document).scrollTop() < $('#company_info2').offset().top + $('#company_info2').outerHeight()-2) {
                    if ($('#c2').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#c2').addClass('active');
                    }

                }
                else if($(document).scrollTop() < $('#company_info3').offset().top + $('#company_info3').outerHeight()-2) {
                    if ($('#c3').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#c3').addClass('active');
                    }

                }
                else if($(document).scrollTop() < $('#company_info4').offset().top + $('#company_info4').outerHeight()-2) {
                    if ($('#c4').hasClass('active')) {
                    } else {
                        $('.sub_tabbox .tab_list li').removeClass('active');
                         $('#c4').addClass('active');
                    }
                }
            });
        }
});
function resize() {
    
    var mql = window.matchMedia("screen and (max-width: 1200px)");
    //let nowTop = $(document).scrollTop();
    if (mql .matches) {
       if($('.sub_tabbox').length > 0) {
            $(window).scroll(function() {
                
                if($(document).scrollTop() > $('.sub_tabbox').offset().top) {
                    $('.sub_tabbox .tab_list').addClass('fixed2');
                } else {
                    $('.sub_tabbox .tab_list').removeClass('fixed2');

                }

            });
        }

        
    } else {
        //gnb
        $("#gnb > ul").accessibleDropDown();
        if($('.sub_tabbox').length > 0) {
            $(window).scroll(function() {
                if($(document).scrollTop() > $('.sub_tabbox').offset().top + 50) {
                    $('.sub_tabbox .tab_list').addClass('fixed');

                } else {
                    $('.sub_tabbox .tab_list').removeClass('fixed');
                }

                
            });
        }
        
    }

    
} 

$(window).on('load', function () {
  
});
function setFlowBanner(){
  const $wrap = $('.flow_banner');
  const $list = $('.flow_banner .list');
  let wrapWidth = $wrap.width();
  let listWidth = $list.width();
  const speed = 92; //1초에 몇픽셀 이동하는지 설정

  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct()

  //배너 실행 함수
  function flowBannerAct() {
    //무한 반복을 위해 리스트를 복제 후 배너에 추가
    if (listWidth < wrapWidth) {
      const listCount = Math.ceil(wrapWidth * 2 / listWidth);
      for (let i = 2; i < listCount; i++) {
        $clone = $clone.clone();
        $wrap.append($clone);
      }
    }
    $wrap.find('.list').css({ 'animation': `${listWidth / speed}s linear infinite flowRolling` }); 
  } 
}
