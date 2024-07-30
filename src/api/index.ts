import axiosInstance from "../axiosConfig";
import {BookModel} from "../models/bookModel";


//TODO вынести пагинацию

type fetchAllBooksWithError = {
    data: dataFetchBooks | null;
    error?: string;
}

type paramsFetchBooks = {
    searchText: string | null,
    category: string | null,
    typeSort: string | null,
    startIndex?: number,
    maxResults?: number,
}

type dataFetchBooks = {
    totalItems: number;
    items: BookModel[];
}


export class BooksApi {
    static async fetchAllBooks (params: paramsFetchBooks): Promise<fetchAllBooksWithError>  {
        const {
            searchText = '',
            category = '',
            typeSort = '',
            startIndex = 1,
            maxResults = 40,
        } = params

        try{
            const params: any = {
                q: (searchText && `intitle:${searchText}+`)+`${category !== 'all' && 'subject:'+category}`,
                orderBy: typeSort,
                startIndex: startIndex,
                maxResults: maxResults,
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
}