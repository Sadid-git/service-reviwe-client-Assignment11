import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-4/5 mx-auto rounded-lg h-96 min-h-full">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://img.freepik.com/premium-photo/soccer-ball-national-iraq-flag-iraq-football-ball_559531-19887.jpg?w=2000"
          alt=""
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/89/870/355/ball-soccer-ball-soccer-football-wallpaper-preview.jpg"
          alt=""
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://digitalhub.fifa.com/transform/a7c6da3c-c8bf-4447-86e9-6d29117256f8/Conference-logo"
          alt=""
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;