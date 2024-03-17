import PropTypes from 'prop-types'

const Link = ({pictures, description, link}) => {
    return (
        <>
            <div className="border">
                <div className="border-icon">
                    <div>
                        <a href={link}>
                            <img src={"PortfolioProject/Pictures/Icons/"+pictures} alt={description} />
                        </a>
                    </div>
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