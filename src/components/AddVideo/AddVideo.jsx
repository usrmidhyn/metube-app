import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FcUpload } from "react-icons/fc";
import Form from 'react-bootstrap/Form';
import { addVideoAPI } from '../../../services/allAPI';
import Swal from 'sweetalert2';
function AddVideo() {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [VideoDetails,setVideoDetails]=useState({
            caption:"",
            imgUrl:"",
            link:""
        })
        console.log(VideoDetails);
        //now we need a fn to return embed link since we want the video to play in full screen 
        const getEmbed=(e)=>{
            console.log(e);
            const {value}=e.target
            let ytcode= value.slice(-31)
            console.log(ytcode);
            let ytlink=`https://www.youtube.com/embed/${ytcode}`
            setVideoDetails({...VideoDetails,link:ytlink});
        }
        //now we define saving function handlesave
        const handleSave=async()=>{
            const {caption,imgUrl,link}=VideoDetails
            if(!caption||!imgUrl||!link){
                Swal.fire({
                    title: "UH-OH",
                    text:"PLEASE FILL THE FORM!!!",
                    icon: "error"
                  });
            }
            else{
                //API fetching 
                const res=await addVideoAPI(VideoDetails)
                console.log(res);
                if(res.status>=200 && res.status<=300){
                    Swal.fire({
                        title: "Good job!",
                        text:"Video uploaded successfully!!",
                        icon: "success"
                      });
                    handleClose()
                    setVideoDetails(
                        {
                            caption:"",
                            imgUrl:"",
                            link:""
                        }
                    )
                }
                else{
                    alert(res.message)
                }
            }
        }

        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                <FcUpload style={{fontSize:'40px'}} />
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Video</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Control onChange={e=>setVideoDetails({...VideoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
                    <Form.Control onChange={e=>setVideoDetails({...VideoDetails,imgUrl:e.target.value})} type="text" placeholder="Thumbnail" />
                    <Form.Control onChange={e=>getEmbed(e)} type="text" placeholder="Video URL" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
           </>
            )
}

            export default AddVideo