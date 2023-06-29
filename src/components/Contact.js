import '../App.css';
import ConCard from './ContactCard';
import { ImGithub, ImLinkedin, ImInstagram } from "react-icons/im";
import { BsGoogle } from "react-icons/bs";




const Contact = () => {
    return (
        <div className="containPage2">
            <div className="wrapper2">
                <ConCard ContactSite="GitHub" icoName={<ImGithub/>} lien="https://github.com/hichemmezemate" />
                <ConCard ContactSite="LinkedIn" icoName={<ImLinkedin/>} lien="https://www.linkedin.com/in/hichem-mezemate/" />
                <ConCard ContactSite="Instagram" icoName={<ImInstagram/>} lien="https://www.instagram.com/hichem.mezemate/"/>
                <ConCard ContactSite="Google" icoName={<BsGoogle/>} lien="mailto:hichem.mezemate@gmail.com" />                  
            </div>
        </div>
    )
}

export default Contact;