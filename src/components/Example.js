import React from 'react';
import image1 from '../image/img-1.png';
import image2 from '../image/img-2.png';
import image3 from '../image/img-3.png';

function Example() {
    return (
        <div>
            <h1 className='example-title'>How it works</h1>
            <div className='example-img'>
                <img className='image' src={image1} alt=''/>
                <img className='image' src={image2} alt=''/>
                <img className='image' src={image3} alt=''/>
            </div>
            <p>Here is a link to photo for <a target='_blank' rel="noopener noreferrer" href='https://cutt.ly/KjZwI7I'>
                    examples</a>
                    </p>
        </div>
    );
}

export default Example;