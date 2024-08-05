import axiosInstance from "../axiosConfig";
import {fetchAllBooksWithError} from "../models/fetchAllBooksWithError.model";
import {dataFetchBooks} from "../models/dataFetchBooks.model";
import {paramsFetchBooks} from "../models/paramsFetchBooks.model";
import {fetchBookWithError} from "../models/fetchBookWithError.model";
import axios from "axios";
import {BookModel} from "../models/book.model";


export class BooksApi {
    static async fetchAllBooks (params: paramsFetchBooks): Promise<fetchAllBooksWithError>  {
        const {
            searchText = '',
            category = '',
            typeSort = '',
            currentPage = 1,
            perPage = 40,
        } = params
        try{
            const params: any = {
                q: (searchText && `intitle:${searchText}+`)+`${category !== 'all' && 'subject:'+category}`,
                orderBy: typeSort,
                startIndex: currentPage,
                maxResults: perPage,
                key: process.env.REACT_APP_API_KEY
            }
            const response = await axiosInstance.get<dataFetchBooks>('volumes', {params});
            return {
                data: response.data
            };
        }
        catch(error){
            console.error(error)
            return {
                data: null,
                error: error instanceof Error ? error.message : 'unknown error'
            };
        }
    }
    static async fetchBook (bookId: string): Promise<fetchBookWithError>  {
        try {
            const response = await axios.get<BookModel>(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.REACT_APP_API_KEY}`)
            return {
                data: response.data
            }
        }
        catch (error) {
            console.error(error)
            return {
                data: null,
                error: error instanceof Error ? error.message : 'unknown error'
            }
        }
    }
}