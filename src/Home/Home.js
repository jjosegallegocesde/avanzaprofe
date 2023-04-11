import './Home.css'
import { AcercaDe } from '../AcercaDe/AcercaDe'
import { Servicios } from '../Servicios/Servicios'
import { Link } from "react-router-dom"
import { Footer } from '../Footer/Footer'
export function Pepe(){
    return(
        <>
            <section>
                <div class="banner">
                    <h1>Tiendas Don Chucho...</h1>
                    <h2>Economía y calidad</h2>
                    <Link class="btn btn-primary">Ver más</Link>
                </div>
            </section>
            <AcercaDe></AcercaDe>
            <br></br>
            <Servicios></Servicios>
            <Footer></Footer>
        </>
    )
}