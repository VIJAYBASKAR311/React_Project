import React from 'react';
import ImageCarousel from './ImageCarousel';

function ImgContainer() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROq4Pz7TVLWKvBN7jUp9GOckuNGdt-yLjHeQ&s',
    'https://media.licdn.com/dms/image/v2/D5622AQE0R9qTWuK2jA/feedshare-shrink_800/feedshare-shrink_800/0/1726751421933?e=2147483647&v=beta&t=0bXtErf-RjaHgmfT0dI7fPxpu0CilASufB5eQkXCJps',
      'https://content.jdmagicbox.com/v2/comp/bangalore/z9/080pxx80.xx80.120403183013.t4z9/catalogue/jspiders-training-and-development-center-prakash-nagar-bangalore-advanced-java-training-institutes-87ozvivps0.jpg',
    'https://firebasestorage.googleapis.com/v0/b/vijay-a07be.appspot.com/o/Screenshot%202024-10-05%20135235.png?alt=media&token=c0e538ed-5db2-4910-80b1-c4f8c2ae2e8a',
    'https://firebasestorage.googleapis.com/v0/b/vijay-a07be.appspot.com/o/Screenshot%202024-10-05%20140405.png?alt=media&token=7f23beaa-9d9f-4910-850f-6f510dcddaab'
  ];

  return (

    <div className="App">
         <div>
        {/* <h1 id='h2'>Images</h1> */}
      </div>
    <div id='img-sli'>
   
      <ImageCarousel images={images} />
    
      </div>
    </div>
  );
}

export default ImgContainer;



