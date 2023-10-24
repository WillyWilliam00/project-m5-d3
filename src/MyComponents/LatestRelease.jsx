import {Row, Container, Col} from "react-bootstrap";
import fantasy from "../books/fantasy.json"
import SingleBook from "./SingleBook";


export default function TableBook() {

const [name, setName] = useState("");

function TextFilter(e) {
        setName(e.target.value)
        fantasy.filter(book => book.title.toLowerCase().includes(name.toLowerCase()))
       }

    return (
        

        
        <Container className="my-5">
            <Row>
                <Col xs={12}>
                    <label>
                       <input name="TitleName" placeholder="Signore degli Anelli.." value={name} onChange={TextFilter(e)}/>
                    </label>
                </Col>
            </Row>
            <Row className="row-gap-5">
                {fantasy.map((book) => (
                    <SingleBook img={book.img} title={book-title}/>

                ))}

            </Row>
        </Container>



    );

}

