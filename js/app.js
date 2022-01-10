const formulario = document.getElementById("formulario");
const registro = document.getElementById("registro");
const exito = document.getElementById("exito");



formulario.addEventListener("submit", async (e)=>{
    e.preventDefault();
    
    /* try {
        
    
    apiKey = `https://sheet.best/api/sheets/6a296ca6-04ea-4b93-a86d-1261d8aa642e`;
    const respuesta = await fetch(apiKey, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Correo": formulario.correo.value,
            "Telefono": formulario.telefono.value
        })

    });

    //console.log(respuesta);

    const contenido = await respuesta.json();
    console.log(contenido);

    
    } catch (error) {
        console.log(error);       
    }

    registro.classList.remove("activo");
    exito.classList.add("activo");




    try {
        
    
        apiKey = `https://sheet.best/api/sheets/6a296ca6-04ea-4b93-a86d-1261d8aa642e`;
        const respuesta = await fetch(apiKey);
    
        //console.log(respuesta);
    
        const contenido = await respuesta.json();
        console.log(contenido);
    
        
    } catch (error) {
        console.log(error);       
    } */



/* try {
    let numeroFila = 0;
    apiKey = `https://sheet.best/api/sheets/6a296ca6-04ea-4b93-a86d-1261d8aa642e/${numeroFila}`;
    const respuesta = await fetch(apiKey,{
        method: "DELETE"
    });


    const contenido = await respuesta.json();
    console.log(contenido);



} catch (error) {
    console.log(error);
} */






try { // Actualiza FIlas
        let numeroFila = 3;
    
    apiKey = `https://sheet.best/api/sheets/6a296ca6-04ea-4b93-a86d-1261d8aa642e/${numeroFila}`;
    const respuesta = await fetch(apiKey, {
        method: "PATCH",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            /* "Nombre": formulario.nombre.value,
            "Correo": formulario.correo.value, */
            "Telefono": "578"
        })

    });

    //console.log(respuesta);

    const contenido = await respuesta.json();
    console.log(contenido);

    
    } catch (error) {
        console.log(error);       
    }


});