import React from 'react';
import './WinnersTable.scss';
import { CarI, WinnerI } from '../../interfaces/interface';
import { PiCarProfileFill } from 'react-icons/pi';

type WinnersDataType = { winnersData: (WinnerI & CarI)[] };

export default function WinnersTable(props: WinnersDataType) {
    return (
        <table className="winner-table">
            <thead className="winner-table__head">
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Car</th>
                    <th>Wins</th>
                    <th>Best time</th>
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
