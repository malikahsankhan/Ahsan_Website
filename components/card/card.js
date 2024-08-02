"use client";
import { useRouter } from 'next/navigation';
import styles from './card.module.css';
import Link from 'next/link';

export default function Card({abc, a2}){

  let router = useRouter();

  
 
    return <div onClick={function(){

      router.push("/product-details/"+abc.id)


    }} href={"/product-details/"+abc.id}> 
        <div className={styles.card}>
        <img src={abc.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{abc.name}</h5>
          <p className="card-text">
            {abc.price}
          </p>
          <button onClick={function(evt){
            evt.stopPropagation();

            a2(abc.id)

          }}>Delete</button>
        </div>
      </div>
  </div>
  

}