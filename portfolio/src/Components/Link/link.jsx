import PropTypes from 'prop-types'

const Link = ({pictures, description, link}) => {
    return (
        <>
            <div className="border">
               
                    <div className="border-icon">
                        <a href={link}>
                            <img src={"./Pictures/Icons/"+pictures} alt={description} />
                        </a>
                    </div>
            </div>    
        </>
    )
}

Link.propTypes = {
    link: PropTypes.string.isRequired,
    pictures: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Link