import {BookModel} from "./book.model";

export type fetchBookWithError = {
    data: BookModel | null,
    error?: string
}