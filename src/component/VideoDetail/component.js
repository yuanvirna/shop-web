import React from 'react';

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video } = this.props;
    if (!video) {
      return <div>Loading ...</div>;
    }
    const { classes } = this.props;
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof video);
    return (
      <div>
        <div>
          <iframe
            src={videoSrc}
            allowFullScreen
            title="Video player"
            style={{
              margin: 'auto',
              marginTop: 30,
              display: 'flex',
              width: '100%'
              // height: '100%'
              // position: 'fixed'
            }}
            className={classes.iframe}
          />
        </div>
        <div>
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
