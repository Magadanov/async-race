import React from 'react';
import DataFrom from '../DataForm/DataForm';
import './GarageMenu.scss';
import { CarI } from '../../interfaces/interface';
import generateCars from '../../utils/generateCars';
import getSelectedCarSaved from '../../utils/getSavedSelectedCar';

interface GarageMenuI {
    selectedCar: CarI | null;
    handleCarUpdate: (updatedCar: CarI) => void;
    handleCarCreate: (newCar: CarI) => void;
    refreshData: () => void;
}

export default function GarageMenu(props: GarageMenuI) {
    const clickGenerateHandler = () => {
        generateCars()
            .then(() => props.refreshData())
            .catch((error: Error) => {
                throw new Error(error.message);
            });
    };

    return (
        <div className="content-header__menu">
            <div className="menu-input-forms">
                <DataFrom
                    buttonText="Create"
                    value={getSelectedCarSaved('Create_car')}
                    handleSubmit={props.handleCarCreate}
                />
                <DataFrom
                    buttonText="Update"
                    value={props?.selectedCar}
                    handleSubmit={props.handleCarUpdate}
                />
            </div>
            <div className="menu-buttons">
                <button
                    className="btn generate-btn"
                    onClick={clickGenerateHandler}
                >
                    Generate cars
                </button>
            </div>
        </div>
    );
}
