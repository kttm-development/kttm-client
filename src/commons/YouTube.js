import React from 'react';
import { connect } from 'react-redux';

export class Youtube extends React.Component {
    



    render() {
        let vid;
        if (this.props.videos) {
            for (let i = 0; i < 3; i++) {
                const element = this.props.videos[i];
                console.log(element);
                let videoTitle = element.snippet.title;
                let videoBox = element.id.videoId;
                let videoThumbnail = element.snippet.thumbnails.default.url;
                let videoFooter = element.snippet.channelId;
                return vid = <div> <h1>{videoTitle}</h1> <a href={`https://www.youtube.com/watch?v=${videoBox}`} data-lity><img src={`${videoThumbnail}`} ></img></a>   <h2><a href={`https://www.youtube.com/channel/${videoFooter}`}>More from this Channel</a></h2></div>
            }

        }
        return (
            [this.vid]
        );
    }
}




const mapStateToProps = state => ({
    videos: state.youtube.items,
});

export default connect(mapStateToProps)(Youtube);