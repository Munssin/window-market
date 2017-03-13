$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  lazyLoad: true
});



$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
});

