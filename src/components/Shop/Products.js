import React from "react";
import ProductItem from './ProductItem'
const Products=()=>{
    const DUMMY_PRODUCTS = [
        {id:1,price:6,title:'My first Book',description:'the first book I ever Wrote'},
        {id:2,price:5,title:'My second Book',description:'the second book I ever Wrote'}

    ]
    return(
        <section>
            <h2>Buy your favourite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product)=>(
                <ProductItem  
                 key={product.id}
                 id={product.id}
                 title={product.title}
                 price={product.price}
                 description={product.description}
                 />
                ))}
            </ul>
        </section>
    )
}
export default Products;