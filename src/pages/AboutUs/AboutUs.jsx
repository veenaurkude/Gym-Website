import React from 'react'
import styles from './AboutUs.module.css'
import { Videos } from '../../Components/video/Videos' 
import video1 from '../../Components/video/video1.mp4'
import video3 from '../../Components/video/video3.mp4'

export function AboutUs() {

  return (
    <div >
      <div className={styles.aboutus}>
        <div className={styles.left}>

          <Videos video={video1}/>

        </div>

        <div className={styles.right}>

          <h1> About Us</h1>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus omnis numquam quod,
          ratione aperiam aut veniam delectus est fuga nobis nam ab officiis velit quo! Maiores quisquam vitae numquam? <br />
          <button className={styles.btn} onClick={() => alert('Clicked for AboutUs Section')}>Learn More</button>
        </div>
      </div>


      <div className={styles.aboutus}>

        <div className={styles.right}>

          <h1>Why to Choose Us</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quidem perspiciatis dolores provident tempore dolorem
          omnis pariatur,mollitia, sint qui natus distinctio laudantium placeat? Voluptatibus in adipisci facilis quam similique?

        </div>

        <div className={styles.left}>

          <Videos video={video3}/>

        </div>

      </div>

    </div>
  )
}

