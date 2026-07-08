import ProductBox from "./ProductBox";

export default function ProductList({products}){
    return(
        <div className="products-grid">
            {
                products.length >  0 &&
                products.map(
                    (products) => <ProductBox product={products} key={products._id}/>
                )
            }
        </div>
    )

}