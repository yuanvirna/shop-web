import React from 'react';

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video, handleVideoSelect } = this.props;
    return (
      <div
        onClick={() => handleVideoSelect(video)}
        className=" video-item item"
      >
        <img
          style={{ margin: 'auto', marginTop: 30, display: 'flex' }}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <div>
          <div
            style={{
              margin: 'auto',
              marginTop: 20,
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'arial'
            }}
          >
            {video.snippet.title}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
