import React from "react";
import Carousel from "../components/Carousel";

function Home() {
  document.title = "megStore-Home";

  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png ",
    "https://i.ibb.co/yg7BSdM/4.png",
  ]


  return (
    <>
      <div className="mr-1 ml-1">

        <div className="flex md:ml-20 justify-end lg:justify-between items-center">

          <h2 className="hidden lg:flex lg:text-7xl">Game of the Day!</h2>
          <div className="max-w-lg">
            <Carousel autoSlide={false}>
              {slides.map((s, index)=>(
                <img key={index} src={s}/>
              ))}
              </Carousel>
            </div>
        </div>
        </div>     
    </>
  );
}

export default Home;
