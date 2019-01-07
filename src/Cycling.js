import React from 'react'
import Card from './Card'
import './Cycling.css'
const externalLink = 'https://phandroid.s3.amazonaws.com/wp-content/uploads/2015/06/susnet-wallpaper-5.jpg'
const cardImage = 'https://phandroid.s3.amazonaws.com/wp-content/uploads/2015/06/susnet-wallpaper-5.jpg'
const cardTitle = 'Card Title'
const cardText = 'Lorem Ipsum is some random other shit'

const Cycling = () => {
  return (
    <div id="delay" className="container center">
      <h3>
        I have been an avid cyclist all my life and since my youth have competed
        in races all across the United States.
      </h3>
      <div className="row">
        <div className="col s12 m4">
          <Card externalLink={externalLink} cardImage={cardImage} cardTitle={cardTitle} cardText={cardText} />  
        </div>
      </div>
    </div>
  )
}

export default Cycling
