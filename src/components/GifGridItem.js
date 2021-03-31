import React from 'react'
import PropTypes from 'prop-types'


const GifGridItem = ({ id, title, url }) => {
    return (
        <div className='card animate__animated animate__fadeInDownBig'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
GifGridItem.propTypes = {
    title : PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
export default GifGridItem;