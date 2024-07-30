import React, {useEffect, useState} from "react";
import BookCard from "../components/BookCardComponent/BookCard";
import {useAppDispatch, useAppSelector} from "../hooks";
import {BookModel} from "../models/bookModel";
import {Button, TextField} from "@mui/material";
import {clearBooksState, fetchBooks, incrementPage} from "../store/bookSlice";
import {Search} from "@mui/icons-material";
import SelectCategory from "../components/selectCategory";
import SelectSort from "../components/BookCardComponent/selectSort";






// const selectSelf = (state: State) => state
// const unsafeSelector = createSelector(selectSelf, (state) => state.value)
// const draftSafeSelector = createDraftSafeSelector(
//     selectSelf,
//     (state) => state.value,
// )
//
// // in your reducer:
//
// state.value = 1
//
// const unsafe1 = unsafeSelector(state)
// const safe1 = draftSafeSelector(state)
//
// state.value = 2
//
// const unsafe2 = unsafeSelector(state)

// const selectUser = state => state.users;
// const selectUserId = (state, userId) => selectUser(state)[userId];
// const selectUserDetails = createSelector(
//     [selectUser, selectUserId],
//     (users, user) => users[user.id]
// );



//TODO Вынести (state) => state.bookSlice в слайс
// class



const MainListPage: React.FC = () => {

    const dispatch = useAppDispatch();
    const booksState = useAppSelector((state) => state.bookSlice);

    const [categoryInput, setCategoryInput] = useState<string>("all");
    const [searchText, setSearchText] = useState<string>('')
    const [sortValue, setSortValue] = useState<string>("relevance");


    const getBooks = () => {
        dispatch(fetchBooks(
            {
                searchText: searchText,
                category: categoryInput,
                typeSort: sortValue
            }))
    }

//Сделать через useCallback and react.Memo itсиняк ytb
    const handleChangeCategory = (value: any) => {
        setCategoryInput(value)
        dispatch(clearBooksState())
        getBooks()

    }

    const handleChangeSort = (value: any) => {
        setSortValue(value)
        dispatch(clearBooksState())
        getBooks()
    }

    const loadMore = () => {
        dispatch(incrementPage())
        getBooks()
    }

    useEffect(() => {

        getBooks()
    }, [])

    return (
        <div className="container mx-auto p-4" style={{
            maxWidth: 1280,
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/*// div -> box/stack */}


            <div className="">
                {booksState.countSearch ? `Найдено книг: ${booksState.countSearch}` : ''}
            </div>


            <div className="cards" style={{
                display: 'flex',
                gap: '15px',
                flexWrap: 'wrap'

            }}>
                {
                    booksState.books?.map((book: BookModel) => (
                            <BookCard book={book}/>
                        )
                    )
                }

                {
                    !booksState.isLoadingBooks && (
                        <Button onClick={loadMore}>
                            Load More
                        </Button>
                    )
                }

            </div>
            {
                booksState.isLoadingBooks && (
                    <div className="">
                        LOADING
                    </div>
                )
            }

            {
                booksState?.books?.length === 0 && !booksState.isLoadingBooks && (
                    <div className="">
                        Книг не найдено
                    </div>
                )
            }
        </div>
    )
}

export default MainListPage;