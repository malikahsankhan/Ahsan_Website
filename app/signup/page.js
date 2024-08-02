"use client";

import './login.css';
import { toast } from 'react-toastify';

import { useState } from 'react';
import {useRouter} from 'next/navigation'


import { useForm } from 'react-hook-form';
import auth from '@/apis/auth';
import { Provider, useDispatch } from 'react-redux';
import { setUser } from '@/store/auth';
import { meraStore } from '@/store/store';
import ReduxProvider from '@/components/reduxProvider/reduxProvider';
import axios from 'axios';

export default()=>{

  return <ReduxProvider>
            <Login></Login>
        </ReduxProvider>

}
  
 function Login(){

  let dispatch = useDispatch();
  let meraRoute = useRouter()

  let [users, setUsers] = useState([])
  
  let {register, handleSubmit, formState:{errors}} = useForm();

  function signUpKardo(data){

     axios.post('/api/signup', data) .then(function(resp){
      console.log(resp.data);
      if(resp.data.success){
        toast.success("signup successfully")
      }
      // localStorage.setItem('token', resp.data.token)
    })

    // users.push(data);
    // setUsers([...users])


    // toast.success("login hogya wa")
    // toast.error("login hogya wa") 
    // toast.warn("login hogya wa")
    // toast.info("login hogya wa")

  }


    return <div className="wrapper fadeInDown">
    <div id="formContent">
      {/* Tabs Titles */}
      {/* Icon */}
      <div className="fadeIn first">
        <img style={{height:"80px", width:"80px"}}
          src="data:image/png;base64,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"
          id="icon"
          alt="User Icon"
        />
      </div>
      {/* Login Form */}
      <form onSubmit={handleSubmit(signUpKardo)}>
        <input
                          //        yahan single validation h
          {...register('user_email', {required:true})}
          type="text"
          id="login"
          className="fadeIn second"          
          placeholder="login"
        />
        {/* single validation per error show krna */}
        {/* {errors.user_email ? <div style={ {color:'red'} }>This field is required</div> :null} */}
        
        {/* multiple validations per error */}
        {errors.user_email && errors.user_email.type == "required" ? <div style={ {color:'red'} }>This field is required</div> :null}
        {errors.user_email && errors.user_email.type == "pattern" ? <div style={ {color:'red'} }>Please enter a valid email</div> :null}
        {errors.user_email && errors.user_email.type == "validate" ? <div style={ {color:'red'} }>2 emails already hogyin</div> :null}
        
        <input
                                          // yahan multiple validations h
          {...register('user_password', {required:true, minLength:6})}
          type="text"
          id="password"
          className="fadeIn third"          
          placeholder="password"
        />
        {/* multiple validations case m type bhi check krni hogi */}
        {errors.user_password && errors.user_password.type =="required" ? <div style={ {color:'red'} }>This field is required</div> :null }
        {errors.user_password && errors.user_password.type =="minLength" ? <div style={ {color:'red'} }>Please enter atleast 6 letters</div> :null }
        

        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
      </form>
      {/* Remind Passowrd */}
      <div id="formFooter">
        <a className="underlineHover" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
    <table>
      {
        users.map((user)=>{
          return <tr>
            <td>{user.user_name}</td>
            <td>{user.user_email}</td>
            <td>{user.user_password}</td>
          </tr>
        })
      }
      </table>
  </div>
  

}