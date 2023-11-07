import { useState } from "react";
import { items } from "../public/Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div class="container" style={{width: '90vw', display: 'flex', justifyContent: 'center', padding: '75px'}}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {bootstrap.map((item) => (
                <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
                <img src={item.imageUrl} alt="slides" />
                
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
    );
    
    
}
