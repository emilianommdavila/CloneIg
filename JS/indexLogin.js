const loginButton = document.querySelector("#boton")
console.log(loginButton)
loginButton.addEventListener('click', comprobar);


function comprobar() {

    const ajax = new XMLHttpRequest();

    ajax.open('GET', 'publicacion.json');

    ajax.addEventListener('load', ajaxCallback);

    ajax.send();


    function ajaxCallback() {
        console.log("hola")
        if (ajax.status === 200) {
            const respuesta = ajax.response;
            const respuestaParseada = JSON.parse(respuesta);
            const IngresoNuevo = new Usuario(document.querySelector("#inputUsuario").value);
            IngresoNuevo.verificarUsuario(respuestaParseada.data);

        }
    }


    class Usuario {
        constructor(usuario, contrasena) {
            this.usuario = usuario;
            this.contraseña = contrasena;
        }
        nombre(data) {
            return data.usuario
        }
        verificarUsuario(usuario) {

            let variable = usuario.find(persona => persona.usuario == this.usuario)
            if (variable) {

                location.href = "cloneIg.html";
            } else {
                console.log("no funca el usuario");
                let element = document.querySelector('#error');
                let fragment = document.createDocumentFragment();
                let error = ("El usuario no existe")
                let p = document.createElement('p');
                p.textContent = error;
                fragment.appendChild(p);
                element.appendChild(fragment);
            }

        }
    }
}