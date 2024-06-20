/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from "react-icons/fa";
import Tugolbay from "../../assets/Tugolbay1.jpeg";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <section className="home section grid">
      <img src={Tugolbay} alt="" className="home__img" />
      <div className="home__data">
        <h1 className="home__title">
          <span>I'm Tugolbay Kasymbekov.</span>
          <p>Frontend Developer</p>
        </h1>
        <div className="button-block">
          <Link to="/about" className="button-home">
            More about me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};
