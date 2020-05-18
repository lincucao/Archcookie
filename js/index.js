$(function(){
    // 左侧菜单收缩
    $("#menuToggle").on("click", function () {
      $("#sidebar").toggleClass("sidebar-active");
      $("#mainContent").toggleClass("main-active");
    });
    // 点击菜单隐藏
    $(".side-menu ul li a").on("click", function () {
      $("#sidebar").toggleClass("sidebar-active");
    });
    // 点击空白处隐藏
    $(".hideSidebar").on("click", function () {
      if ($("#sidebar:has('.sidebar-active')"))
      $("#sidebar").toggleClass("sidebar-active");
    });
    // 设置收藏
    function shoucang(sTitle, sURL) {
      try {
        window.external.addFavorite(sURL, sTitle);
      } catch (e) {
        try {
          window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
          alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
      }
    }
});

