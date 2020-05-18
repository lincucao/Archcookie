$(function(){

    // 左侧菜单收缩
    $("#menuToggle").on("click", function(){
      $("#sidebar").toggleClass("sidebar-active");
      $("#mainContent").toggleClass("main-active");
    });
    $("#sidebar ul li a").on("click", function () {
      $("#sidebar").toggleClass("sidebar-active");
    });
});