import React from 'react';
import YouTubeAdder from './YouTubeAdder';

export default function YouTubeSelect({
    videos,
}) {
    return (
        <React.Fragment>
            <div id="youtube">
                {videos.map((obj, index) => (
                    <YouTubeAdder key={index} {...obj} />
                ))}
            </div>
        </React.Fragment>
    );
}