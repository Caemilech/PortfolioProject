import { Link } from 'react-router-dom'
import error from "../../Data/error.json"
import "./error.css"

const Error = () => {
    return (
        <>
        <section className='error-container'>
            <h1 className='error-name'>{error.title}</h1>
            <span className='error-text'>{error.text}</span>
            <Link to='/'>{error.linkHome}</Link>
        </section>
        </>
    )
}

export default Error