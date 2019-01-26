import React from 'react'

class Card extends React.Component {
  render() {
    const { cardImage, externalLink, cardTitle, cardText } = this.props      
    return (
      <div className="card z-depth-4">
        <div className="card-image">
          <img alt="" src={cardImage} />
          <span className="card-title">{cardTitle}</span>
        </div>
        <div className="card-content">
          <p>
            {cardText}
          </p>
        </div>
        <div className="card-action">
          <a href={externalLink}>This is a link</a>
        </div>
      </div>
    )
  }
}

export default Card
