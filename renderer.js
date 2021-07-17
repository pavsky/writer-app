// Toggling Menu

$('#open-menu, #close-menu').on('click', () => {
    toggleMenu();
})
const toggleMenu = () => {
    $('#open-menu').fadeToggle();
        $('#overlay').fadeToggle();
        $("#menu").animate({
            width: "toggle"
          });
}

// Toggling help
$('#open-help, #close-help').on('click', () => {
    toggleHelp();
})
const toggleHelp = () => {
    $('#info').fadeToggle();
    $('#overlay').fadeToggle();
    $("#help").animate({
        width: "toggle"
      });
}