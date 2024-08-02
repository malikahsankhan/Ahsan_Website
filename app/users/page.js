"use client";
import axios from "axios";
// import { useSearchParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (...args)=> axios.get(...args).then(resp=>resp.data)

export default()=>{

    // let city = useSearchParams().get('city');
    // let name =useSearchParams().get('name');

    let {data, error, isLoading} = useSWR('/api/signup', fetcher)


    return <div>
        {/* <h1>{ city} {name}</h1> */}
       {data ? <table>
            {
                data.users.map(function(user){
                    return <tr>
                        <td>{user.user_email}</td>
                        <td>{user.user_password}</td>
                        <td>
                            <button onClick={function(){
                             
                                
                            //  since delete aur get wagera m body nahi 
                            // jsakti, so agar hum koi data backend
                            // per send karna chahte to query param
                            // use kar sakte hen
                            // for exmaple
                            // api/signup?a=10?b=10 (yahan humne 2 query params bnye, a aur b)

                             axios.delete('/api/signup?abc='+user._id)

                            }}>Delete</button>
                        </td>
                        <td>
                            <button onClick={function(){
                             
                             user.user_email =  prompt("enter new email");

                             axios.put('/api/signup?a=10', user)

                            }}>Update</button>
                        </td>
                    </tr>
                })
            }
 
        </table> : null }
    </div>

}