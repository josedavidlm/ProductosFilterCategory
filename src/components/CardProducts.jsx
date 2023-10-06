import { Link } from "react-router-dom"


export const CardProducts = ({prod}) => {
    const {id, title, price, category, image, rating } = prod

    return (
        <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <div>
                <div className="relative flex items-end overflow-hidden rounded-xl">
                    
                    <div className="absolute top-5 left-5 bg-blue-300 text-white rounded-md p-2">
                        {rating.rate}
                    </div>

                    <img src={image} alt={title} className="w-[300px] h-[250px]" />
                
                </div>

                <div className="mt-1 p-2">
                    <Link to={`/product/${id}`} className="text-slate-700 font-bold">{title}</Link>
                    <p className="mt-1 text-sm text-slate-400">{category}</p>

                    <div className="mt-3 flex items-end justify-between">
                        <p className="text-lg font-bold text-blue-500">S/. {price}</p>

                        <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                            <button className="text-sm">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
