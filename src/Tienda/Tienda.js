import './Tienda.css'
import { useNavigate } from "react-router-dom";

export function Tienda(){

    function cambiarFoto(evento){
        evento.preventDefault()
        evento.target.classList.remove("sombra")
    }

    function cambiarFoto2(evento){
        evento.preventDefault()
        evento.target.classList.add("sombra")
    }

    let navigate = useNavigate();

    function activar(producto){
        navigate("/compras",{
            state:{
                producto
            }
        });
    }

    let productos=[
        {
            nombre:"Tomate",
            precio:2800,
            descripcion:"Tomates del campo colombiano",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/tomates.webp?alt=media&token=ab114ea8-f487-4e7c-a448-c25040ff228e"
        },
        {
            nombre:"Bananos",
            precio:4500,
            descripcion:"Bananos tipo importacion traidos de necocli",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/bananos.webp?alt=media&token=f64e3a7a-52f2-46f4-9982-b2fe7d80276f"
        },
        {
            nombre:"Aguacate",
            precio:5000,
            descripcion:"Aguacate tipo hass cultivado en el suroeste Antioqueño",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/aguacate.webp?alt=media&token=0d30c2ec-13e2-4fb8-9308-528e96916853"
        
        },
        {
            nombre:"Fresas",
            precio:12000,
            descripcion:"Fresas campesinas, dulces y deliciosas",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/fresas.webp?alt=media&token=e75e61c7-30cf-42ee-b36c-0179a9e22d35"
        },
        {
            nombre:"Mazorca",
            precio:2000,
            descripcion:"Mazorca de cordoba lista para su sancocho",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/mazroca.webp?alt=media&token=543e061a-6117-4023-9a4a-d2af090bd80f"
        },
        {
            nombre:"Manzana Roja",
            precio:8000,
            descripcion:"Manzanas jugosas y deliciosas para acompañar tu dia",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/manzana.webp?alt=media&token=bf41558f-0fca-4751-b678-9fe05caa2477"
        },
        {
            nombre:"Papa criolla",
            precio:8500,
            descripcion:"Papa criolla de la mejor calidad",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/papacriolla.webp?alt=media&token=8766e038-7e72-45da-89e3-bc6766624278"
        },
        {
            nombre:"Peras",
            precio:10000,
            descripcion:"Peras para tus postres, dulces y suaves",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/peras.webp?alt=media&token=004f6386-7394-4860-a0a7-6e2e1e97ff7a"
        },
        {
            nombre:"Pimenton",
            precio:4500,
            descripcion:"Pimentones ferscos traidos desde santa Elena",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/pimenton.webp?alt=media&token=cb0479a1-8717-4376-a71d-5c5e2a552273"
        },
        {
            nombre:"Brocoli",
            precio:1500,
            descripcion:"Brocoli fresco para tus preparaciones",
            foto:"https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/brocoli.webp?alt=media&token=a8a8ca94-233d-4ea6-bae9-fe1b126675a9"
        }
    ]

    return(
        <>
            <div class="row row-cols-1 row-cols-md-4 g-5 my-5 p-5">
                {
                  productos.map(function(producto){
                    return(
                        <div class="col zoom" onClick={function(){activar(producto)}}>
                            <div class="card shadow h-100 p-2">
                                <h2 class="fw-bold text-center">{producto.nombre}</h2>
                                <img 
                                    src={producto.foto} 
                                    alt="foto" 
                                    class="img-fluid sombra" 
                                    onMouseOver={cambiarFoto} 
                                    onMouseLeave={cambiarFoto2}
                                />
                                
                                <p class="text-center fw-bold">{producto.descripcion}</p>
                                <div class="row">
                                    <div class="col-6 text-start">
                                        <h3 class="text-success">${producto.precio} COP</h3>
                                    </div>
                                    <div class="col-6 text-end">
                                        <i class="bi bi-cart-fill fs-1 text-dark"></i>
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                        </div>
                    )
                  })  
                }
            </div>
        </>
    )

}