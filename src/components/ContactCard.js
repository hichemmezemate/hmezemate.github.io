import '../App.css';
import { Link } from 'react-router-dom';

let ConCard = ({ContactSite, icoName, lien}) => {
    return (
        <div className='ContCard'>
            <Link to={lien} target="_blank" rel="noreferrer">
                <h1>{ContactSite}</h1>
                <div className='iconN'>
                    {icoName}
                </div>
            </Link>
        </div>
    )
}

export default ConCard;