const form = document.getElementById("contact-form");

// #usando a tag name ao invés de id
form.addEventListener("submit",(e) => {
    e.preventDefault();

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;

    alert(`Confirme seus dados:
    \nNome: ${name}
    \nE-mail: ${email}
    \nMensagem: ${message}`)
})

// # utilizando id em cada elemento, usariamos:
// form.addEventListener("submit",(e) => {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;
//     alert(name);
// })

// function enviar() {
//     alert(`Confirme seus dados:
//     \nNome: ${name}
//     \nE-mail: ${email}
//     \nMensagem: ${message}`)
// }