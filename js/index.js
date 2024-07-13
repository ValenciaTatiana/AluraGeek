document.addEventListener("DOMContentLoaded", async function() {

    // Función asincrona que recibe como parametro el archivo que se desea guardar y mostrar posteriormente
    async function archivoHTML(archivo, elementoId) {
        try {
            const respuesta = await fetch(archivo); // Fetch hace la solicitud y await espera a que se complete
            const datosHTML = await respuesta.text(); // respuesta.text() convierte la respuesta en texto y await espera a que esto suseda
            document.querySelector(elementoId).innerHTML = datosHTML;
        } catch (error) {
            console.error(`Error al cargar ${file}:`, error);
        }
    }
    await archivoHTML("./pages/header.html", ".header-contenedor");
    await archivoHTML("./pages/rodapie.html", ".rodapie-contenedor");
    await archivoHTML("./pages/footer.html", ".footer-contenedor");
})
