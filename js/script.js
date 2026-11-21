function switchPage(pageId) {
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const pageId = this.getAttribute("data-page");
            if (pageId) {
                e.preventDefault();
                switchPage(pageId);
            }
        });
    });
});