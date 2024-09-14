import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import PageHeader from "../PageHeader/PageHeader";
import "./Portfolio.css";
import portfolioImages from "./PortfolioImages"; // Import the portfolio images data

const Header = styled.h2`
  text-align: center;
  color: azure;
  padding: 2%;
  margin-top: -5%;
  font-family: "Playfair Display", serif;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  &.modal-background {
    display: flex;
  }
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const ModalImage = styled.img`
  max-width: 900px;
  max-height: 900px;
`;

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
      // style={{ backgroundColor: `#0027b2` }}
    >
      <div id="portfolio">
        <PageHeader title={"Portfolio"} />
        <Header>Beispiele meiner Arbeiten:</Header>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
          transition={{ duration: 1, delay: 0.5 }} // Delay of 0.5 seconds
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {portfolioImages.map((image, index) => (
              <SwiperSlide key={index} onClick={() => openModal(image.src)}>
                <img src={image.src} alt={image.alt} />
                <p style={{ textAlign: "center" }}>{image.caption}</p>
                {image.subCaption && (
                  <p style={{ textAlign: "center", marginTop: "-3.5rem" }}>
                    {image.subCaption}
                  </p>
                )}
              </SwiperSlide>
            ))}

            <div className="slider-controller">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back">Zurück</ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward">Vor</ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </motion.div>

        {!isMobile && modalOpen && (
          <ModalBackground className="modal-background" onClick={closeModal}>
            <ModalContent>
              <ModalImage src={selectedImage} alt="modal_image" />
            </ModalContent>
          </ModalBackground>
        )}
      </div>
    </motion.div>
  );
};

export default Portfolio;
