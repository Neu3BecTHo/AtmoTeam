let change_theme = document.querySelector('.theme');
change_theme.addEventListener('click', function() {
    document.body.classList.toggle('black-theme');
    document.body.classList.toggle('light-theme');
});