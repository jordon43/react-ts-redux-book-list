import {AsyncThunk, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BookModel} from "../models/book.model";
import {BooksApi} from "../api";
import {fetchAllBooksWithError} from "../models/fetchAllBooksWithError.model";

type booksState = {
    books: BookModel[];
    isLoadingBooks: boolean;
    countSearch: number | null;
    params: paramsFetchBooks
}

type paramsFetchBooks = {
    searchText: string,
    category: string,
    typeSort: string,
    perPage: number;
    currentPage: number;
}

const initialState: booksState = {
    books: [],
    isLoadingBooks: false,
    countSearch: null,

    params: {
        searchText: '',
        category: 'all',
        typeSort: 'relevance',
        currentPage: 1,
        perPage: 40
    },

};

export const fetchBooks = createAsyncThunk('volumes', async (params: paramsFetchBooks) => {
    const response: fetchAllBooksWithError  = await BooksApi.fetchAllBooks(params)
    return response
})


const bookSlice = createSlice({
    name: 'bookSlice',
    initialState,
    reducers: {
        incrementPage(state) {
            if (state.countSearch && state.countSearch >= state.params.currentPage + state.params.perPage) {
                console.log('sdgsdgsdgsdgsdgsdgsdgsg')
                state.params.currentPage += state.params.perPage
                console.log('state.params.currentPage', state.params.currentPage)
            }
        },
        clearBooksState(state) {
            state.books = []
            state.isLoadingBooks = false
            state.countSearch = null
            state.params.currentPage = 1
        },
        setCategory(state, action) {
            console.log("action", action.payload)
            state.params.category = action.payload
        },
        setTypeSort(state, action){
            console.log("action", action.payload)
            state.params.typeSort = action.payload
        },
        setSearchText(state, action) {
            console.log("action", action.payload)
            state.params.searchText = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                state.isLoadingBooks = true
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                console.log(action)
                if (action.payload?.data?.items) {

                    state.books.push(...action.payload.data.items)
                    state.countSearch = action.payload.data.totalItems
                } else {
                    state.books = []
                    state.countSearch = 0
                }

                state.isLoadingBooks = false
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.isLoadingBooks = false
            })
    }
});

export const {
    incrementPage,
    clearBooksState,
    setCategory,
    setSearchText,
    setTypeSort
} = bookSlice.actions;


export default bookSlice.reducer;