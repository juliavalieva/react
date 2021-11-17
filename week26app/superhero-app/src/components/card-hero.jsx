import './card-hero.css';



function Hero({name, img, feature, description}) {
return (
<div className="hero-card">
<div className="hero-name">{name}</div>
<img className="hero-img" src={img} alt="superhero"/>
<div className="hero-feature">{feature}</div>
<div className="hero-description">{description}</div>
</div>
);
}



export default Hero;