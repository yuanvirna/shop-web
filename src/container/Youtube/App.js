import React from 'react';
import SearchBar from './Searchbar';
import youtube, { baseParams } from './youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { Container } from '@material-ui/core';
import Appbar from '../../component/appbar';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  handleSubmit = async termFromSearchBar => {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: termFromSearchBar
      }
    });
    this.setState({
      videos: response.data.items
    });
  };
  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Container
        style={{
          justifyContent: 'center',
          maxWidth: 448,
          position: 'static'
        }}
      >
        <Appbar />

        <div className="ui container" style={{ marginTop: '1em' }}>
          <SearchBar handleFormSubmit={this.handleSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  handleVideoSelect={this.handleVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
