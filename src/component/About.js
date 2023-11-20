import "../Css/About.css";
import image from "../images/myphoto.jpg";
function About() {
  return (
    <>
    <h1>About Me</h1>
    <div className="container">
      <div className="About">
        <p>
          Iam Navaneeth Kumar currently a third year CSE undergraduate persuing
          BE in Canara Engineering College seeking a position to enhance my
          skills and contribute to the professional organization i'm very much
          enthusistic to learn new things and help me to get better
        </p>
      </div>
      <div className="photo">
        <img src={image} className="pic" alt="myphoto"/>
      </div>
      </div>
    </>
  );
}
export default About;
