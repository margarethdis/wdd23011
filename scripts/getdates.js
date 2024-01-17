document.addEventListener("DOMContentLoaded", function () {
    // Obtén el año actual y actualiza el primer párrafo del pie de página
    var currentYear = new Date().getFullYear();
    var copyrightElement = document.querySelector("#footer-copyright-year");
    if (copyrightElement) {
        copyrightElement.innerHTML = '&copy; ' + currentYear;
    }

    // Obtén la fecha de la última modificación y actualiza el segundo párrafo del pie de página
    var lastModified = new Date(document.lastModified);
    document.querySelector("#last-modified").textContent = "Last modification: " + lastModified.toLocaleString();

    // Obtén el año actual y actualiza el elemento con el ID 'current-year'
    var currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }
});

