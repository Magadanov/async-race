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
    setWinnerCar: React.Dispatch<React.SetStateAction<WinnerCarI[]>>;
    handleSelect: (car: CarI) => void;
    handleDelete: (carId: number) => void;
}

export interface StartEngineI {
    carData: CarI;
    isRace: boolean;
    raceContainer: HTMLDivElement;
    car: HTMLDivElement;
    setWinnerCar: React.Dispatch<React.SetStateAction<WinnerCarI[]>>;
    setAnimationIDFunc: (animId: number) => void;
}

export interface CarAnimationI {
    carSpeed: number;
    containerWidth: number;
}

export interface WinnerCarI {
    id: number;
    name: string;
    time: number;
}
