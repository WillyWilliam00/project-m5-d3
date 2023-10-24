import {Row, Col, Card, Container} from "react-bootstrap";

export default function SingleBook({img, title}) {
    return (
        
                
                    <Col xs={12} sm={6} lg={3}>
                        <Card>
                            <Card.Img style={{height: 350}} variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    {title}
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>

                    </Col>

                

       
    )
}

