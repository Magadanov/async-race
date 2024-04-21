import React from 'react';
import DataFrom from '../DataForm/DataForm';
import './GarageMenu.scss';

export default function GarageMenu() {
    return (
        <div className="content-header__menu">
            <div className="menu-input-forms">
                <DataFrom
                    buttonText="Create"
                    handleSubmit={() => {
                        console.log('sda');
                    }}
                />
                <DataFrom
                    buttonText="Update"
                    handleSubmit={() => {
                        console.log('sda');
                    }}
                />
            </div>
        </div>
    );
}
