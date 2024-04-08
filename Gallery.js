import React, { useRef } from 'react';
import { checkZodiacSign } from '../utils/zodiacUtils'; // Import your utility function

const GallerySectionComponent = () => {
  const zodiacSignRef = useRef(null);
  const resultRef = useRef(null);

  const filterGallery = (filterValue) => {
    console.log('Filtering gallery by:', filterValue);
  };

  const handleZodiacSubmit = () => {
    checkZodiacSign(zodiacSignRef.current.value, resultRef);
  };

  return (
    <section id="gallery-section">
      <h2>VIEW ALL CHARACTER GOODIES</h2>
      <div className="filter-options">
        <span>Filter By:</span>
        <button onClick={() => filterGallery('all')} className="active">View All Characters</button>
        <button onClick={() => filterGallery('aggretsuko')}>Aggretsuko</button>
        <button onClick={() => filterGallery('badtzmaru')}>Badtz-Maru</button>
        <button onClick={() => filterGallery('chococat')}>Chococat</button>
        <button onClick={() => filterGallery('cinnamoroll')}>Cinnamoroll</button>
        <button onClick={() => filterGallery('hellokitty')}>Hello Kitty</button>
        <button onClick={() => filterGallery('keroppi')}>Keroppi</button>
        <button onClick={() => filterGallery('kuromi')}>Kuromi</button>
        <button onClick={() => filterGallery('littletwinstars')}>Little Twin Stars</button>
        <button onClick={() => filterGallery('mymelody')}>My Melody</button>
        <button onClick={() => filterGallery('pochacco')}>Pochacco</button>
        <button onClick={() => filterGallery('pompompurin')}>Pompompurin</button>
        <button onClick={() => filterGallery('tuxedosam')}>Tuxedosam</button>
      </div>

      <div className="gallery">
      <div className="gallery-item hellokitty"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987RA0-11-9-HK-FOTM-1500x2000-xs.png?c=00" alt="Hello Kitty" /></div>
          <div className="gallery-item mymelody"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987c62-010523-MyMelodyJAN_Social-KC-MushroomB-1500x2000-xs.png?c=00" alt="My Melody" /></div>
          <div className="gallery-item keroppi"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987VmG-6-26-KR-WALLPAPERS-Summer-1500x2000-xs.png?c=00" alt="Keroppi" /></div>
          <div className="gallery-item pompompurin"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987xNc-3-31-PN-B-1500x2000-s.png?c=00" alt="Pompompurin" /></div>
          <div className="gallery-item badtzmaru"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987I6l-6-1-XO-WALLPAPER-1500x2000-C-xs.png?c=00" alt="Badtz-Maru" /></div>
          <div className="gallery-item cinnamoroll"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987cbD-2-28-CN-WALLPAPER-Cafe-Pink-1500x2000-xs.png?c=00" alt="Cinnamoroll" /></div>
          <div className="gallery-item chococat"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987uNe-8-29-CO-Wallpaper-FOTM-1500x2000-rev-xs.png?c=00" alt="Chococat" /></div>
          <div className="gallery-item kuromi"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987et1-9-26-KU-WALLPAPER-Halloween-1500x2000-B-xs.png?c=00" alt="Kuromi" /></div>
          <div className="gallery-item littletwinstars"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987mV9-11-29-LTS-1500x2000-A-xs.png?c=00" alt="Little Twin Stars" /></div>
          <div className="gallery-item pochacco"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987T64-2-5-PC-WALLPAPER-1500x2000-B-xs.png?c=00" alt="Pochacco" /></div>
          <div className="gallery-item tuxedosam"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987WQm-8-2-TX-Wallpaper-1500x2000-A-xs.png?c=00" alt="Tuxedosam" /></div>
          <div className="gallery-item aggretsuko"><img src="https://storageciggallery.addons.business/15706/cig-cozy-gallery-8987qx1-9-5-AR-WALLPAPER-3-xs.png?c=00" alt="Aggretsuko" /></div>
      </div>
    </section>
  );
};

export default GallerySectionComponent;
