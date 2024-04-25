import React from 'react';
import './WinnersTable.scss';
import { CarI, WinnerI } from '../../interfaces/interface';
import { PiCarProfileFill } from 'react-icons/pi';
import { TbArrowsSort } from 'react-icons/tb';

type WinnersDataType = {
    winnersData: (WinnerI & CarI)[];
    sortOrder: (columnName: string) => void;
};

export default function WinnersTable(props: WinnersDataType) {
    return (
        <table className="winner-table">
            <thead className="winner-table__head">
                <tr>
                    <th>
                        №{' '}
                        <TbArrowsSort
                            className="sort-icon"
                            onClick={() => {
                                props.sortOrder('id');
                            }}
                        />
                    </th>
                    <th>Name</th>
                    <th>Car</th>
                    <th>
                        Wins{' '}
                        <TbArrowsSort
                            className="sort-icon"
                            onClick={() => {
                                props.sortOrder('wins');
                            }}
                        />
                    </th>
                    <th>
                        Best time{' '}
                        <TbArrowsSort
                            className="sort-icon"
                            onClick={() => {
                                props.sortOrder('time');
                            }}
                        />
                    </th>
                </tr>
            </thead>
            <tbody className="winner-table__body">
                {props.winnersData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>
                            <PiCarProfileFill
                                className="car-icon"
                                color={data.color}
                            />
                        </td>
                        <td>{data.wins}</td>
                        <td>{data.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
