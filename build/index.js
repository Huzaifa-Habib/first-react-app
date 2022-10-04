import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import image from "./my.jpg";

function Main() {
  return (
    <div className="main">
      <div className="intro-div">
        <div className="my-image">
          <img src={image} height="200" width="200" className="image" />
        </div>
        <div className="my-intro">
          <h1>Huzaifa habib</h1>
          <h3>Web Developer</h3>
        </div>
      </div>
      <div className="about-sec">
        <div className="introduction">
          <h1>About me</h1>
          <p>
            My name is Huzaifa Habib. I am currently learning the course of Web
            and Mobile Application at{" "}
            <strong>Sayllani Institute of Technology</strong>. and I am also
            doing diploma at Aligarh Institute Of Technology which I am able to
            complete in a year.{" "}
          </p>
        </div>

        <div className="contact">
          <div className="age">
            <p>Age: 19</p>
          </div>
          <div className="Email">
            <p>Email: huzaifahabib098@gmail.com</p>
          </div>

          <div className="number">
            <p>Phone: 03322048099</p>
          </div>

          <div className="address">
            <p>Address: H.no:R-41,Al-Muslim Society Scheme 33, Karachi</p>
          </div>
          <div className="exp">
            <p>Work Experience: None</p>
          </div>
          <div className="education">
            <p>Last Qualification: Matric</p>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="tech">
          <h1>Technical Skills</h1>
          <ul>
            <li>HTML</li>
            <li>Css</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="pro">
          <h1>Professional Skills</h1>
          <ul>
            <li>Team Work</li>
            <li>Work Ethic</li>
            <li>Time Management</li>
            <li>Attention to deatils</li>
          </ul>

          <h3>Languages:</h3>
          <ul>
            <li>English</li>
            <li>Urdu</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.querySelector("#root"));
