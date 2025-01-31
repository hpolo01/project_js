// PRODUCTOS
const productos = [
    // BEBIDAS
    {
        id: "bebidas",
        titulo: "TE DE MATCHA",
        imagen: "https://img.freepik.com/premium-photo/green-matcha-tea-drink-tray-ai-generated_154515-10517.jpg",
        categoria: {
            nombre: "BEBIDAS",
            id: "bebidas"
        },
        precio: 11800
    },
    {
        id: "bebidas2",
        titulo: "CAPUCCHINO",
        imagen: "https://coffeezukan.com/wp-content/uploads/2017/11/img_0-1024x725.jpeg",
        categoria: {
            nombre: "BEBIDAS",
            id: "bebidas"
        },
        precio: 4800
    },  
    {
        id: "bebidas3",
        titulo: "ESPRESSO",
        imagen: "https://i1.wp.com/comohacercafe.com/wp-content/uploads/2020/03/espresso.jpeg",
        categoria: {
            nombre: "BEBIDAS",
            id: "bebidas"
        },
        precio: 3000
    },
    {
        id: "bebidas4",
        titulo: "LATTE CALIENTE",
        imagen: "https://img.freepik.com/premium-photo/top-view-hot-espresso-with-brown-coffee-seeds-brown-wooden-desk-coffee-cup-drink-generate-ai_972969-4188.jpg",
        categoria: {
            nombre: "BEBIDAS",
            id: "bebidas"
        },
        precio: 6500
    },
    {
        id: "bebidas5",
        titulo: "LATTE FRIO",
        imagen: "https://www.southernflavoring.com/cdn/shop/articles/iced_coffeeshutterstock_2330060877.jpg?v=1722016543&width=1500",
        categoria: {
            nombre: "BEBIDAS",
            id: "bebidas"
        },
        precio: 7000
    },
    


    // COMBOS
    {
        id: "combos1",
        titulo: "DESAYUNO SENCILLO:) ",
        imagen: "https://www.lanegrita.com.py/pedidos/images/products/id_foto_315.jpg",
        categoria: {
            nombre: "COMBO #1",
            id: "combos"
        },
        precio: 15900
    },
    {
        id: "combos2",
        titulo: "DESAYUNO PREMIUM",
        imagen: "https://www.venopi.com/media/uploads/venue/space/1024/1024_Rocking_chair_food_1.jpeg",
        categoria: {
            nombre: "COMBO #2",
            id: "combos"
        },
        precio: 22500
    },
    {
        id: "combos3",
        titulo: "CROISSANT + ESPRESSO",
        imagen: "https://s1.1zoom.me/big0/288/Coffee_Croissant_Cup_490621.jpg",
        categoria: {
            nombre: "COMBO #1",
            id: "combos"
        },
        precio: 8000
    },


    // ADICIONES
    {
        id: "adiciones1",
        titulo: "TORTA DE CHOCOLATE",
        imagen: "https://www.recetasnestle.com.ve/sites/default/files/srh_recipes/e2928ff551a360cdadb4e5a2528841b7.jpg",
        categoria: {
            nombre: "ADICIONES",
            id: "adiciones"
        },
        precio: 4200
    },
    {
        id: "adiciones2",
        titulo: "TORTA DE BANANO",
        imagen: "https://i.pinimg.com/736x/27/9a/7a/279a7a021b232be68b683907aca8e202.jpg",
        categoria: {
            nombre: "ADICIONES",
            id: "adiciones"
        },
        precio: 3000
    },
    {
        id: "adiciones3",
        titulo: "QUESOS",
        imagen: "https://th.bing.com/th/id/R.fefdcf266dcdb521635cc4a88ec7fdbb?rik=KaMIa1xRtmtHGw&riu=http%3a%2f%2fwww.construarte.com.ve%2fwp-content%2fuploads%2f2017%2f06%2fquesos.jpg&ehk=9Gnu2S%2bMIz4pzovU1Y0Fxn3DZ6tMyDWPLFRf%2fdW0EPE%3d&risl=&pid=ImgRaw&r=0",
        categoria: {
            nombre: "ADICIONES",
            id: "adiciones"
        },
        precio: 6700
    
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}