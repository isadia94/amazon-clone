import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import img1 from '../public/img1.jpg'
import img2 from '../public/img2.jpg'
import img3 from '../public/img3.jpg'
import img4 from '../public/img4.jpg'

const Banner = () => {

    let settings ={
        autoPlay:true,
        infiniteLoop:true,
        showStatus:false,
        interval:5000,
        showIndicators:false,
        showThumbs:false
    }
  return (
    <Carousel {...settings}>
        <div className="relative h-[200px] sm:h-[600px]">
            <Image src={img1} layout="fill" objectFit="cover" objectPosition="center" priority={true}/>
        </div>
        <div className="relative h-[200px] sm:h-[600px]">
        <Image src={img2} layout="fill" objectFit="cover" objectPosition="center" priority={true}/>
        </div>
        <div className="relative h-[200px] sm:h-[600px]">
        <Image src={img3} layout="fill" objectFit="cover" objectPosition="center" priority={true}/>
        </div>
        <div className="relative h-[200px] sm:h-[600px]">
        <Image src={img4} layout="fill" objectFit="cover" objectPosition="bottom" priority={true}/>
        </div>
        
    </Carousel>
  )
}

export default Banner