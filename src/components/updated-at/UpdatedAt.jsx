import React from 'react';

import './UpdatedAt.scss'

const UpdatedAt = ({ date }) => {

    const convertDate = (date) => {
        const numericDate = new Date(date);
        const now = Date.now();
        const secondsDiff = (now-numericDate)/1000;

        if (secondsDiff < 3600) {
            const minutes = Math.round(secondsDiff/60);
            return minutes > 1 ? `${minutes} Minutes ago` : `${minutes} Minute ago`;
        } else if (secondsDiff < 86400) {
            const hours = Math.round(secondsDiff/3600);
            return hours > 1 ? `${hours} Hours ago` : `${hours} Hour ago`
        } else {
            const days = Math.round(secondsDiff/86400);
            return days > 1 ? `${days} Days ago` : `${days} Day ago`
        }
    }

    return (
        <p className='updated-at'>Updated At: {date && convertDate(date)}</p>
    )

}

export default UpdatedAt;