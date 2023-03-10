import HeroImage from "../../../assets/hero_image_1140.jpg";
import SearchBar from "./SearchBar";
import './Hero.css';

const Hero = () => {
  return(
    <div className="hero">
      <img src={HeroImage} alt="" />
      <SearchBar />
      <div className="hero-body-container">
        <h1 className="hero-body-header">Find your new best friend</h1>
        <div className="hero-body-message">Browse pets from my network of 11 cats and 17 dogs</div>
      </div>
    </div>
  )
}

export default Hero;