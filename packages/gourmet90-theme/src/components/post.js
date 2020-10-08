import React from "react";
import { connect } from "frontity";

// COMPONENTS ::
// --------------------------
// import Featured from "../components/featured";

const Post = ({ state, actions, element }) => {

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const featured = state.source.attachment[data.id];

  console.log(featured);

  if(element === 'restaurante'){
    return (
      <>
        <article>
          <figure>
            {/* <Featured src={featured.source_url} alt={featured.slug} /> */}
          </figure>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        </article>
      </>
    );
  }else if(element === 'receta'){
    return (
      <>
        <article>
          <figure>
            {/* <Featured src={featured.source_url} alt={featured.slug} /> */}
          </figure>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        </article>
      </>
    );
  }

}

export default connect(Post);