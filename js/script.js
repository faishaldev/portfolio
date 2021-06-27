// event pada saat link diklik
$('.page-scroll').on('click', () => {
    // ambil isi href
    let tujuan = $(this).attr('href');
    // tangkap elemen ybs
    let elementTujuan = $(tujuan);
    // pindahkan scroll
    $('body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1250, 'swing');
    e.preventDefault();
});

// parallax
$(window).scroll(() => {
    let wScroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transfrom' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transfrom' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transfrom' : 'translate(0px, '+ wScroll/2 +'%)'
    });
});