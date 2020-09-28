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

});