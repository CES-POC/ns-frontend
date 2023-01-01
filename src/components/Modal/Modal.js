import React from 'react';
import Dropzone from '../DropZone/Dropzone';

function Modal({ handleSystemImage }) {
  return (
    <div
      className='modal fade'
      id='staticBackdrop'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title mx-auto fw-bold text-dark'>Create System</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form>
              <label className='fw-bolder text-dark'>Display Name</label>
              <input type='email' className='form-control mt-1' placeholder='eg- System Name ' />
            </form>
            <span>
              <Dropzone multiple={false} />
            </span>
          </div>
          <div className='modal-footer mx-auto'>
            <button type='button' className='btn btn-primary px-4'>
              Create Floor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
