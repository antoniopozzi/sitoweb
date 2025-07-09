// script.js
document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('cookie-banner');
    if (!localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'block';
    }

    document.getElementById('accept-cookies').onclick = function () {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none';
    };
});
