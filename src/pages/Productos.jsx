import { useEffect, useState } from "react"
import { getProducts } from "../helpers/getProductos"
import { CardProducts } from "../components/CardProducts"
import { CategoryFiltro } from "../components/CategoryFiltro"

export const Productos = () => {
    const [productos, setProductos] = useState([])
    const [filtroCategoria, setFiltroCategoria] = useState("")
    useEffect(() => {
        getProducts().then(res => setProductos(res))
    }, [])

    const nuevaCategoria = (()=> (
        filtroCategoria === "" ? productos : productos.filter((prod) => prod.category === filtroCategoria)
    ))();

    return (
        <main className="container mx-auto">
            <h1 className="font-bold text-center text-blue-500 text-2xl">PAGINA DE PRODUCTOS</h1>

            <CategoryFiltro setFiltroCategoria={setFiltroCategoria} />


            <section className="py-10">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        nuevaCategoria.length !== 0 ? (
                            nuevaCategoria.map((prod) => (
                               <CardProducts prod={prod} key={prod.id} />
                            ))
                        ) : (
                            <div>
                                <span>Cargando.......</span>
                            </div>
                        )
                    }
                </div>
            </section >
        </main>
    )
}
