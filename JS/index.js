const lugarParaPonerHistorias = document.querySelector('#lugarParaPonerHistorias');

const historia = document.querySelector("#historia")
historia.addEventListener("click", mostrarHistoria)


const historiaNueva = (foto) => {
    return `
    <div class="cosoNuevo">
    <img class="fotoHistoria" id="historiaNueva" src="${foto}" alt="">
</div>
`
}

const insertarHistoria = (historiaParaMostrar) => {

    const insertarHistoria = anadirHistoria(historiaParaMostrar);
    lugarParaPonerHistorias.appendChild(insertarHistoria)
}

const anadirHistoria = (foto) => {
    const elemento = document.createElement("history")
    elemento.innerHTML = historiaNueva(foto)
    return elemento
}
const map_function = () => {

    return
}

function mostrarHistoria() {

    const ajax = new XMLHttpRequest();

    ajax.open('GET', 'historias.json');

    ajax.addEventListener('load', ajaxCallback);

    ajax.send();


    function cambiarSrc(src) {
        historiaSeleccionada = document.querySelector("#historiaNueva")
        historiaSeleccionada.src = src
    }

    function ajaxCallback() {


        if (ajax.status === 200) {

            const respuestaAjax = ajax.response
            const respuestaParseada = JSON.parse(respuestaAjax);
            const publicaciones = respuestaParseada.data;
            let a = -1
            bucleHistorias()
            setInterval(cambiarHIstoria, 1000)


            function bucleHistorias() {
                a++

                const arrayFotos = publicaciones[a].historia
                console.log(arrayFotos)
                insertarHistoria(arrayFotos)
            }

            function cambiarHIstoria() {
                a++

                const arrayFotos = publicaciones[a].historia
                console.log(arrayFotos)
                cambiarSrc(arrayFotos)
            }
        }

    }

}