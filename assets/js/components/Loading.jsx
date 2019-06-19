import React from 'react';

export default function Loading(){
    return (
        <div style={{height: 'calc(100vh - 76px)'}} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status"
                 style={{height: '10rem', width: '10rem', color: '#9628a7'}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}