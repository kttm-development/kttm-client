import React from 'react';

// export for testing
export default function YouTubeAdder({
videos,
}) {
    return
    (
      <div class="js-item-element" data-item-id="${videos.id}">
        <h1>${videos.title}</h1>
        <a href="https://www.youtube.com/watch?v=${videos.id}" data-lity><img src="${videos.thumbnail.url}" ></img></a>
        <h2><a href="https://www.youtube.com/channel/${videos.channelId}">More from this Channel</a></h2>
      </div>
      );
};



