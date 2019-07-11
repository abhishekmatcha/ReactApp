import React from 'react';
import faker from 'faker';

const App = () => {
  return (
    <div class="ui container comments">
  <div class="comment">
    <a class="avatar" href='/'>
      <img src={faker.image.avatar()} alt='aa'></img>
    </a>
    <div class="content">
      <a class="author" href='/'>Abhishek MS</a>
      <div class="metadata">
        <div class="rating">
          <i class="star icon"></i>
          5 Faves
        </div>
      </div>
      <div class="text">
        Aswome Pic dude.
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
