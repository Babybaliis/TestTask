import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import store from "../store/Store"
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";



const BookItem: React.FC = observer((props) => {
    const [book,setBook]=useState(store.books[0]);
    const navigate = useNavigate();

    useEffect(()=>  {
        let pathName=window.location.pathname
        let indexBook:number= parseInt(pathName.substr (-(pathName.length-pathName.indexOf('=')-1)));
        setBook(store.books[indexBook]);
    })

    if (book!=undefined){
        return (
            <div>
                <p/>
                <Row>
                    <Col>
                        <Image
                            style={{width:"50%"}}
                            src={book.volumeInfo?.imageLinks?.thumbnail}
                            className="img-fluid rounded-start fa-layers-bottom-left" fluid />
                    </Col>
                    <Col>
                        {book?.volumeInfo?.title}
                        <br/>
                        {book?.volumeInfo?.categories+" "}
                        <br/>
                        {book?.volumeInfo?.authors+" "}
                        <br/>
                        {book?.volumeInfo?.description}
                    </Col>
                </Row>
                <br/>
                <Button
                    variant={'secondary'}
                    onClick={() => {
                        navigate('/')
                    }}>
                    Вернуться к списку
                </Button>
            </div>
        );
    }
    return (
        <div className="container">
            <br/>
            <Button
                variant={'secondary'}
                onClick={() => {
                    navigate('/')
                }}>
                Вернуться к списку
            </Button>
        </div>
    );
})

export default BookItem;