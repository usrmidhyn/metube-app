import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { MdHistoryToggleOff } from "react-icons/md";
import AddVideo from '../../components/AddVideo/AddVideo';
import ViewVideo from '../../components/ViewVideo/ViewVideo';
import AddCategory from '../../components/AddCategory/AddCategory'
function Home() {
  return (
    <div>
        <Container>
        <Row className='mt-3 p-3 '>
        <Col>
        <h3>Upload here <AddVideo /></h3>
        </Col>
        <Col>
        <Link to='/watch-history' ><MdHistoryToggleOff style={{fontSize:'50px',float:'right'}} /></Link>
        </Col>
       </Row>
        </Container>
        <div className="row">
            <div className="col-9"><ViewVideo/></div>
            <div className="col-3"><AddCategory/></div> 
            {/* 9 and 3 given to cols for box sizing  */}
        </div>
    </div>
  )
}

export default Home