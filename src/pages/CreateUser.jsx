import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function CreateUser() {
    const title = useRef()
    const body = useRef(null)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            title: title.current.value,
            body: body.current.value
        }

        Axios.post("https://jsonplaceholder.typicode.com/posts", data)
            .then((response) => {
                navigate('/')
            })
        // fetch("https://jsonplaceholder.typicode.com/posts", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(dataResponse => navigate('/'))
    }

    return(
        <Container>
            <Form>
                <FormGroup>
                    <Label for="title">
                        Title
                    </Label>
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        innerRef={title}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="body">
                        Body
                    </Label>
                    <Input
                        id="body"
                        name="body"
                        type="textarea"
                        innerRef={body}    
                    />
                </FormGroup>

                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </Container>
    )
}