document.addEventListener("DOMContentLoaded", function () {
    var navbarContainer = document.getElementById("navbar-container");

    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;

            // Traigo el botón toggler y el navbar
            var navbarToggler = document.querySelector('.navbar-toggler');
            var navbar = document.getElementById('navbar');

            // Cargo de Bt donde esta el collapse de la hamb
            var collapse = new bootstrap.Collapse(navbar.querySelector('.navbar-collapse'));

            // Hover en el toggler ( capaz lo saque xq es medio insoportable)
            function openTogglerOnHover() {
                var target = navbarToggler.getAttribute('data-bs-target');
                var collapseElement = document.querySelector(target);
                if (!collapseElement.classList.contains('show')) {
                    collapse.show();
                }
            }

            navbarToggler.addEventListener('mouseenter', openTogglerOnHover);

            // Cierro el menú desplegable al hacer clic en otra parte de la página ( este si se queda)
            document.addEventListener('click', function (event) {
                var isClickInsideNavbar = navbar.contains(event.target);
                if (!isClickInsideNavbar && collapse._isShown) {
                    collapse.hide();
                }
            });
        })
        .catch(error => {
            console.error("Error al cargar la barra de navegación:", error);
        });
});

