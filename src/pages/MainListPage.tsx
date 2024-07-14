import React from "react";
import BookCard from "../components/BookCardComponent/BookCard";


const MainListPage: React.FC = () => {
    const testData: Array<number> = [0, 1, 2, 3];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Search for books</h1>
            <div className="searchBlock">
                <input type="text"/>
            </div>
            <div className="filterBlock">
                <select name="" id="">
                    <option>All</option>
                    <option>art</option>
                    <option>biography</option>
                </select>
            </div>

            <div className="cards">
                {
                    testData.map((item: number) => (
                        <BookCard idBook={item}/>
                        )
                    )
                }
            </div>

        </div>
    )
}

export default MainListPage;