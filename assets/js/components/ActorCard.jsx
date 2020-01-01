import React from 'react';
import PropTypes from 'prop-types';
import {truncateString} from "../helper";

export default function ActorCard({id, profile_path, name, character}){
    const profileImage = profile_path ? ("http://image.tmdb.org/t/p/w185/" + profile_path) : '/images/person-placeholder.png';

    return (
        <div className="slide" key={id}>
            <div className="person-container">
                <div className="poster">
                    <img src={profileImage} alt={name}/>
                </div>
                <div className="person-info">
                    <p className="person-name">{truncateString(name, 15)}</p>
                    <p className="person-character">{truncateString(character, 15)}</p>
                </div>
            </div>
        </div>
    );
}

ActorCard.propTypes = {
    id: PropTypes.number.isRequired,
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired
};