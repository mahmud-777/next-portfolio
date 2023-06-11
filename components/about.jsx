import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import man from '../public/images/man.png'
import down from '../public/images/down.png'
export default function About() {

  return (
    <div className={styles.container}>
        <div className={styles.img_sec}>
            <div className={styles.img_container}>
                <Image src={man} alt='avatar' />
            </div>
            <div className={styles.btn_container}>
                Download
                <Image style={{ marginTop:"-2px", marginLeft:"20px"}} src={down} alt='download' />
                
            </div>
        </div>
        <div className={styles.text_sec}>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed architecto dolore voluptates dolores repellendus quam sunt corporis nobis deleniti iusto perspiciatis iste ex aut quaerat animi aliquid cupiditate ipsum illo esse, reprehenderit officia. Amet numquam nostrum doloremque, expedita maxime cupiditate similique quisquam ipsam vel assumenda dolorem natus facilis est illum nihil iste officia eos aliquam incidunt error, veniam quas autem delectus ad. Optio doloribus minus aliquid expedita. Totam accusantium explicabo nulla accusamus mollitia soluta, ipsam odit optio iste quas tenetur voluptates numquam dolor a hic nemo amet molestias autem? Assumenda fugit incidunt aliquid eius dolor eos asperiores expedita fuga tempora.

            </p>            
        </div>      
    </div>
  )
}
