"use client";
import axios from "axios";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default()=>{


    let [products, setProducts] = useState([]);


    let userKiID = useSelector(function(store){
        return store.currentUser._id;
    })

    useEffect(()=>{

    axios.get('/api/product?user='+userKiID).then(function(resp){
        setProducts(resp.data);
    })
        
    }, [])

    return <div>

        <table border="1">
            {
                products.map(function(product){
                    return <tr>
                        <td>
                            {product.name}
                            {product.price}
                            {product.location}
                        </td>
                    </tr>
                })
            }

        </table>

    </div>

}