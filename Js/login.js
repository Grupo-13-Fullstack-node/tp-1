document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("pass");
    const checkboxA = document.getElementById("check1");
    const checkboxB = document.getElementById("check2");
    const registerLink = document.getElementById("login-button");
//valido que campos y checks esten OK y quito posibles espacios en blanco del form con el .trim()
    function validateFields() {
        const email = emailInput.value.trim();
        const pass = passInput.value.trim();
        return email !== '' && pass !== '' && checkboxA.checked && checkboxB.checked;
    }
//Acá activo y desactivo el link (botón mentiroso)
    function toggleRegisterLink() {
        if (validateFields()) {
            registerLink.classList.remove("disabled-link");
        } else {
            registerLink.classList.add("disabled-link");
        }
    }

    registerLink.addEventListener("click", function(event) {
        //Este al final queda sin uso xq dejo desactivado el link asi que no hay forma de que se active el evento
        if (!validateFields()) {
            event.preventDefault();
            alert("Por favor, complete los campos para continuar.");
        }
    });

    emailInput.addEventListener("input", toggleRegisterLink);
    passInput.addEventListener("input", toggleRegisterLink);
    checkboxA.addEventListener("change", toggleRegisterLink);
    checkboxB.addEventListener("change", toggleRegisterLink);
    //recargo el enlace por si queda desactivado
    toggleRegisterLink();
});


//Con esto capturo usr y pass para llevarlo a la pág de "login exitoso" y tambien enlazo el botón para migrar de pag
document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;

    localStorage.setItem('email', email);
    localStorage.setItem('pass', password);

    window.location.href = '/login-exitoso.html';
});
