document.addEventListener("DOMContentLoaded", function () {
    var footer = document.getElementById("footer");

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
    }) 
})
