import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { addToHistoryAPI, deleteVideoAPI, updateVideoAPI } from '../../../services/allAPI';

function VideoCard({ videoRes }) {
    const [show, setShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editForm, setEditForm] = useState({
        caption: '',
        link: '',
        imgUrl: ''
    });
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleClose = () => setShow(false);
    
    const handleShow = async (video) => {
        setShow(true);
        const historyData = {
            caption: video.caption,
            link: video.link,
            imgUrl: video.imgUrl
        };
        await addToHistoryAPI(historyData);
    };

    const handleDelete = async (id) => {
        const res = await deleteVideoAPI(id);
        if (res.status >= 200 && res.status < 300) {
            Swal.fire('Deleted!', 'Video has been deleted.', 'success');
            window.location.reload();
        } else {
            Swal.fire('Error', 'Failed to delete video.', 'error');
        }
    };

    const handleEdit = (video) => {
        setEditForm({
            caption: video.caption,
            link: video.link,
            imgUrl: video.imgUrl
        });
        setSelectedVideo(video);
        setEditModalShow(true);
    };

    const handleUpdate = async () => {
        const res = await updateVideoAPI(selectedVideo.id, editForm);
        if (res.status >= 200 && res.status < 300) {
            Swal.fire('Updated!', 'Video updated successfully.', 'success');
            setEditModalShow(false);
            window.location.reload();
        } else {
            Swal.fire('Error', 'Failed to update video.', 'error');
        }
    };

    return (
        <div className="row">
            {videoRes.map(video => (
                <div className="col" key={video.id}>
                    <Card style={{ width: '18rem' }}>
                        <Button variant="danger" onClick={() => handleShow(video)}>
                            <Card.Img variant="top" src={video.imgUrl} />
                        </Button>
                        <Card.Body>
                            <Card.Text>
                                {video.caption}
                                <Button variant="primary" onClick={() => handleDelete(video.id)}><FaTrashAlt /></Button>
                                <Button variant="primary" onClick={() => handleEdit(video)}><FaPencilAlt /></Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>PLAYING</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe width="100%" height="300" src={video.link} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            ))}

            {/* EDIT MODAL */}
            <Modal show={editModalShow} onHide={() => setEditModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control mb-2" placeholder="Caption" value={editForm.caption} onChange={(e) => setEditForm({ ...editForm, caption: e.target.value })} />
                    <input type="text" className="form-control mb-2" placeholder="Video Link" value={editForm.link} onChange={(e) => setEditForm({ ...editForm, link: e.target.value })} />
                    <input type="text" className="form-control" placeholder="Image URL" value={editForm.imgUrl} onChange={(e) => setEditForm({ ...editForm, imgUrl: e.target.value })} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setEditModalShow(false)}>Close</Button>
                    <Button variant="primary" onClick={handleUpdate}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default VideoCard;
