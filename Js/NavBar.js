document.addEventListener("DOMContentLoaded", function () {
    let navbarContainer = document.getElementById("navbar-container");
let footer = document.getElementById("footer");
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        });

    fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                footer.innerHTML = data;
            });
    
});
