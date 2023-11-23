
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Qualification from './Qualification';
import Footer from './Footer';
import '../Css/Home.css';
import Certification from './Skill1';
function Home() {
  return (
    <>
    <div className="Aboutme">
        <p>Hi,
          <br/>
           I'm Navaneeth Kumar<br/>
           BE in CSE<br/>
        </p>
      </div>
      <About/>
      <Skills/>
      <Certification/>
      <Qualification/>
      <Contact/>
      <Footer/>
    </>
  );
}
export default Home;
