import { useState } from "react";
// import "./ProductList.css";
import "../components/ProductList.css"
function ProductList() {
    const [products, setProducts] = useState([
        { id: 1, name: "iPhone 15", price: 80000 , rating:4.5},
        { id: 2, name: "Samsung Galaxy", price: 70000,  rating:4.2 },
        { id: 3, name: "OnePlus 12", price: 60000, rating:4.7 },
    ]);


    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState("");


    const addProduct = () => {
        if (name === "" || price === ""|| rating==="")
        {
alert("Please enter all the fields!");
            return;
        }
            

        const newProduct = {
            id: Date.now(),
            name: name,
            price: Number(price),
            rating:Number(rating)
        };

        setProducts([...products, newProduct]);
        setName("");
        setPrice("");
        setRating("");
    };

    const deleteProduct = (id) => {
        const filtered = products.filter((p) => p.id !== id);
        setProducts(filtered)
        setSearch("");
    };

    const sortLowToHigh = () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        setProducts(sorted);
    };

    const sortHighToLow = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setProducts(sorted);
    };

    const addToCart = (product) => {
        console.log("Added to cart:", product);
        alert(product.name + "added to cart !");
    };

    const sortRatingLowToHigh =()=>
    {
       const sorted = [...products].sort((a, b) => a.rating - b.rating); 
       setProducts(sorted);
    }

     const sortRatingHighToLow =()=>
    {
       const sorted = [...products].sort((a, b) => b.rating - a.rating); 
       setProducts(sorted);
    }


    return (
        <div className="container" style={{ padding: "20px" }}>




            <h2>Add Product</h2>

            <input
                type="text"
                placeholder="Product name"
                value={name}
                onChange={(e) => setName(e.target.value)} />


            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />

                 <input
                type="number"
                step="0.1"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)} />

            <button onClick={addProduct}>Add</button>

            <hr />

            <h2>Search</h2>
            <input
                type="text"
                placeholder="Search product...."
                value={search}
                onChange={(e) => setSearch(e.target.value)} />

            <h2>Sort</h2>
            <button onClick={sortLowToHigh}>Price Low ➡️ High </button>
            <button onClick={sortHighToLow}>Price High ➡️ Low</button>
            <br /><br />

   <button onClick={sortRatingLowToHigh}>Rating Low ➡️ High </button>
            <button onClick={sortRatingHighToLow}>Rating High ➡️ Low</button>

            <div className="product-grid">
                { products
                    .filter((product) =>
                        product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                    )
                    .map((product) => (
                        <div key={product.id} className="product-card">
                            <h3>{product.name}</h3>
                            <p>Price: ₹{product.price}</p>
                            <p>Rating:⭐ {product.rating}</p>

                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                            </div>
                    )) }
            </div>
        </div>
    );
}
    export default ProductList