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
    nextPage: number;
    prevPage: number;
    total: number;
}

export interface DataFromI {
    value?: CarI | null;
    handleSubmit: (car: CarI) => void;
    buttonText: string;
}

export interface GarageComponentI {
    data: CarI[];
    handleCarSelect: (car: CarI) => void;
    handleCarDelete: (carId: number) => void;
}

export interface CarComponentI {
    data: CarI;
    isRace: boolean;
    handleSelect: (car: CarI) => void;
    handleDelete: (carId: number) => void;
}

export interface StartEngineI {
    carData: CarI;
    isRace: boolean;
    raceContainer: HTMLDivElement;
    car: HTMLDivElement;
    setAnimationIDFunc: (animId: number) => void;
}

export interface CarAnimationI {
    carSpeed: number;
    containerWidth: number;
}
