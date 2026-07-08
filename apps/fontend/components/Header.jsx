"use client"
import Link from "next/link"
import { useState , useContext} from "react"
import BarsIcon from "./icons/Bars"
import { CartContext } from "../contexts/CartContext"
import { enTofa } from "../utils/Utilities"

export default function Header(){
    const[isactivemobaile, setisactivemobaile] = useState(false)
    const { cart } = useContext(CartContext);
    return(
        <header className="header">
            <div className="header-warpper">
                
                <nav className={`nav ${isactivemobaile? "active" : ""}`}>
                    <Link className="nav-link" href={"/"}>صفحه اصلی</Link>
                    <Link className="nav-link" href={"/products"}>محصولات</Link>
                    <Link className="nav-link" href={"/cart"}>سبد خرید</Link>
                    {cart.length>0 ? <span className="nav-link">{enTofa(cart.length) }</span> : ""}
                    <Link className="logo" href={"/"}>
                   <img src="/images/logo.jpg" alt="logo" />
                </Link>
                </nav>
                <button onClick={()=>setisactivemobaile((prev)=>!prev)} className="nav-button">
                    <BarsIcon/>
                </button>
            </div>
        </header>
    )
}