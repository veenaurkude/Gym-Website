import styles from './ImageSlider.module.css';
import { useState } from 'react';

export function ImageSlider() {

    const imgArr = ['https://wallpapercave.com/wp/wp3018787.jpg',
'https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg',
'https://c4.wallpaperflare.com/wallpaper/76/537/146/fitness-muscle-muscle-rod-wallpaper-preview.jpg']

    const [image, setImage] = useState(imgArr[0]);
    const [index, setIndex] = useState(0);

//     setInterval( ()=>{
//         setImage(imgArr[index+1])
//         setIndex(index+1)
// },3000)

    function handleIndex() {
        // setIndex(index+1)
    }

    

    return (
        <div>
            <img src={image} alt='gym'/>
            <button onClick={handleIndex}>click</button>
        </div>
    );
}