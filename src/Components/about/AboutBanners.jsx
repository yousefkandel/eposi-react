const banners = ["banner7.webp", "banner8.webp", "banner9.webp"];

const AboutBanners = () => {
  return (
    <div className="container ">
    <div className="row row-10 ">
      {banners.map((img, i) => (
        <div className="col-md-4" key={i}>
          <div className="single-banner">
            <img src={`assets/img/banners/${img}`} className="img-fluid" alt="" />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AboutBanners;
