import PropTypes from 'prop-types'

const Skills = ({pictures, description}) => {
    return (
        <>
            
                <div className='border'>
                
                        <div className="border-icon">
                            <img src={"./Pictures/Icons/"+pictures} alt={description} />
                        </div>
                
                </div>
                
        </>
    )
}

Skills.propTypes = {
    pictures: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Skills