"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";


const fetcher = (...args)=>{
        return axios.get(...args).then(resp=>resp.data);
}

export default()=>{

    let {data, error, isLoading} = useSWR('https://fakestoreapi.com/products/1', fetcher);
    // let {data, error, isLoading} = useSWR('https://fakestoreapi.com/products/1', fetcher);

    return <div>

        {isLoading ? <img src ="1.png" /> :null}
        
        {error ? <h1>Oops, some error occurred</h1> :null}

        {data ? <div>
            <h1>{data.title}</h1>
            <h1>{data.price}</h1>
        </div> : null}

    </div>

}