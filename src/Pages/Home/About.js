import React from "react";
import "./About.css";

export default function About() {
  var randomColor = require("randomcolor");
  var color = randomColor();
  randomColor({
    luminosity: "dark",
    format: "rgba",
  });
  return (
    <div class="hero  bg-indigo-100 justify-center shadow-xl opacity-85  ">
      <div class="hero-content flex-col lg:flex-row justify-center ml-28">
        {/* <img src="https://placeimg.com/260/400/arch" class="max-w-xl rounded-lg shadow-2xl" /> */}

        <div className="heading ">
          <h1 class="text-5xl font-bold justify-center text-teal-400">
            Know More!
          </h1>
          <h2 className="text-2xl ">
            We are committed to providing best services to our client
          </h2>
          <p class="py-6">
            Resume builder is one of the best website for create your unique and
            favoulous cv.Resume builder is one of the best website for create
            your unique and favoulous cv. Resume builder is one of the best
            website for create your unique and favoulous cv
          </p>
          <button class="btn bg-blue-600 button get">Get Started</button>
        </div>
      </div>
    </div>
  );
}
