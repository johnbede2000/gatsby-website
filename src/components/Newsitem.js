import React from 'react';
import Img from 'gatsby-image';

const Newsitem = (item) => {
  return (
    <div>
      <Img fluid={item.img.fluid} />
      <p>
        {item.date}, {item.location}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: item.desc.childMarkdownRemark.html }}
      />
    </div>
  );
};

export default Newsitem;
