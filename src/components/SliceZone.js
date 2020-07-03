import React from 'react';
import Hero from './Hero';

const SliceZone = ({ body }) => {
  console.log(body);
  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === 'hero') {
          return (
            <Hero
              backgroundImage={bodyContent.primary.background_image.url}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              key={i} />
          )
        } else {
          return null;
        }
      })}
    </div>
  )
};

export default SliceZone;