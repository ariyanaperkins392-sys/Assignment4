document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.topnav');

    if (menuButton && navigation) {
        menuButton.addEventListener('click', function () {
            navigation.classList.toggle('show');
            const expanded = navigation.classList.contains('show');
            menuButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        });
    }
});
