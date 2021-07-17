// Toggling Menu
const fs = require('fs-extra')
const readline = require('readline');
const $ = require('jquery')

// Testing
// $('#dashboard').hide();
// $('#file-screen').show();

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

// Show all files
const showAllFiles = () => {
    const fileNames = fs.readdirSync('./files/');

    async function getFirstLine(filePath) {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return (fileContent.match(/(^.*)/) || [])[1] || '';
    } 
    
    for(i = 0; i < fileNames.length; i++) {
        let temporaryLines = [];
        let newFileButton = document.createElement('button');
        let newPath = './files/' + fileNames[i];
        let rd = readline.createInterface({
            input: fs.createReadStream(newPath),
            output: process.stdout,
            console: false
        });
        rd.on('line', function(line) {
            temporaryLines.push(line);
            $(newFileButton).html(temporaryLines[0]);
        });
        $(newFileButton).addClass('file-button');
        $('.content').append(newFileButton);
    }
}

showAllFiles();

$('#add-new-file').on('click', () => {
    $('#dashboard').fadeOut();
    $('#file-screen').delay(350).fadeIn();
})

const saveFile = (fileTitle, bodyText) => {
    const contents = '<h3>' + $(fileTitle).val() + '</h3>' + '<p>' + $(bodyText).text() +'</p>';
    fs.writeFile('./files/' + $(fileTitle).val()  + '.html', contents);
}

$('#save-file').on('click', () => {
    saveFile('#input-title', '#input-body');
})

$('#menu-link-files').on('click', () => {
    $('#file-screen').fadeOut();
    $('#dashboard').delay(350).fadeIn();
    toggleMenu();
    $('.file-button').remove();
    showAllFiles();
})