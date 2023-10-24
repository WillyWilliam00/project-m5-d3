import { useState } from "react";
import {Row, Container, Col} from "react-bootstrap";
import fantasy from "../books/fantasy.json"
import SingleBook from "./SingleBook";


export default function TableBook() {
    const [name, setName] = useState("");




    return (
        

        
        <Container className="my-5">
            <Row>
                <Col xs={12}>
                    <label>
                       <input name="TitleName" placeholder="Signore degli Anelli.." value={name} 
                       onChange={(e) => {setName(e.target.value)}}/>
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

