import React from 'react'
import styles from "./project.module.css"
import Image from 'next/image';
import Link from 'next/link';


export default function Project({imgUrl, imgAlt, heading, text}) {
  return (
    <div>
      
      <div className={styles.container}>
        <div className={styles.img_container}>
            <Image width={500} height={250} src={imgUrl} alt={imgAlt} />            
        </div>
        <div className={styles.text_container}>
          <h2>{heading}</h2>
          <p>{ text }</p>
          <Link href="https://github.com">
             <button className={styles.btn}>Source Code</button>  
          </Link>
          <Link href="https://vercel.com">
            {" "}
             <button className={styles.btn}>View </button>          
          </Link>

        </div>
      </div>
    </div>
  )
}
