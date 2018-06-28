import React from 'react';
import { connect } from 'react-redux';
import lity from 'lity';
import '../components/styles/lity.css'

export class Youtube extends React.Component {


    render() {
        if (this.props.videos) {
            for (let i = 0; i < 3; i++) {
                const element = this.props.videos[i];
                let videoTitle = element.snippet.title;
                let videoBox = element.id.videoId;
                let videoThumbnail = element.snippet.thumbnails.default.url;
                let videoFooter = element.snippet.channelId;
                let vid = <div className="col-4 ">
                    <div className="video-container">
                        <img className="video-preview-image " src={`${videoThumbnail}`} ></img>
                        <div className="video-overlay">
                            <a href={`https://www.youtube.com/watch?v=${videoBox}`} title="video preview of artist" data-lity>
                                <i className="play-video-icon far fa-play-circle fa-6x"></i>
                            </a>
                        </div>
                    </div>
                    <span><a className="youtube-video-title">{videoTitle}</a></span>
                    <span className="youtube-channel-link"><a className="youtube-channel-link" href={`https://www.youtube.com/channel/${videoFooter}`}>More from this Channel</a></span>
                    <script  src="./lity.js"></script>
                    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                </div>
                return vid
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