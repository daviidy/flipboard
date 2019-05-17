var main = function(){

  $('.arrow-next').click(function(){

    var slideActuel = $('.active-slide');
    var prochainSlide = slideActuel.next();

    var pointActuel = $('.active-dot');
    var prochainPoint = pointActuel.next();

    if (prochainSlide.length == 0) {

      prochainSlide = $('.slide').first();
      prochainPoint = $('.dot').first();

    }

    slideActuel.fadeOut(600).removeClass('active-slide');
    prochainSlide.fadeIn(600).addClass('active-slide');

    pointActuel.removeClass('active-dot');
    prochainPoint.addClass('active-dot');

  });


  $('.arrow-prev').click(function(){

    var slideActuel = $('.active-slide');
    var precedentSlide = slideActuel.prev();

    var pointActuel = $('.active-dot');
    var precedentPoint = pointActuel.prev();

    if (precedentSlide.length == 0) {

      precedentSlide = $('.slide').last();
      precedentPoint = $('.dot').last();

    }

    slideActuel.fadeOut(600).removeClass('active-slide');
    precedentSlide.fadeIn(600).addClass('active-slide');

    pointActuel.removeClass('active-dot');
    precedentPoint.addClass('active-dot');

  });





};//fin de la fonction


$(document).ready(main);
