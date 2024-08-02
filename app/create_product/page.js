"use client";

import customer from "@/apis/customer";
import product from "@/apis/product";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default()=>{

    let [products, setProducts]  = useState([]);

    useEffect(()=>{

        customer.addCustomer({

        })

        product.getProducts().then((resp)=>{
            console.log(resp.data)
            setProducts(resp.data);
        })

    }, [])

    function addProduct(){

        product.addProduct({
            product_name:"OPPO A1",
            product_category:"66a25eaafaa8b0418b4cb561",
            stock_account:"6628cd62b6fe330e448d4631",
            op_balance:400,
            product_unit:"6638e6e1faa8b0418b4b1a62"
        }).then((resp)=>{
            
            console.log(resp.data)
            toast.success("product add hogya");
            


        }).catch(function(err){
            console.log(err);
        })

    }

    return <div>

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