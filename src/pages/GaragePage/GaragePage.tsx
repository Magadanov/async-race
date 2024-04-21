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
import Pagination from '../../components/Pagination/Pagiantion';
import getSelectedCarSaved from '../../utils/getSavedSelectedCar';

export default function GaragePage() {
    const path = 'garage';
    const pageLimit = 7;
    const { data, page, nextPage, prevPage, total, refreshData } = usePaginate(
        path,
        pageLimit
    );
    const selectedCarSaved = getSelectedCarSaved('Update_car');
    const [selectedCar, setSelectedCar] = useState<CarI | null>(
        selectedCarSaved
    );

    const handleCarSelect = (car: CarI) => {
        sessionStorage.setItem('Update_car', JSON.stringify(car));
        setSelectedCar(car);
    };

    const handleCarCreate = (newCar: CarI) => {
        sessionStorage.removeItem('Create_car');
        const { name, color } = newCar;
        createApi({ path, body: { name, color } }).then(() => refreshData());
    };

    const handleCarUpdate = (carUpdate: CarI) => {
        sessionStorage.removeItem('Update_car');
        const { id, name, color } = carUpdate;
        setSelectedCar(null);
        updateApi({ id: id!, path, body: { name, color } }).then(() =>
            refreshData()
        );
    };
    const handleCarDelete = (carId: number) => {
        deleteApi({ path, id: carId }).then(() => refreshData());
        deleteApi({ path: 'winners', id: carId }).catch((error: Error) => {
            throw new Error(error.message);
        });
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
                    refreshData={refreshData}
                />
            </div>
            <div className="content">
                <Garage
                    data={data}
                    handleCarSelect={handleCarSelect}
                    handleCarDelete={handleCarDelete}
                />
            </div>
            <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
        </>
    );
}
