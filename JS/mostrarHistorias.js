const lugarParaHistorias = document.querySelector('#lugarParaHistorias');

const historia = (publi) => {
    return `
    <div class="child">
    <div class="border">
    <img class="historia" src="${publi.foto_usuario}" alt="">
    </div>
    <p class="textito">${publi.usuario}</p>
    </div>
    `
}


const mapeo_historias = (publi) => {
    const elemento = document.createElement("historiasMapeadas")
    elemento.innerHTML = historia(publi)
    return elemento
}

const crear_historia = () => {

    console.log("hola")
    const ajax = new XMLHttpRequest();

    ajax.open('GET', 'historias.json');

    ajax.addEventListener('load', ajaxCallback);

    ajax.send();


    function ajaxCallback() {
        if (ajax.status === 200) {
            const respuesta = ajax.response;
            const respuestaParseada = JSON.parse(respuesta);
            const historias = respuestaParseada.data;
            const map_historias = historias.map(mapeo_historias);
            map_historias.forEach(element => {
                lugarParaHistorias.appendChild(element)
            })
        }

    }
}
crear_historia()