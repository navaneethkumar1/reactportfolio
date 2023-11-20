
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Qualification from './Qualification';
import Footer from './Footer';
import '../Css/Home.css';
function Home() {
  return (
    <>
    <div className="Aboutme">
        <h3>Hi,
          <br/>
           I'm Navaneeth Kumar<br/>
           BE in CSE<br/>
           CEC<br/>
           Manglore</h3>
      </div>
      <About/>
      <Skills/>
      <Qualification/>
      <Contact/>
      <Footer/>
    </>
  );
}
export default Home;
