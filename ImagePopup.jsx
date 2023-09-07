import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

// You must have installed react-bootstrap, 
// 1. open the terminal
// 2. Go to your react project address folder
// 3. use: npm install react-bootstrap
// Also, you must have to enter the imagePath and title props

function ImagePopup({imagePath}	) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="ImagePopup">
      <Image thumbnail src={imagePath}  onClick={handleShow} />

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          
        </Modal.Header>

        <Modal.Body>
          <Image src={imagePath} fluid />
        </Modal.Body>

        <Modal.Footer>
        <Link to="/url" className="btn btn-primary">
              Call to action
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ImagePopup;
