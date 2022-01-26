$(document).ready(function () {
  //取得網頁高度
  function getBodyTop() {
    var top =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    var body = document.body,
      html = document.documentElement;
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    return {
      top: top,
      height: height,
    };
  }

  // aside
  function setAside() {
    var h1 = $('#main-vision').height();
    var h2 = $('#gifts').height();
    var h3 = $('#features').height();

    var scrollTop = getBodyTop().top;
    console.log(scrollTop, h1, h2);
    if ((scrollTop > h1 - 300) & (scrollTop < h1 + h2 + h3 - 200)) {
      $('aside').addClass('on');
    } else {
      $('aside').removeClass('on');
    }
  }

  window.addEventListener('scroll', setAside, false);

  $('.apply').on('click', function () {
    // line webview 必須用此寫法
    $('#loader').addClass('on');
    setTimeout(function () {
      $('#loader').removeClass('on');
      window.location.href =
        'https://www.taishinbank.com.tw/eService/dreamloan/apply/newold/';
      return false;
    }, 800);
  });

  $('.calc').on('click', function () {
    // line webview 必須用此寫法
    $('#loader').addClass('on');
    setTimeout(function () {
      $('#loader').removeClass('on');
      window.location.href =
        'https://www.taishinbank.com.tw/eService/dreamloan/trial/';
      return false;
    }, 800);
  });
});
