import React from "react";
import {Link} from "react-router-dom";
import {BookModel} from "../../models/book.model";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

const BookCard: React.FC<{book: BookModel}> = ({book}) => {
    return(
        <Box className="w-1/3" style={{ flexBasis: '30%'}}>
            <Card variant="outlined">
                <CardMedia
                    component="img"
                    src={book.volumeInfo?.imageLinks?.smallThumbnail}
                    height="50"
                />
                <CardContent>
                    {
                        book.volumeInfo?.categories?.map((category) => (
                            <Typography variant="body2" color="text.secondary">
                                {category}
                            </Typography>
                        ))
                    }
                    <Typography variant="h5" component="p">
                        <Link to={`book/${book.id}`}>{book.volumeInfo.title}</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    {
                        book.volumeInfo?.authors?.map((author) => (
                            <Typography variant="body2" color="text.secondary">
                                {author}
                            </Typography>
                        ))
                    }
                </CardContent>
            </Card>
        </Box>
    )
}

export default BookCard;