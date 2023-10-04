import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Home = () => {
  return (
    <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        src={require('../images/bvs.webp')}
        alt='asdas'
      >
        <h5 className="text-dark">Batman ve Superman: Adaletin Şafağı</h5>
        <p className="text-dark">2016 ‧ Aksiyon/Macera ‧ 2 saat 31 dakika</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        src={require('../images/mos.webp')}
        alt='...'
      >
        <h5>Çelik Adam</h5>
        <p>2013 ‧ Aksiyon/Macera ‧ 2 saat 23 dakika</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        src={require('../images/batman.webp')}
        alt='...'
      >
        <h5>The Batman</h5>
        <p>2022 ‧ Aksiyon/Macera ‧ 2 saat 56 dakika</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Home;
