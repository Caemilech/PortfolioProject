import { Link } from 'react-router-dom'
import "./logo.css"

const Logo = (props) => {
    const {logoText, link} = props.data
    return (
        <div className="logo">
            <div className="arrow-left">
                <div className="logo-text">
                    <Link to={link}>{logoText}</Link>
                </div>
            </div>
            <span className="arrow-right"></span>
        </div>
    )
}

export default Logo