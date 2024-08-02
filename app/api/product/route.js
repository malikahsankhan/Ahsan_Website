import { Product } from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(req){

    let userKiID = req.nextUrl.searchParams.get("user");

    // Product.find() sab record le ao
    // Product.find({city:'fsd'}) siraf wo product jinka city fsd ho
    // Product.find({city:'fsd', uni:'gc'}) siraf wo product jinka city fsd ho

    let products;
    

    if(userKiID){
         products = await Product.find({owner:userKiID});
    }else{
         products = await Product.find();
    }

    return NextResponse.json(products)

}


export async function POST(req){

    let data = await req.json();

    let product = new Product(data);
    await product.save();

    return NextResponse.json({
        success:true
    })

}