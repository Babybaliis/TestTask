import {makeAutoObservable} from "mobx"

class Store{
    titleBook='';
    books:Array<any>=[];
    totalItems=0;
    filter='all';
    sort="relevance";
    startIndex=0;
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }
    setTitleBook(titleBook:string){
        this.titleBook=titleBook
    }
    setBooks(books:Array<any>) {
        this.books=books
        this.loading=false
    }
    setTotalItems(totalItems:number){
        this.totalItems=totalItems
    }
    setFilter(filter:string){
        this.filter=filter
    }
    setSort(sort:string) {
        this.sort = sort
    }
    setStartIndex(startIndex:number){
        this.startIndex=startIndex
    }
    setLoading(loading:boolean){
        this.loading=loading;
    }
}

export default new Store();