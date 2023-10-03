//PRODUCTS
const healthcare__container = document.querySelector('.healthcare__container');

const healthcare__container__items = [
    {
        h3: 'Cepillo de bambú',
        p: 'Paquete de 2 unidades hecho 100% de materiales ecológicos.',
        img: './assets/img/products/toothbrush.jpg'
    },
    {
        h3: 'Crema para manos',
        p: 'Crema hidratante con eucalipto ayuda al cuidado de la piel.',
        img: './assets/img/products/hand-cream.jpeg'
    },
    {
        h3: 'Serum hidratante',
        p: 'Sérum hecho a base de extractos naturales y ácido hialurónico.',
        img: './assets/img/products/serum.jpg'
    },
    {
        h3: 'Kit de viaje',
        p: 'Incluye peine y cepillo de bambú, jabón orgánico de eucalipto y shampoo tamaño de viaje.',
        img: './assets/img/products/organic-soap.jpg'
    },
    {
        h3: 'Set de jabones ',
        p: 'Paquete de 2 unidades jabón de carbón activado con coco.',
        img: './assets/img/products/organic-kit.jpg'
    },
    {
        h3: 'Kit de skincare',
        p: 'Incluye 2 rodillos y una guasha.',
        img: './assets/img/products/guasha-kit.jpg'
    },


];

healthcare__container__items.map(item => {
    const healthcare__container__html = `
    <div class="healthcare__container-item">
    <svg width="24" class='item__svg' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <img src="${item.img}" alt="Image">
    <div class="item-text">
        <h3>${item.h3}</h3>
        <p>${item.p}</p>
    </div>
    </div>`

    healthcare__container.innerHTML += healthcare__container__html;

});

//FORNITURE
const furniture__container = document.querySelector('.furniture__container');

const furniture__container__items = [
    {
        h3: 'Silla de bambú',
        p: 'Disponible en 2 colores: blanco y negro, acabado de bambú.',
        img: './assets/img/furniture/wood-chair.jpg'
    },
    {
        h3: 'Banco pequeño',
        p: 'Ideal para agregar un toque de estilo a tus espacios.',
        img: './assets/img/furniture/small-table.jpeg'
    },
    {
        h3: 'Buró',
        p: 'Elaborado con bambú, cuenta con 2 compartimentos para guardar cosas . ',
        img: './assets/img/furniture/stand-table.jpg'
    },
    {
        h3: 'Cajonera',
        p: 'Paquete de 2 unidades hecho 100% de materiales ecológicos.',
        img: './assets/img/furniture/mueble.jpg'
    },
    {
        h3: 'Espejo de pared',
        p: 'Paquete de 2 unidades hecho 100% de materiales ecológicos.',
        img: './assets/img/furniture/mirror.jpg'
    },
    {
        h3: 'Lámpara bambú',
        p: 'Paquete de 2 unidades hecho 100% de materiales ecológicos.',
        img: './assets/img/furniture/desk-lamp.jpg'
    },
    {
        h3: 'Mesita decorativa',
        p: 'Paquete de 2 unidades hecho 100% de materiales ecológicos.',
        img: './assets/img/furniture/stand.jpg'
    },
    {
        h3: 'Mesa de desayuno',
        p: 'Paquete de 2 unidades hecho 100% de materiales ecológicos.',
        img: './assets/img/furniture/mini-table.jpg'
    },
    {
        h3: 'Mesa decorativa',
        p: 'Paquete de 2 unidades hecho 100% de materiales ecológicos.',
        img: './assets/img/furniture/table.jpg'
    },

];

furniture__container__items.forEach(item => {
    const furniture__container__html = `
    <div class="furniture__container-item">
        <svg class='item__svg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.34255 7.7779C3.5687 7.23194 3.90017 6.73586 4.31804 6.31799C4.7359 5.90012 5.23198 5.56865 5.77795 5.3425C6.32392 5.11635 6.90909 4.99995 7.50004 4.99995C8.09099 4.99995 8.67616 5.11635 9.22213 5.3425C9.7681 5.56865 10.2642 5.90012 10.682 6.31799L12 7.63599L13.318 6.31799C14.162 5.47407 15.3066 4.99997 16.5 4.99997C17.6935 4.99997 18.8381 5.47407 19.682 6.31799C20.526 7.16191 21.0001 8.30651 21.0001 9.49999C21.0001 10.6935 20.526 11.8381 19.682 12.682L12 20.364L4.31804 12.682C3.90017 12.2641 3.5687 11.7681 3.34255 11.2221C3.1164 10.6761 3 10.0909 3 9.49999C3 8.90904 3.1164 8.32387 3.34255 7.7779Z" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <img src="${item.img}" alt="Image">
        <div class="item-text">
            <h3>${item.h3}</h3>
            <p>${item.p}</p>
        </div>
   </div>`

    furniture__container.innerHTML += furniture__container__html;
});

//GIVE A LIKE TO PRODUCTS AND FURNITURES

const item__svg = document.querySelectorAll('.item__svg');

item__svg.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    });
});