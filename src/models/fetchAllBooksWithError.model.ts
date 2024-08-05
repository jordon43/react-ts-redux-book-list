import {dataFetchBooks} from "./dataFetchBooks.model";

export type fetchAllBooksWithError = {
    data: dataFetchBooks | null;
    error?: string;
}