document.addEventListener("DOMContentLoaded", function () {
    //para obtener el año actual y actualiza el primer párrafo del pie de página
    var currentYear = new Date().getFullYear();
    var copyrightElement = document.querySelector("#footer-copyright-year");
    if (copyrightElement) {
        copyrightElement.innerHTML = '&copy; ' + currentYear;
    }

    //para para obtener  la fecha de la última modificación y actualiza el segundo párrafo del pie de página
    var lastModified = new Date(document.lastModified);
    document.querySelector("#last-modified").textContent = "Last modification: " + lastModified.toLocaleString();

    // para obtener año actual y actualiza el elemento con el ID 'current-year'
    var currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }
});

