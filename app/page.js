import Banner from '@/components/banner'
import Navbar from '@/components/navbar'
import Projects from '@/components/projects'
import styles from "./page.module.css"
import About from '@/components/about'



export default function Home() {
  return (
    <div>      
      <Navbar />
      <Banner />
      <h1 className={styles.title}>Project</h1>
      <Projects />
      <h1 className={styles.about_title}>About</h1>
      <About />

    </div>
  )
}
