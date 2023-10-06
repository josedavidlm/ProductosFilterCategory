import { Route, Routes } from "react-router-dom"
import { Productos } from "../pages/Productos"
import { Product } from "../pages/Product"

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Productos />} /> 
            <Route path="/product/:id" element={<Product />} />
            <Route path="/*" element={<div>Hola</div>} />
        </Routes>
    </div>
  )
}
