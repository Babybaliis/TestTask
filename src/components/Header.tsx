import React, {useState} from "react";
import "./Header.css"
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import store from "../store/Store"
import BookService from "../service/BookService";

const Header:  React.FC = observer(( ) => {
    const handleSubmit = (event:any)=>{
        event.preventDefault();
        store.setStartIndex(0);
        store.setTotalItems(0);
        store.setBooks([]);
        store.setLoading(true);
        BookService.getBooks(store.titleBook,store.filter,store.sort,store.startIndex).then((data: any) => {
            store.setBooks(data.data.items);
            store.setTotalItems(data.data.totalItems);
        })
        store.setStartIndex(store.startIndex+BookService.maxResults);
    }
    const handleChange = (event:any)=>{
        const book = event.target.value;
        store.setTitleBook(book);
    }
    return (
        <div className='main-image d-flex justify-content-center align-items-center flex-column'>
            <div className='filter'></div>
            <h1
                className='display-2 text-center text-white mb-3'
                style={{ zIndex: 2 }}>
                Поиск книг

            </h1>
            <form
                onSubmit={(event)=>{
                    handleSubmit(event)
                }}>
                <InputGroup className="mb-3">
                    <FormControl
                        type={"text"}
                        onChange={handleChange}
                        placeholder="Введите название книги"
                    />
                    <Button
                        type={"submit"}
                         variant="secondary"
                        id="button-addon2">
                        Поиск
                    </Button>
                </InputGroup>
                <Container fluid >
                    <Row>
                        <Col
                            className={'text-white mb-3'}
                            style={{
                            textAlign: 'right',
                        }}
                        >
                            Категория
                        </Col>
                        <Col >
                            <Form.Select
                                onChange={(event:any)=>{
                                    store.setFilter(event.target.value)

                                }}>
                                <option value="all">Все</option>
                                <option value="art">Искусство</option>
                                <option value="biography">Биография</option>
                                <option value="computers">Компьютеры</option>
                                <option value="history">История</option>
                                <option value="medical">Медицина</option>
                                <option value="poetry">Поэзия</option>
                            </Form.Select>
                        </Col>
                        <Col
                            className={'text-white mb-3'}
                            style={{
                            textAlign: 'right',
                        }}>
                            Сортировать по
                        </Col>
                        <Col>
                            <Form.Select
                                onChange={(event:any)=>{
                                    store.setSort(event.target.value)
                                }}>
                                <option value="relevance">Актуальный</option>
                                <option value="newest">Новейший</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
    );
});

export default Header;