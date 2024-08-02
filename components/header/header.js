"use client";
import Link from 'next/link';
import './header.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { meraStore } from '@/store/store';
import Head from 'next/head';
import { addUser, removeUser, setUser, updateUser } from '@/store/auth';


// export default()=>{

//   return <Provider store={meraStore}>    
//           <Header></Header>
//     </Provider>

// }

export default function Header() {
  
  // store m data bhijwana
  let dispatch = useDispatch();

  // store se mngwana keliye useSelector()
  let someName = useSelector(function(store){
    return store.currentUser
  });

  let mereUsers = useSelector(function(store){
    return store.users
  })

  return <nav class="navbar navbar-expand-lg bg-body-tertiary">
     
    <button onClick={function(){

      let data =  prompt("enter data")

      dispatch(addUser(5))

    }}>send data</button>

      <table>
        {
          mereUsers.map(function(user, index){
              return <tr key={index}>
                <td>{user}</td>
                <td>
                   <button onClick={function(){

                    dispatch(removeUser(index));

                   }}>Delete User</button>
                </td>
                <td>
                   <button onClick={function(){

                    let newName = prompt('enter new name')

                    dispatch(updateUser({
                      newName,
                      index
                    }));

                   }}>Delete User</button>
                </td>
              </tr>

          })
        }

      </table>
     
      <div class="container-fluid">
        
        <a class="navbar-brand" href="#"><b><i>AHSAN</i></b></a>
        {someName._id ? <span>Welcome, <b>{someName.user_email}</b></span> : null}

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" href="/">Home</Link>

            </li>
            {!someName._id ?<li class="nav-item">
              <Link class="nav-link" href="/login">Login</Link>
            </li>: null}

            {someName._id ?<li class="nav-item">
              <Link class="nav-link" href="/create-product">Create Product</Link>
            </li>: null}
            {someName._id ?<li class="nav-item">
              <Link class="nav-link" href="/my-products">My Products</Link>
            </li>: null}

            {someName._id ?<li class="nav-item">
              <Link class="nav-link" href="/users">Users</Link>
            </li>: null}
            
            {someName._id ?<li class="nav-item">
              <Link onClick={function(){
                dispatch(setUser({}))
              }} class="nav-link" href="/login">logout</Link>
            </li> : null}


            <li class="nav-item">
              <Link class="nav-link" href="/signup">Signup</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div> 
    </nav>
  
}