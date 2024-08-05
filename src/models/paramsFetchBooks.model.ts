export type paramsFetchBooks = {
    searchText: string | null,
    category: string | null,
    typeSort: string | null,
    currentPage?: number,
    perPage?: number,
}