import { User } from "@/models/user";
import { NextResponse } from "next/server";


export async function DELETE(req){

    console.log(req.nextUrl.searchParams.get("abc"))

    // /api/signup?d=10&city=fsd
    // query param se data uthana
    let id = req.nextUrl.searchParams.get("abc");//10
    // let id = req.nextUrl.searchParams.get("city");//fsd

    // mongoose m ID se record ko delete krna
    await User.findByIdAndDelete(id);

    // request ka answer back krna
    return NextResponse.json({success:true})

}

export async function PUT(req){

      // incoming data pakarna
      let data = await req.json();
      console.log(data);

     await User.findByIdAndUpdate(data._id, data);

    // request ka answer back krna
    return NextResponse.json({success:true})

}


export async function GET(req){

    let mereUsers = await User.find();

    // request ka answer back krna
    return NextResponse.json({users:mereUsers})

}

export async function POST(req){

    // incoming data pakarna
    let data = await req.json();
    console.log(data);

    let nyaUser = new User(data)    
    await nyaUser.save();

    console.log('code chal gya wa')

    // request ka answer back krna
    return NextResponse.json({
        success:true
    });

}