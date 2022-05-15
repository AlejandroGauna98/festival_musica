document.addEventListener('DOMcontentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    
    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/${i}.avif" type="image/avif">
            <source srcset="build/img/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="img/${i}.jpg" alt="Imagen Galeria">`;

        galeria.appendChild(imagen);
    }
}

