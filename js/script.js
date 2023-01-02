// Dropdown Menu Hide and Show

$(document).ready(function(){
    $('.show_menu').click(function(){
        $('.subMenu').toggle();
    });
    
    $('.mainMenuArea').meanmenu({
        meanMenuOpen: "<span></span><span></span><span></span>",
        meanMenuContainer: '.menuBar',
        meanScreenWidth: 767,
    });
});
