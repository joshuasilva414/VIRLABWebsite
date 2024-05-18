import { useState } from "react";
import Image from "next/image";
// import items from "../data/Items.js";
import { basePath } from "../next.config";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";

const items = {
  bootstrap: [
    {
      id: 1,
      title: "Photography",
      body: "Bootstrap Carousel Example",
      imageUrl: "/carouselImg/CarouselImageOne.png",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 2,
      title: "City Views",
      body: "Bootstrap Carousel Example",
      imageUrl: "/carouselImg/CarouselImageTwo.png",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 3,
      title: "Wild Life",
      body: "Bootstrap Carousel Example",
      imageUrl: "/carouselImg/CarouselImageThree.png",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 4,
      title: "Foods and Culture",
      body: "Bootstrap Carousel Example",
      imageUrl: "/carouselImg/CarouselImageFour.png",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 5,
      title: "Foods and Culture",
      body: "Bootstrap Carousel Example",
      imageUrl: "/carouselImg/CarouselImageFive.png",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 6,
      title: "Foods and Culture",
      body: "Bootstrap Carousel Example",
      imageUrl: "/carouselImg/CarouselImageSix.png",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
    {
      id: 7,
      title: "Foods and Culture",
      body: "Bootstrap Carousel Example",
      imageUrl: "/carouselImg/CarouselImageSeven.png",
      docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
    },
  ],
};

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div
      class="container"
      style={{
        width: "90vw",
        display: "flex",
        justifyContent: "center",
        padding: "75px",
      }}
    >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bootstrap.map((item) => (
          <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
            <Image
              className={styles.carouselImage}
              src={basePath + item.imageUrl}
              width={0}
              height={0}
              alt="slides"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
