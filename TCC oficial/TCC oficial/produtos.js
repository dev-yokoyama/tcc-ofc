let currentPage = 0;
const pages = document.querySelectorAll(".product-page");

function showPage(page) {
    pages.forEach((p, index) => {
        p.classList.toggle("active", index === page);
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

// Exibir a primeira página inicialmente
showPage(currentPage);
