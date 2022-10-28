import React from 'react';

function CappyImage({link, trackNo}) {
    return (
        <div>
            <img src={link}></img>
            <p className='capybaraCard-p'> You have {trackNo} tracks so you get Capybara #{trackNo}</p>
        </div>
    )
}

export default CappyImage;