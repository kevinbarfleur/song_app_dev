// images
import main_background_blur from '../images/img1blur.jpg'
import main_background from '../images/img1.jpg'

// React
import React, { Component } from 'react'
import ProgressiveImage from 'react-progressive-image'

// Styles
import '../styles/background.styl'

class Background extends Component {
  render() {
    return (
      <div className="wrapper_background">
        {/* <img
          className="background_image"
          src={main_background}
          alt="background main"
        /> */}
        <ProgressiveImage
          src={main_background}
          placeholder={main_background_blur}>
          {(src, loading) => (
            <img
              style={{
                opacity: loading ? 0.5 : 1
              }}
              src={src}
              alt="an image"
            />
          )}
        </ProgressiveImage>
      </div>
    )
  }
}

export default Background
