import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function LandingPage() {
    return (
        <div>
            
            <Container>
                <Row>
                    <Col className='p-5'>
                        <div style={{ textAlign: 'center', marginTop: '150px', marginBottom: '100px' }}>
                            <h1>Welcome to MeTube!</h1>
                            <p style={{ fontSize: '18px', color: '#555' }}>
                                Your ultimate destination for streaming and discovering videos from all around the world.
                            </p>
                            <p style={{ fontSize: '16px', color: '#777' }}>
                                Explore. Watch. Enjoy.
                            </p>
                        </div>
                    </Col>
                    <Col className='p-5'>
                        <img src="https://media.tenor.com/8JhcC4OtwC8AAAAM/hatsune-miku-dance.gif" alt="" className='mx-5' height='400px' />
                    </Col>
                </Row>
                <Row className='p-3'>
                    <Col>
                        <Card style={{ width: '18rem', height: '30rem' }}>
                            <Card.Img variant="top" src="https://freight.cargo.site/w/1200/i/9f25b40620f679801ba3931bc54f9a93bbee860eb9fe205ed58e2370a7e30b49/fcabemailGIFchange22sss2.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '30rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/4d/5f/db/4d5fdb6c20630ca254865fd9ba781bd2.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '30rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/3b/98/75/3b987587811ae79b80992ea6a324db38.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Container className='p-4'>
                    <Card style={{ width: '100% ' }}>
                        <Card.Body>
                            <Row>
                            <Col>
                                <h3>Simple. Fast. Efficent</h3>
                                <p>
                                    Welcome to MeTube, your go-to media player for streaming videos and music. Enjoy high-quality playback, curated playlists, and seamless browsing of your favorite content—all in one place.
                                </p>

                            </Col>
                            <Col>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/eMeIReqWTWo?si=Ua_ZdJYGQboubyak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </Col>
                            </Row>
                        
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
           
        </div>
    )
}

export default LandingPage