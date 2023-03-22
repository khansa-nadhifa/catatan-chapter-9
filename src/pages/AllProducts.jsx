import { useEffect, useState } from "react";
import { List } from "reactstrap";

export default function AllProducts(){
    const [products, setProducts] = useState([{id: 1, title: 'hp', description:'gini'}])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data.products))
    })

    return(
        <>
            <h1>Products</h1>
            <List>
                {
                    products.map(product => (
                        <li key={product.id}> 
                            title = {product.title} <br/>
                            description = {product.description}
                        </li>
                    
                    ))
                }
            </List>
        </>
    )
}