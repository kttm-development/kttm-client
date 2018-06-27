import React from 'react';
import { connect } from 'react-redux';
import lity from 'lity';
import '../components/styles/lity.css'

export class Youtube extends React.Component {


    render() {
        if (this.props.videos) {
            for (let i = 0; i < 3; i++) {
                const element = this.props.videos[i];
                console.log(element);
                let videoTitle = element.snippet.title;
                let videoBox = element.id.videoId;
                let videoThumbnail = element.snippet.thumbnails.default.url;
                let videoFooter = element.snippet.channelId;
                let vid = <div className="col-4 ">
                    <h3><a className="text-align-centered">{videoTitle}</a></h3>
                    <a href={`https://www.youtube.com/watch?v=${videoBox}`} data-lity>
                        <img className="concert-image " src={`${videoThumbnail}`} ></img>
                    </a>
                    <h3><a className="text-align-centered" href={`https://www.youtube.com/channel/${videoFooter}`}>More from this Channel</a></h3>
                    <script src={lity}></script>
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