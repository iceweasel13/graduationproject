import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import image1 from "../../pictures/resim1.jpeg";
import image2 from "../../pictures/resim2.jpg";
import image3 from "../../pictures/resim3.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreProjectsClick = () => {
    navigate("/projects");
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <h1 className="text-center text-white mt-20 font-extrabold text-5xl">
            Build future together
          </h1>
          <p className="my-10 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="carousel-container w-2/4 h-2/4">
          <Carousel
            showArrows
            showStatus={false}
            showThumbs={false}
            swipeable
            dynamicHeight
            emulateTouch
          >
            <div>
              <img src={image1} alt="Carousel Image 1" />
            </div>
            <div>
              <img src={image2} alt="Carousel Image 2" />
            </div>
            <div>
              <img src={image3} alt="Carousel Image 3" />
            </div>
          </Carousel>
        </div>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <button
            className="bg-pink-700 rounded-2xl px-5 items-center my-20 h-12"
            onClick={handleExploreProjectsClick}
          >
            Explore Projects
            <i className="fa-solid fa-right-long ml-2"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
