import styles from './Home.module.css'
import { ImageSlider } from '../../Components/imageSlider/ImageSlider';
import { AboutUs } from '../AboutUs/AboutUs';
import { Pricing } from '../Pricing/Pricing';

export function Home() {


    return (
        <div>
            {/* <h1>Home Page</h1> */}
            <ImageSlider />
            <AboutUs />
            <Pricing />
        </div>
    );
}