import "../App.css";



const ProjectCard = ({ProjectName, ProjectDesc, Imag, link}) => {
    return (
        <div className="projCard">
                <div className="overlayImage"></div>
                <h5>{ProjectName}</h5>
                <p>{ProjectDesc}</p>
                <img src={Imag} alt="projectImage"/>
                <a class="btn btn-primary" href={link} role="button" target="_blank" rel="noreferrer">Show Details</a>
        </div>
    )
}
export default ProjectCard;