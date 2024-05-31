(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//Iniciar o video com click no botão estilizado
$("#key-play-vd").click(function () {
    $(this).fadeToggle();

    var vidPlay = document.getElementById("videomid");
    $("#videomid").attr("controls", "");
    vidPlay.play();
});

//Slick de avaliaçãoes 
$('#key-slk-avalia').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<span class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none"> <circle cx="21.8308" cy="21.0181" r="20" fill="#CA9E72" stroke="#CA9E72" stroke-width="2"/> <path d="M24.4558 15.5181L19.2058 20.7681L24.4558 26.0181" stroke="white" stroke-width="4" stroke-linecap="round"/> </svg></span>',
    nextArrow: '<span class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none"> <circle cx="21.9641" cy="21.0181" r="20" fill="#CA9E72" stroke="#CA9E72" stroke-width="2"/> <path d="M20.9641 15.5181L26.2141 20.7681L20.9641 26.0181" stroke="white" stroke-width="4" stroke-linecap="round"/> </svg></span>'
});

if (innerWidth < 768) {
    setTimeout(function () {
        $('#key-glr .box-insta-images a').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
            centerPadding: '60px',
            autoplay: false,
            dots: true,
            autoplaySpeed: 2000,
            arrows: false
        });
    }, 500);
}
//OPEN AND CLOSE MENU MOBILE

$("#key-close-menu-mob").click(function () {
    $("#headerhk .part.mid.menu").toggleClass("open");
});

$("#key-open-mob-menu").click(function () {
    $("#headerhk .part.mid.menu").toggleClass("open");
});

//Scroll do botão de "Role para ver mais" para o próximo bloco
$("#headerhk .menu .box-mid .menu-list li.item").click(function (e) {
    e.preventDefault();
    var key = $(this).attr("key-scroll");

    if (innerWidth < 768) {
        $("#headerhk .part.mid.menu").toggleClass("open");
    }

    if (key === "key-onde") {
        $("html, body").animate({ scrollTop: $("#" + key).offset().top - 150 }, 700);
    } else {
        $("html, body").animate({ scrollTop: $("#" + key).offset().top - 100 }, 700);
    }
});

$("#headerhk .part.left.logo").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
});

//determinando onde o usuário está para alterar o focus no item do header.
$(document).scroll(function () {
    var focus = $(document).scrollTop();
    if (focus < 900) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
    }
    if (focus > 900 && focus < 2200) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.evento").addClass("active");
    }

    if (focus > 2280 && focus < 2960) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.experi").addClass("active");
    }

    if (focus > 2989 && focus < 3865) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.encont").addClass("active");
    }

    if (focus > 3894 && focus < 4540) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.lojahk").addClass("active");
    }

    if (focus > 4580 && focus < 5704) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.galeri").addClass("active");
    }

    if (focus > 5733 && focus < 6466) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.quando").addClass("active");
    }

    if (focus > 6470) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.saibam").addClass("active");
    }
});

var cepMask = IMask(document.getElementById('whats'), {
    mask: '(00) 00000-0000'
});

//ENVIO PARA BD CADASTRO DE NEWSLETTER
$('#cad-news').submit(function (e) {
    e.preventDefault();
    var form = {
        nome: $("#cad-news #name").val(),
        email: $("#cad-news #email").val(),
        tel: $("#cad-news #whats").val()
    };

    $.ajax({
        type: "POST",
        url: "../cadastro/cadastro.php",
        data: form,
        success: function success(data) {
            $("#cad-news input").attr("disabled", "");
            $("#cad-news input").attr("style", "opacity: 0.3;");
        },
        error: function error(request, status, _error) {
            console.log("ERROR");
            console.log(_error);
        }
    });
});

},{}]},{},[1]);
