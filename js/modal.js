$(window).on('load resize', function() {
  $container = $('.grid');
  $item = $('.fellow');
  $(".grid, .fellow").removeAttr("style");
  $containerHeight = $container.height();
  $container.height($containerHeight);
  $item.each(function() {
    $this = $(this);
    var w = $this.width();
    var h = $this.height();
    var childPos = $this.offset();
    var parentPos = $this.parent().offset();
    var top = childPos.top - parentPos.top;
    var left = childPos.left - parentPos.left;
    $this.css({
      'width': w + 'px',
      'height': h + 'px',
      'top': top + 'px',
      'left': left + 'px'
    });
    $this.find('.close').click(function() {
      $this.find('.right *, .close, .meta').fadeOut(1000);
      setTimeout(function() {
        $this.find('.left').css('width', '100%');
        $this.addClass('closed').removeClass('open').css({
          'width': w + 'px',
          'height': h + 'px',
          'top': top + 'px',
          'left': left + 'px',
          'margin': '1%'
        });
        setTimeout(function() {
          $this.css('z-index', 1);
        });
      }, 1000);
    });
  });
});

$(window).load(function() {
  $('.fellow').css('position', 'absolute');
});

$(window).load(function() {
  $('.closed').click(function() {
    h = $('.grid').height();
    $this = $(this);
    $this.addClass('open').removeClass('closed').css({
      'top': 0,
      'left': 0,
      'width': '100%',
      'height': h + 'px',
      'background': '#fff',
      'z-index': 99999,
      'margin': 0
    });
    $this.find('.left').css('width', '35%');
    setTimeout(function() {
      $this.find('.right *, .close, .meta').fadeIn(1000);
    }, 1000);
  });
});