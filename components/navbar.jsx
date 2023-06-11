
import React from 'react'
import Image from 'next/image'  
import Logo from '../public/images/logo.png'
import Github from "../public/images/github.png"
import Insta from "../public/images/insta.png"
import FB from "../public/images/fb.png"
import Link from 'next/link'
import styles from "./navbar.module.css"

  export default function Navbar() {
    return (
      <div className={styles.navbar}>
        <div className={styles.container}>
            <div className={styles.first_container}>
            <ul>
                <li>Project</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className={styles.second_container}>

               <Link href="/">
                 <Image src={Logo} alt='navlogo' /> 
               </Link>
            </div>
            <div className={styles.third_container}>
              <Link href="https://github.com">
                 <Image className={styles.socialImg} src={Github} alt='github logo' />{" "}
              </Link>
              <Link href="https://google.com">
                 <Image className={styles.socialImg} src={Insta} alt='insta logo' />{" "}
              </Link>
              <Link href="https://facebook.com">
                 <Image className={styles.socialImg} src={FB} alt='facebook logo' />{" "}
              </Link>
            </div>

        </div>
      </div>
    )
  }
  