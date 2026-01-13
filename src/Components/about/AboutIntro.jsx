import aboutImg from "../../assets/img/banners/img2-middle-eposi1.webp";

const AboutIntro = () => {
  return (
    <div className="container">
    <div className="about-top-content-wrapper ">
      <div className="row row-30">
        <div className="col-lg-6">
          <div className="about-image">
            <img src={aboutImg} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="about-content col-lg-6">
          <h1>WELCOME TO <span>Eposi.</span></h1>
          <p className="mb-3">
            Eposi provide how all this mistaken idea of denouncing pleasure...
          </p>

          <h4>WIN BEST ONLINE SHOP AT 2019</h4>
          <p>
            Eposi provide how all this mistaken idea of denouncing pleasure...
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutIntro;
