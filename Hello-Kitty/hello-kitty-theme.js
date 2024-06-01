//Iniciar o video com click no botão estilizado
$("#key-play-vd").click(function () {
    $(this).fadeToggle();

    var vidPlay = document.getElementById("videomid");
    $("#videomid").attr("controls", "")
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
    nextArrow: '<span class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none"> <circle cx="21.9641" cy="21.0181" r="20" fill="#CA9E72" stroke="#CA9E72" stroke-width="2"/> <path d="M20.9641 15.5181L26.2141 20.7681L20.9641 26.0181" stroke="white" stroke-width="4" stroke-linecap="round"/> </svg></span>',
})

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
            arrows: false,
        })
    }, 500)
}
//OPEN AND CLOSE MENU MOBILE

$("#key-close-menu-mob").click(function () {
    $("#headerhk .part.mid.menu").toggleClass("open");
})

$("#key-open-mob-menu").click(function () {
    $("#headerhk .part.mid.menu").toggleClass("open");
})

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
})

$("#headerhk .part.left.logo").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
})

//determinando onde o usuário está para alterar o focus no item do header.
$(document).scroll(function () {
    let focus = $(document).scrollTop();
    let j = 150; 
    let event = $("#key-event").position().top;
    let xp = $("#key-xp").position().top;
    let encntr = $("#key-encntr").position().top;
    let loja = $("#key-loja").position().top;
    let glr = $("#key-glr").position().top;
    let onde = $("#key-onde").position().top;
    let saiba = $("#key-saiba").position().top;


    if (focus < event - j) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
    }
    if (focus > event - j && focus < xp - j) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.evento").addClass("active");
    }

    if (focus > xp - j && focus < encntr - j) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.experi").addClass("active");
    }

    if (focus > encntr - j && focus < loja - j) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.encont").addClass("active");
    }

    if (focus > loja - j && focus < glr - j) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.lojahk").addClass("active");
    }

    if (focus > glr - j && focus < onde - j) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.galeri").addClass("active");
    }

    if (focus > onde - j && focus < saiba - j) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.quando").addClass("active");
    }

    if (focus > saiba - j) {
        $("#headerhk .menu .box-mid .menu-list li.item").removeClass("active");
        $("#headerhk .menu .box-mid .menu-list li.item.saibam").addClass("active");
    }
})

var cepMask = IMask(
    document.getElementById('whats'), {
    mask: '(00) 00000-0000'
});

//ENVIO PARA BD CADASTRO DE NEWSLETTER
$('#cad-news').submit(function (e) {
    e.preventDefault();
    var form = {
        nome: $("#cad-news #name").val(),
        email: $("#cad-news #email").val(),
        tel: $("#cad-news #whats").val(),
    }

    $.ajax({
        type: "POST",
        url: "../cadastro/cadastro.php",
        data: form,
        success: function (data) {
            $("#cad-news input").attr("disabled", "");
            $("#cad-news input").attr("style", "opacity: 0.3;");
        },
        error: function (request, status, error) {
            console.log("ERROR")
            console.log(error)
        }
    });
});