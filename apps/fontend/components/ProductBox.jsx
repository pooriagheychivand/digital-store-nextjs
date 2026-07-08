"use client";

import Image from "next/image";
import { enTofa } from "../utils/Utilities";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function ProductBox({product}){

    let {addToCart} = useContext(CartContext)
    return(
        <div className="product-wrapper">
            <div className="product-image-box">
                <Link href={`/products/${product._id}`}>
                <Image width={150} height={200} src={product.image} alt={product.title}/>
                </Link>
            </div>

            <div className="product-info-box">
                <Link href={`/products/${product._id}`}>
                <div className="product-title">{product.title}</div>
                </Link>
                <div className="product-price-row">
                    <button onClick={()=>addToCart(product)}
                    
                    className="product-button">افزودن به سبد خرید</button>
                    <div className="product-price">{enTofa(product.price)}</div>
                </div>
            </div>
        </div>
    )
}