'use strict';

const body = document.getElementsByTagName('body')[0];
const header = document.getElementsByClassName('gb_Md');
const baseFormat = document;

const changeTheme = theme => {
};

window.onload = () => {
    body.style = "background-color: #000; color: #fff;";
    for (const div of header) {
        div.style = "background-color: #000;";
    }
};

