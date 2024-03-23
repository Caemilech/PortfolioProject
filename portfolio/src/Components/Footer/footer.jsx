import { Link } from 'react-router-dom'
import "./footer.css"
import general from  "../../Data/general.json"

const Footer = () => {
    return (
        <footer>
        <Link to='/mentions-legales'>
            <span>{general.footer.legalNotices}</span>
        </Link>
            <span>{general.footer.copyright}</span>
        </footer>
    )
}

export default Footer