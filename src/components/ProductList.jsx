import React,{useState, useEffect} from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ searchQuery, selectedCategory }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then((res)=> res.json())
        .then((data)=> setProducts(data));
    }, []);

    const filteredProducts = products.filter((product) =>{
        return (
            (selectedCategory === '' || product.category === selectedCategory) &&
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    });
    return(
        <div className="product-list">
            {filteredProducts.map((product) => ( 
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;