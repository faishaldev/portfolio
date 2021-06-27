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