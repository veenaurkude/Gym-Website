import styles from './ImageSlider.module.css';
import { useEffect, useState } from 'react';
import { Footer } from '../footer/Footer';

export function ImageSlider() {

    const imgArr = [
        {
          url: 'https://wallpapercave.com/wp/wp3018787.jpg',
          text: 'BUILD YOUR BODY - TRANSFORM YOUR LIFE'
        },
        {
          url: 'https://mcdn.wallpapersafari.com/medium/3/21/9MqoKp.jpg',
          text: 'ARE U READY TO GET FIT, STRONG AND MOTIVATED'
        },
        {
          url: 'https://c4.wallpaperflare.com/wallpaper/76/537/146/fitness-muscle-muscle-rod-wallpaper-preview.jpg',
          text: 'WORKOUT YOUR WAY'
        },
        {
          url: 'https://tpc.googlesyndication.com/daca_images/simgad/9213951888735746069',
          text: 'Get Ready to BURN'
        }
      ];
      

    const [image, setImage] = useState(imgArr[0]);
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
          // Increment the current index
          setIndex(currentIndex => (currentIndex + 1) % imgArr.length);
        }, 3000);

        return () => clearInterval(intervalId);
      }, [index, imgArr.length]);

    return (
        <div className={styles.imgSlider}>
            <img className={styles.img} src={imgArr[index].url} alt='gym'/>
            <div className={styles.imgText}>
                <h2>{imgArr[index].text}</h2>
            </div>
            <Footer />
        </div>
    );
}