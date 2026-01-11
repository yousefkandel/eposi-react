import { missions } from "../data/aboutData";

const MissionVision = () => {
  return (
    <div className="container">
    <div className="about-mission-vission-goal row row-20">
      {missions.map((item, i) => (
        <div className="col-lg-4 col-md-4 col-12" key={i}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MissionVision;
