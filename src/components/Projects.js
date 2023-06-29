import "../App.css";
import ProjectCard from './ProjCard';
import movieBr from "./movieBr.PNG";
import theClock from "./theClock.PNG";
import toDo from "./ToDo.PNG";
import plate from "./plateforme.png";

const Projects = () => {
    
    let MovieDesc = "A Search engine for movies where you can find all the movies and some infos about them. Stack used: React.js/Node.js/HTML/CSS/Bootstrap"
    let EcommDesc = "An E-commerce interface that contains 2 parts, one for the administrator where you can add product ..etc, the other is for the user where he can order. Stack used: Python/Django/HTML/SQL"
    let ToDoApp = "An TO-DO App where you can: add and delete your tasks. Stack used: HTML/CSS/Javascript"
    let clockk = "A Clock app with Arabic Numbers. Stack used: HTML/CSS/Javascript "
    return (
        <div className="containPage3">
            <div className="cards">
                <ProjectCard ProjectName="Movie Browser" ProjectDesc={MovieDesc} Imag={movieBr} link="https://hichemmezemate.github.io/moviebrowser/"/>
                <ProjectCard ProjectName="The Clock" ProjectDesc={clockk} Imag={theClock} link="https://hichemmezemate.github.io/The-Clock/"/>
                <ProjectCard ProjectName="To-Do App" ProjectDesc={ToDoApp} Imag={toDo} link="https://hichemmezemate.github.io/toDoApp/"/>
                <ProjectCard ProjectName="E-commerce Interface" ProjectDesc={EcommDesc} Imag={plate} link="https://github.com/hichemmezemate/Plateforme-d-achat"/>


            </div>
        </div>
    )
}


export default Projects;