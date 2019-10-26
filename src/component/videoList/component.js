import React from 'react';
import VideoItem from '../VideoItem';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { videos, handleVideoSelect } = this.props;
    const renderedVideos = videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          handleVideoSelect={handleVideoSelect}
        />
      );
      console.log(video.id);
    });

    return <div>{renderedVideos}</div>;
  }
}

export default VideoList;
