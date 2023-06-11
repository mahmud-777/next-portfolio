import React from 'react'
import Project from './project'
import p1 from '../public/images/p1.jpg'
import p2 from '../public/images/p2.jpg'
import p3 from '../public/images/p3.jpg'
import p4 from '../public/images/p4.jpg'
import styles from './projects.module.css'

export default function Projects() {
  return (
    <div className={styles.container}>
        <Project className={styles.projects} 
           imgUrl={p1} 
           imgAlt={"Project 1"} 
           key={Math.random()} 
           heading="Travel Website" 
           text="Best Traveling website. Create a Beautiful Website for your Client"
        />{" "}

        <Project className={styles.projects} 
           imgUrl={p2} 
           imgAlt={"Project 2"} 
           key={Math.random()} 
           heading="Medical Website" 
           text="Best Medical website"
        />
        <Project className={styles.projects} 
           imgUrl={p3} 
           imgAlt={"Project 3"} 
           key={Math.random()} 
           heading="Online Website" 
           text="Best Online Shopping website"
        />
        <Project className={styles.projects} 
           imgUrl={p4} 
           imgAlt={"Project 3"} 
           key={Math.random()} 
           heading="Ecommerce Website" 
           text="Best E-commerce website"
        />

      
    </div>
  )
}
