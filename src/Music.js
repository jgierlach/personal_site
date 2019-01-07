import song1 from './songs/1song.wav'
import song2 from './songs/2song.wav'
import React from 'react'
import './Music.css'

function transform(offset) {
  const cos = Math.cos(offset)
  const sin = Math.sin(offset)
  return {
    transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
  }
}

class Music extends React.Component {
  state = {styleOne: {}, styleTwo: {}}

  onMouseMove = event => {
    this.setState({
      styleOne: transform(-event.clientX / event.clientY),
      styleTwo: transform(event.clientX / event.clientY)
    })
  }

  render() {
    return (
      <div onMouseMove={this.onMouseMove}>
        <div className="blog-div panel" style={this.state.styleOne} />
        <div className="blog-div panel" style={this.state.styleTwo} />

        <div className="z-depth-4 music-panel center container col s12">
          <div className="center">
            <h3>First Song</h3>
            <audio controls>
              <source src={song1} type="audio/wav" />
              Your browser does not support the audio tag.
            </audio>

            <br />

            <h3>Second Song</h3>
            <audio controls>
              <source src={song2} type="audio/wav" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        </div>
      </div>
    )
  }
}

export default Music
