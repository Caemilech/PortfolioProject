import { Link } from 'react-router-dom'
import "./error.css"

const Error = () => {
    return (
        <div className='error-container'>
            <h1 className='error-name'>404</h1>
            <span className='error-text'>Oups! La page que vous demandez n'existe pas.</span>
            <Link to='/'>Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Error