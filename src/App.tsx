import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookItem from "./components/BookItem";
import BooksList from "./components/BooksList";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import React from "react";

const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <Header/>
                <Routes>
                    <Route  path='/' element={<BooksList/>}/>
                    <Route  path='/books/id=:id' element={<BookItem/>}/>
                    <Route path="*" element={<BooksList/>} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export {App}