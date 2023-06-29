import "../App.css";
import {
  IoLogoReact,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoCss3,
} from "react-icons/io5";
import nodejsLogo from "../components/nodejs.svg"
import pythonLogo from "../components/python.svg"
import django from "../components/django.svg"
import postgresql from "../components/devina.svg"
import mySVGCode from "../components/download.svg";

const Home = () => {
  return (
    <div className="containPage">
      <div className="Cardd">
        <div className="box1">
          Welcome to my portfolio website! I'm a passionate full-stack developer. With a good foundation in both front-end and back-end development, I bring creative and functional solutions to the digital world.
          <br />
          <br />
          <div className="box3">What I Do ? :</div>
          <p>FrontEnd:</p>
          <div className="front">
            <IoLogoHtml5 color="#e54d26"/>
            <IoLogoCss3 color="#2299f8"/>
            <IoLogoJavascript color="#f0db4e"/>
            <IoLogoReact color="#60d9fb"/>
          </div>
          <p>BackEnd:</p>
          <div className="back">
            <img src={nodejsLogo} alt="nodeJS" />
            <img src={pythonLogo} alt="python" />
            <img src={django} alt="django" />
            <img src={postgresql} alt="postgresql" />

            
          </div>
        </div>
      </div>
      <div className="Card2">
        <div className="box2">
            <img src={mySVGCode} alt="ff" className="codingImage"/>
            <p>
            I am excited to connect with fellow developers, clients, and collaborators to explore new opportunities and contribute to innovative projects. Feel free to explore my portfolio and get in touch with me to discuss how we can collaborate and bring your ideas to life. Let's create something extraordinary together!
            </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
