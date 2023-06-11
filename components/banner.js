import styles from './banner.module.css'
import React from 'react'
import Image from 'next/image'
import myImg from '../public/images/breathtaking.jpg'
import nextLogo from '../public/images/next.png'
import sassLogo from '../public/images/sass.png'
import reactLogo from '../public/images/react.png'
import jsLogo from '../public/images/js.png'

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.first_container}>
        <Image src={myImg} alt='myImage logo' width={200} height={300} />
      </div>
      <div className={styles.second_container}>
        <h1>Full Stack Web Developer</h1>
        <div className={styles.img_container}>
             <Image src={nextLogo} alt='next logo' />
             <Image src={sassLogo} alt='sass logo' />
             <Image style={{ marginTop: "-10px"}} src={jsLogo} alt='js logo' />
             <Image src={reactLogo} alt='react logo' />

        </div>
        <div className={styles.txt_container}>
            Frontend Creation Is An Art. 
            Frontend I Used JavaScript,
            ReactJS, NEXTJS, REDUX, SASS
            Backend I Used Nodejs Expressjs, MongoDB
        </div>
      </div>

    </div>
  )
}
