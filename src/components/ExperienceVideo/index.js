import React from 'react';
import YouTube from 'react-youtube';

class ExperienceVideo extends React.Component {
  render() {
    const opts = {
      height: '502',
      width: '514',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
      
    };

    return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default ExperienceVideo;