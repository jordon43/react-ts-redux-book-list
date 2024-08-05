import {BookModel} from "./book.model";

export type dataFetchBooks = {
    totalItems: number;
    items: BookModel[];
}