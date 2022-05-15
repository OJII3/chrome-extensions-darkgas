'use strict';

const buttonSpace = document.querySelector('div.INSTk');

const body = document.querySelector('body');
const header = document.querySelector('.gb_Md');
const side_bar = document.querySelector('.td5WLe');
const editor_backgrounds = document.querySelectorAll('.monaco-editor, .monaco-editor-background, .monaco-editor .inputarea.ime-input, .margin');
const gray_font_elements = document.querySelectorAll('.gb_5d, .UGZzee, .KOiXb');
let mainButton;

const changeTheme = theme => {

    body.style = "background-color: #111; color: #fff;";
    header.style = "background-color: #222; color: #fff;";
    side_bar.style = "background-color: #000; color: #fff;";

    for (const element of editor_backgrounds) {
        element.style = "background-color: #000;";
    }

    for (const element of gray_font_elements) {
        element.style.color = "#ccc";
    }

    
};

const createMainButton = () => {
    mainButton = document.createElement('button');
    mainButton.id = 'main_button';
    mainButton.innerHTML = "on";
    mainButton.addEventListener('click', () => changeTheme());
    buttonSpace.appendChild(mainButton);
};

createMainButton();
