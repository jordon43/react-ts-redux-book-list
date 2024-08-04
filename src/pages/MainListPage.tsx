import React, {useEffect} from "react";
import BookCard from "../components/BookCardComponent/BookCard";
import {useAppDispatch, useAppSelector} from "../hooks";
import {BookModel} from "../models/book.model";
import {Box, Button} from "@mui/material";
import {fetchBooks, incrementPage} from "../store/bookSlice";






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

//Сделать через useCallback and react.Memo itсиняк ytb

    const loadMore = () => {
        dispatch(incrementPage())
        dispatch(fetchBooks(booksState.params))
    }

    useEffect(() => {
        dispatch(fetchBooks(booksState.params))
    }, [])

    return (
        <Box
            className="container mx-auto p-4"
            style={{
                maxWidth: 1280,
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            {/*// div -> box/stack */}
            <Box className="">
                {booksState.countSearch ? `Найдено книг: ${booksState.countSearch}` : ''}
            </Box>

            <Box
                className="cards"
                style={{
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap'
                }}
            >
                { booksState.books?.map((book: BookModel) => ( <BookCard book={book}/> )) }

                { !booksState.isLoadingBooks && booksState.countSearch && booksState.countSearch >= booksState.params.currentPage + booksState.params.perPage &&
                    ( <Button onClick={loadMore}> Load More </Button> )
                }

            </Box>
            { booksState.isLoadingBooks && ( <Box className=""> LOADING </Box> ) }

            { booksState?.books?.length === 0 && !booksState.isLoadingBooks &&
                ( <Box className=""> Книг не найдено </Box> )
            }
        </Box>
    )
}

export default MainListPage;