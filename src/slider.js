import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';

export default class Slider extends Component {

  render () {
    const { images } = this.props
    return (
      <Carousel showArrows={ true } showIndicators={ false } showStatus={ false } showThumbs={ false }>
        { images.map((image, i) =>
          (<div key ={ i }>
            <img src={ image.image } />
          </div>)
        ) }
      </Carousel>
    )
  }

}
