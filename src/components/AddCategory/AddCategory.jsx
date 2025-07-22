import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import Form from 'react-bootstrap/Form';
function AddCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
            <h3>Add Category</h3>
                <Button variant="primary" onClick={handleShow}>
                <CiCirclePlus style={{fontSize:'40px'}} />
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Your Video</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Control type="text" placeholder="Video Caption" />
                    <Form.Control type="text" placeholder="Thumbnail" />
                    <Form.Control type="text" placeholder="Video URL" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
    </div>
  )
}

export default AddCategory