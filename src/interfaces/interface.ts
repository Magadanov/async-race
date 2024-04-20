export interface CarI {
    id?: number;
    name: string;
    color: string;
}

export interface WinnerI {
    id: number;
    wins: number;
    time: number;
}

export interface ViewHeaderI {
    pageName: string;
    currentPageNumber: number;
    totalItems: number;
}

export interface PaginationI {
    data: CarI[] | WinnerI[];
    page: number;
    limit: number;
    nextPage: number;
    prevPage: number;
}
