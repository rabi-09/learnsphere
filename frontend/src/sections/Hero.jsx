import { ThreeDMarquee } from "../components/3d-marquee";
import { HeroText } from "../components/HeroText";

import img1 from '../assets/hero-images/study-hero-1.jpg';
import img2 from '../assets/hero-images/study-hero-2.jpg';
import img3 from '../assets/hero-images/study-hero-3.jpg';
import img4 from '../assets/hero-images/study-hero-4.jpg';
import img5 from '../assets/hero-images/study-hero-5.jpg';
import img6 from '../assets/hero-images/study-hero-6.jpg';
import img7 from '../assets/hero-images/study-hero-7.jpg';
import img8 from '../assets/hero-images/study-hero-8.jpg';
import img9 from '../assets/hero-images/study-hero-9.jpg';
import img10 from '../assets/hero-images/study-hero-10.jpg';
import img11 from '../assets/hero-images/study-hero-11.jpg';
import img12 from '../assets/hero-images/study-hero-12.jpg';
import img13 from '../assets/hero-images/study-hero-13.jpg';
import img14 from '../assets/hero-images/study-hero-14.jpg';
import img15 from '../assets/hero-images/study-hero-15.jpg';
import img16 from '../assets/hero-images/study-hero-16.jpg';
import img17 from '../assets/hero-images/study-hero-17.jpg';
import img18 from '../assets/hero-images/study-hero-18.jpg';
import img19 from '../assets/hero-images/study-hero-19.jpg';
import img20 from '../assets/hero-images/study-hero-20.jpg';
import img21 from '../assets/hero-images/study-hero-21.jpg';
import img22 from '../assets/hero-images/study-hero-22.jpg';
import img23 from '../assets/hero-images/study-hero-23.jpg';
import img24 from '../assets/hero-images/study-hero-24.jpg';
import img25 from '../assets/hero-images/study-hero-25.jpg';
import img26 from '../assets/hero-images/study-hero-26.jpg';
import img27 from '../assets/hero-images/study-hero-27.jpg';
import img28 from '../assets/hero-images/study-hero-28.jpg';
import img29 from '../assets/hero-images/study-hero-29.jpg';
import img30 from '../assets/hero-images/study-hero-30.jpg';

export default function Hero() {
    const images = [
        img1, img2, img3, img4, img5,
        img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15,
        img16, img17, img18, img19, img20,
        img21, img22, img23, img24, img25,
        img26, img27, img28, img29, img30,
        img16, img17, 
    ];


    return (
        <div
            className="relative mx-auto my-5 flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-3xl">

            <HeroText />

            {/* overlay */}
            <div
                className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
            <ThreeDMarquee
                className="pointer-events-none absolute inset-0 h-full w-full"
                images={images} />
        </div>
    );
}
