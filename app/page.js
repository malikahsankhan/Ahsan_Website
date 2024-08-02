import Home from "@/components/home/home";

function Test({name, city, children}){

  console.log(children);

  return <div>
    <h1>asdad {name} {city}</h1>
    {
      children
    }
  </div>

}

export default()=>{

  return <div>
    <h1>AHSAN Ecommerce Website</h1>
      <Home></Home>
    </div>

}