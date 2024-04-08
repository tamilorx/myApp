import React from 'react';

const AboutTitle = () => {
  return (
    <div>
      <h1>About Hello Kitty</h1>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div>
      <p>
        The meaning of this phrase is "Getting Along Together" in English. みんな (minna) means "all of us", and nakayoku
        means "friendship". Hello Kitty is one of the most popular and recognizable characters in the world. The cute
        kitty was created by the Japanese company Sanrio in 1974 and depicted as a white cat with a red bow and no
        visible mouth. Hello Kitty was originally designed by Yuko Shimizu and was intended to be a simple and cute
        character that could be marketed to young girls, but even adults fell in love with Hello Kitty as well.
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <AboutTitle />
      <AboutContent />
    </div>
  );
};

export default About;
