import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Button, Card, Col, Container, FormText, Row,Spinner} from "react-bootstrap";
import store from "../store/Store"
import BookService from "../service/BookService";
import {useNavigate} from 'react-router-dom';


const BooksList:  React.FC = observer(( ) => {
    const navigate = useNavigate();
    return(
        <div>
            {store.loading != false ? (
                    <div className={'text-lg-center'}>
                        <br/>
                             <Spinner animation="border" variant="success" />
                    </div>
            ) :"" }
            {store.books!=undefined ? (
                <div>
                    {store.totalItems>0 && <h5 style={{textAlign:"center"}}>
                        Общее количество {store.totalItems}
                    </h5>
                    }
                    <p/>
                    <Container fluid >
                        <Row className="justify-content-md-center g-3">
                            {store.books.map((book:any,index:number)=>(
                                <Col>
                                    <Card
                                        defaultValue={index}
                                        style={{ width: '300px', height: "100%"}} bg={'Light'}
                                        border="dark"
                                        onClick={()=>{
                                            navigate(`/books/id=${index}`)
                                        }}>
                                        <Card.Img

                                            height={'230px'}
                                            variant="top"
                                            src={book.volumeInfo?.imageLinks?.thumbnail} />
                                        <Card.Body>
                                            <Card.Text>
                                                <u>{book?.volumeInfo?.categories!=undefined && book?.volumeInfo?.categories[0]}</u>
                                            </Card.Text>
                                            <Card.Title ><p className={'fs-6'}>{book.volumeInfo.title}</p></Card.Title>
                                            <Card.Text>
                                                {book.volumeInfo?.authors?.map((author:any)=>(
                                                    <FormText className={'text-sm-center'}>{author}</FormText>
                                                ))}
                                                <br/>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    <br/>
                    <Row>
                        {store.startIndex>0 && store.startIndex<store.totalItems &&<Button
                            variant="warning"
                            size="lg"
                            onClick={(event)=>{
                                let copyResult:Array<any> = Object.assign([], store.books);
                                let copyStartIndex = store.startIndex+BookService.maxResults;
                                store.setStartIndex(copyStartIndex);
                                BookService.getBooks(store.titleBook,store.filter,store.sort,store.startIndex).then((data:any) => {
                                    store.setTotalItems(data.data.totalItems);
                                    copyResult=copyResult.concat(data.data.items);
                                    store.setBooks(copyResult);
                                })
                            }}
                        >
                            Загрузить еще
                        </Button>}
                    </Row>
                </div>
            ):(
                <div className={'text-lg-center '}>
                    <h1>Книг нет</h1>
                </div>
            )}
        </div>
    );
});

export default BooksList;
