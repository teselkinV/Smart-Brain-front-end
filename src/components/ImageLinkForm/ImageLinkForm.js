import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='text'>
        This Magic Brain will detect faces in your pictures. Give it a try.
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input 
            className='f4 pa2 w-70 center' 
            placeholder='Image link'
            type='tex' 
            onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-#004eebe8'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;