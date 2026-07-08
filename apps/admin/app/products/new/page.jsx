"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function NewProduct(){

    const [formData , setFormData] = useState({
        title:"",
        price:"",
        image:"",
        description:"",
        category:"لبتاپ"
    })

    const router = useRouter()

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()

        const res = await fetch("http://localhost:3001/api/products",{
            method: "POST",
            headers: {"cotent-type" : "application/json"},
            body: JSON.stringify(formData)
        })

        if(res.ok){
            router.push("/products")
        }
    }

    return(
        <div>
            <h1>Add new product</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="title" placeholder="title"/>
                <input onChange={handleChange} type="number" name="price" placeholder="price"/>
                <input onChange={handleChange} type="text" name="image" placeholder="image url"/>
                <textarea onChange={handleChange} name="description" placeholder="description"></textarea>
                <select onChange={handleChange} name="category">
                    <option value="لبتاپ">لپتاپ</option>
                    <option value="موبایل">موبایل</option>
                    <option value="تبلت">تبلت</option>
                </select>
                <button type="submit">save product</button>
            </form>
        </div>
    )
}