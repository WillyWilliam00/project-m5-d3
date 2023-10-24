import {Row, Container, Col} from "react-bootstrap";
import fantasy from "../books/fantasy.json"
import SingleBook from "./SingleBook";


export default function TableBook() {





    return (
        

        
        <Container className="my-5">
            <Row>
                <Col xs={12}>
                    <label>
                       <input name="TitleName" placeholder="Signore degli Anelli.."/>
                    </label>
                </Col>
            </Row>
            <Row className="row-gap-5">
                {fantasy.map((book) => (
                    <SingleBook img={book.img} title={book.title}/>

                ))}

            </Row>
        </Container>



    );

}

