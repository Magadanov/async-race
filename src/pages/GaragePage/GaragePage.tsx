import React, { useState } from 'react';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import './GaragePage.scss';
import usePaginate from '../../utils/usePaginate';
import GarageMenu from '../../components/GarageMenu/GarageMenu';
import Garage from '../../components/Garage/Garage';
import { CarI } from '../../interfaces/interface';
import updateApi from '../../api/updateApi';
import createApi from '../../api/createApi';
import deleteApi from '../../api/deleteApi';

export default function GaragePage() {
    const path = 'garage';
    const pageLimit = 7;
    const [updatePage, setUpdatePage] = useState(false);
    const { data, page, nextPage, prevPage, total } = usePaginate(
        path,
        pageLimit,
        updatePage
    );
    console.log(data, nextPage, prevPage);
    const [selectedCar, setSelectedCar] = useState<CarI | null>(null);

    const handleCarSelect = (car: CarI) => {
        setSelectedCar(car);
    };

    const handleCarCreate = (newCar: CarI) => {
        const { name, color } = newCar;
        setUpdatePage(!updatePage);
        createApi({ path, body: { name, color } });
    };

    const handleCarUpdate = (carUpdate: CarI) => {
        const { id, name, color } = carUpdate;
        setSelectedCar(null);
        setUpdatePage(!updatePage);
        updateApi({ id: id!, path, body: { name, color } });
    };
    const handleCarDelete = (carId: number) => {
        setUpdatePage(!updatePage);
        deleteApi({ path, id: carId });
        deleteApi({ path: 'winners', id: carId });
    };

    return (
        <>
            <div className="content-header">
                <ViewHeader
                    pageName="Garage"
                    currentPageNumber={page}
                    totalItems={total}
                />
                <GarageMenu
                    selectedCar={selectedCar}
                    handleCarUpdate={handleCarUpdate}
                    handleCarCreate={handleCarCreate}
                />
            </div>
            <div className="content">
                <Garage
                    data={data}
                    handleCarSelect={handleCarSelect}
                    handleCarDelete={handleCarDelete}
                />
            </div>
        </>
    );
}
