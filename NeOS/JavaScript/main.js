let page = document.querySelector('.page');
let theme = document.querySelector('.theme');
let message = document.querySelector('.message-theme');
let name = document.querySelector('.name');
let confirm_name = document.querySelector('.confirm-name');

theme.onclick = function() {
 page.classList.toggle("pink-for-main");
 page.classList.toggle("green-for-main");
};

confirm_name.onclick = function() {
message.textContent = name.value;
};