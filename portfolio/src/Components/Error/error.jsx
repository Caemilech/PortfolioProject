import { Link } from 'react-router-dom'
import "./error.css"

const Error = () => {
    return (
        <div className='error-container'>
            <p className='error-name'>404</p>
            <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Error