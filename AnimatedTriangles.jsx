import React from 'react';

function AnimatedTriangles(){
    return(
        <div>
            <div style={{transform: 'rotate(180deg)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="100" viewBox="0 0 200 400">
                <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#5B6C6C" />
                    <stop offset="100%" stopColor="#141F1F" />
                </linearGradient>
                </defs>
                <g>
                <polygon points="100,0 200,200 0,200" fill="url(#gradient)">
                    <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="5s" values="0,0; 0,200" />
                </polygon>
                <polygon points="100,200 200,400 0,400" fill="url(#gradient)">
                    <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="5s" values="0,0; 0,200" />
                </polygon>
                <polygon points="100,400 200,600 0,600" fill="url(#gradient)">
                    <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="5s" values="0,0; 0,200" />
                </polygon>
                </g>
                </svg>
            </div>
            <center>
                <p style={{color: 'var(--gray100)', fontSize: '10px'}}> &lt;&lt; SCROLL &gt;&gt;</p>
            </center>
        </div>
    )
}

export default AnimatedTriangles;
