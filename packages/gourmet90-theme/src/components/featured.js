import React from "react";
import { connect } from "frontity";

const Featured = ({state, imgID, element}) => {

  const mediaImage = state.source.attachment[imgID];
  // console.log(mediaImage);

  if(element === 'restaurante' || element === 'receta') {
    return(
      <>
        <img 
          src={mediaImage.source_url} 
          alt={mediaImage.slug} 
        />
        {/* <h3>imagen id: {imgID}</h3> */}
      </>
    );
  }

}

export default connect(Featured);