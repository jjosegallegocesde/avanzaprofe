import { useState,useEffect } from "react"



export function Administrador(){

    const[nombre,setNombre]=useState("")

    function EnviarDatos(evento){
        evento.preventDefault()
        let datos={
            "nombre":nombre
        }
        console.log(datos)

    }

    return(
        <>
            <br></br>
            <br></br>
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col-8 h-100">
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/Campo-colombiano-foto-Minagricultura-2.jpeg?alt=media&token=0ddf03e2-c13d-49f5-b159-3c3100d82bf7" alt="foto" class="img-fluid w-100"/>
                    </div>
                    <div class="col-4 h-100">
                        <br></br>
                        <br></br>
                        <h2>Registro de mercancia</h2>
                        <form class="my-5" onSubmit={EnviarDatos}>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-basket"></i></span>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Nombre"
                                            id="nombre"
                                            onChange={(evento)=>{
                                                setNombre(evento.target.value) 
                                            }}
                                        />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-image"></i></span>
                                        <input type="text" class="form-control" placeholder="foto"/>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-123"></i></span>
                                        <input type="text" class="form-control" placeholder="Cantidad"/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">($)</span>
                                        <input type="text" class="form-control" placeholder="Precio"/>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Descripción"/>
                                    <label for="floatingInput">Descripción</label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-braces-asterisk"></i></span>
                                        <input type="text" class="form-control" placeholder="Clasificación"/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-c-circle"></i></span>
                                        <input type="text" class="form-control" placeholder="Marca"/>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-bag-dash"></i></span>
                                        <input type="text" class="form-control" placeholder="Presentación"/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-archive"></i></span>
                                        <input type="text" class="form-control" placeholder="Peso"/>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-truck"></i></span>
                                        <input type="text" class="form-control" placeholder="Proveedor"/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-box-seam-fill"></i></span>
                                        <input type="text" class="form-control" placeholder="Volumen"/>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-day"></i></span>
                                        <input type="text" class="form-control" placeholder="Fecha Entrada"/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-day"></i></span>
                                        <input type="text" class="form-control" placeholder="Fecha Vencimiento"/>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">(%)</span>
                                        <input type="text" class="form-control" placeholder="Fecha Entrada"/>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-outline-success w-100">Enviar</button>
                           
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}