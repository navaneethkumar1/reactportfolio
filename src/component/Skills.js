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
          <h2>Technical </h2>
          <img src={cimage} alt="c language icon" />
          <p>C</p>
          <br />
          <img src={cplusimage} alt="c++ language icon" />
          <p>C++</p>
          <br />
          <img src={java} alt="java language icon" />
          <p>Java</p>
          <br />
          <img src={python} alt="python language icon" />
          <p>python</p>
          <br />
          <img src={html} alt="html language icon" />
          <p>html</p>
          <br />
          <img src={css} alt="css language icon" />
          <p>CSS</p>
          <br />
          <img src={javascript} alt="javascript language icon" />
          <p>JavaScript</p>
        </div>
        <div className="tools">
          <h2>Tools</h2>
          <img src={word} alt="msword" />
          <p>MS Word</p>
          <br />
          <img src={excel} alt="msexcel" />
          <p>MS Excel</p>
          <br />
          <img src={ppt} alt="powerpoint" />
          <p>MS PowerPoint</p>
          <br />
          <img src={vscode} alt="vscode" />
          <p>VS Code</p>
          <br />
        </div>
      </div>
    </>
  );
}
export default Skills;
