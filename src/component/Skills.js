import "../Css/Skills.css";
import cimage from "../images/icons8-c-programming-48.png";
import cplusimage from "../images/icons8-c++-48.png";
import java from "../images/icons8-java-48.png";
import python from "../images/icons8-python-48.png";
import html from "../images/icons8-html-5-48.png";
import css from "../images/icons8-css-48.png";
import javascript from "../images/icons8-javascript-48.png";
import word from "../images/word.png";
import excel from "../images/excel.png";
import ppt from "../images/powepoint.png";
import vscode from "../images/icons8-vs-code-48.png";
function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <div className="skill">
        <div className="tech">
          <h2>Tech </h2>
          <img src={cimage} alt="c language icon" />
          <br />
          <img src={cplusimage} alt="c++ language icon" />
          <br />
          <img src={java} alt="java language icon" />
          <br />
          <img src={python} alt="python language icon" />
          <br />
          <img src={html} alt="html language icon" />
          <br />
          <img src={css} alt="css language icon" />
          <br />
          <img src={javascript} alt="javascript language icon" />
        </div>
        <div className="tools">
          <h2>Tools</h2>
          <img src={word} alt="msword" />
          <br />
          <img src={excel} alt="msexcel" />
          <br />
          <img src={ppt} alt="powerpoint" />
          <br />
          <img src={vscode} alt="vscode" />
          
          <br />
        </div>
      </div>
    </>
  );
}
export default Skills;
