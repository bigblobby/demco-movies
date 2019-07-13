import React from 'react';
import PropTypes from 'prop-types';
import {formatDate, formatMoney} from "../helper";

export default function MovieInfoDetails({movie}){
    const { release_date, budget, runtime, revenue } = movie;

    return(
        <div className="movie-details pb-3 pt-2">
            <div className="detail-container"><span className="detail-title">Released </span><span className="detail-copy">{formatDate(release_date)}</span></div>
            <div className="detail-container"><span className="detail-title">Runtime </span><span className="detail-copy">{runtime} mins</span></div>
            {!!budget && (<div className="detail-container"><span
                className="detail-title">Budget</span> <span
                className="detail-copy">{formatMoney(budget)}</span></div>)}
            {!!revenue && (<div className="detail-container"><span
                className="detail-title">Revenue</span> <span
                className="detail-copy">{formatMoney(revenue)}</span></div>)}
        </div>
    );
}

MovieInfoDetails.propTypes = {
    movie: PropTypes.shape({
        release_date: PropTypes.string,
        budget: PropTypes.number,
        runtime: PropTypes.number,
        revenue: PropTypes.number
    }).isRequired
};