var fs = require('fs');

// Menu
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

// fs.readFile('README.md', (err, data) => {

//     // if there's an error, log it and return
//     if (err) {
//         console.error(err)
//         return
//     }

//     // Print the string representation of the data
//     console.log(data.toString())
// })