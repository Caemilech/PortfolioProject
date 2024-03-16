import PropTypes from 'prop-types'
import "./projects.css"

const Projects = ({pictures, description, stack, stackDescription, text, title}) => {
    return (
        <>                     
                <div className="border">
                        <div className="border project-label">
                            <span>Projet</span>
                        </div>
                        <div className="project-icon">
                            <img src={"./Pictures/Icons/"+pictures} alt={description}></img>
                        </div>
                        <div className="project-text">
                            <img src={"./Pictures/Icons/"+stack} alt={stackDescription}></img>
                            <p>{text}<br></br>a<br></br>a</p>
                        </div>
                        <div className="project-name">
                            <h2>{title}</h2>
                        </div>
                    
                </div>

                 
                           
        </>
    )
}

Projects.propTypes = {
    pictures: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    stackDescription: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Projects