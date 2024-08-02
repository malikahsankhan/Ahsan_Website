"use client";

import customer from "@/apis/customer";
import product from "@/apis/product"
import AddCategory from "@/components/addCategory/addCategory";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


export default()=>{

    let user = useSelector(function(store){
        return store.currentUser;
    })

    let [showCategory, setShowCategory] = useState(false);

    let [products, setProducts]  = useState([]);

    useEffect(()=>{

      
        product.getProducts().then((resp)=>{
            console.log(resp.data)
            setProducts(resp.data);
        })

    }, [])

    function addProduct(){

        axios.post('/api/product', {
            name:prompt("name"),
            price:+prompt("price"),
            location:prompt("location"),
            owner:user._id
        }).then(function(resp){
            if(resp.data.success){                
                toast.success("Save hogya")
            }
        })

    }

    return <div>

        {showCategory ? <AddCategory setShowCategory={setShowCategory}></AddCategory> : null}

        <button onClick={ evt => setShowCategory(true)}>Manage Categories</button>

        <table border={1}>

         <thead>
            <tr>
                <th>Product Name</th>
                <th>Open Balance</th>
            </tr>
         </thead>

            {
                products.map(function(product){
                    return <tr>
                        <td>{product.op_balance}</td>
                        <td>{product.product_name}</td>
                    </tr>
                })
            }
        </table>

    <button onClick={addProduct}>Add product</button>

    </div>

}