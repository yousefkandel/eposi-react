import { features } from "../data/aboutData";

const Features = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="about-section-title col-12">
        <h3>
          YOU CAN CHOOSE US BECAUSE <br /> WE ALWAYS PROVIDE IMPORTANCE...
        </h3>
        <p>Eposi provide how all this mistaken idea...</p>
      </div>

      <div className="about-feature col-md-7 col-12">
        <div className="row">
          {features.map((title, i) => (
            <div className="col-md-6 col-12" key={i}>
              <h4>{title}</h4>
              <p>Eposi provide how all this mistaken dea...</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-feature-banner col-md-5 col-12">
        <img src="assets/img/banners/slider-banner2.webp" className="img-fluid" alt="" />
      </div>
    </div>
    </div>
  );
};

export default Features;
