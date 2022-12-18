import React from 'react'
import ImageShow from './ImageShow'



const ImageList = ({ images }) => {
      console.log('image', images.results)
      let imgs = images.results;
      const renderedImages = imgs.map((image) => {
            return <ImageShow key={image.id} image={image} />
      });
      return (
            <>
                  {images && <div>{renderedImages}</div>}
            </>

      )
}

export default ImageList