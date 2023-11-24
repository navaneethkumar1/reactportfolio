
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Qualification from './Qualification'
import '../Css/Home.css';
import Certification from './Certification';
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
    </>
  );
}
export default Home;
