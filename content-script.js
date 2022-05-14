'use strict';

const body = document.getElementsByTagName('body')[0];
const header = document.getElementsByClassName('gb_Md')[0];
const side_bar = document.getElementsByClassName('td5WLe')[0];
const editer = document.getElementsByClassName('monaco-mouse-cursor-text')[0];

const gray_font = [
    document.getElementsByClassName('gb_5d')[0],
    document.getElementsByClassName('UGZzee KOiXb')[0]
];
const baseFormat = document;

const changeTheme = theme => {
    body.style = "background-color: #111; color: #fff;";
    header.style = "background-color: #000; color: #fff;";
    side_bar.style = "background-color: #000; color: #fff;";
    //editer.style = "background-color: #000;";

    for (const gray of gray_font) {
        gray.style = "color: #ccc;";
    }
};

window.onload = changeTheme('dark');


