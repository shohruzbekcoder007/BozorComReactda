import React from 'react';
import YouTube from 'react-youtube';

class AboutUsVideo extends React.Component {
  render() {
    const opts = {
        // width: '1024px%',
        // height: '800px',
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
      
    };

    return <YouTube videoId="qUe8gEszGvI" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default AboutUsVideo;