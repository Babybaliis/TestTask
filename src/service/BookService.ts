import axios from "axios";


class BookService{
     maxResults=30;
     apiKey = "AIzaSyBoEqIGK_Gc7hMaEirCfDziPxMqHBpNhN4"
     getBooks = (book:string,filter:string,sort:string,startIndex:number) => {
          return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:"+book+(filter!='all'?("+subject:"+filter):'')+"&orderBy="+sort+"&key="+this.apiKey+"&maxResults="+this.maxResults+"&startIndex="+startIndex)//&startIndex=
     }
}

export default new BookService();