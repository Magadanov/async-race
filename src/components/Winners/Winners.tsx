import React from 'react';
import './Winners.scss';
import { WinnersComponentI } from '../../interfaces/interface';

export default function Winners(props: WinnersComponentI) {
    console.log(props);
    return (
        <div className="winner-container">
            <table className="winner-table">
                <thead className="winner-table__head">
                    <tr>
                        <th>№</th>
                        <th>Wins</th>
                        <th>Best time</th>
                    </tr>
                </thead>
                <tbody className="winner-table__body">
                    {props.data.map((car) => {
                        return (
                            <tr>
                                <td>{car.id}</td>
                                <td>{car.wins}</td>
                                <td>{car.time}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
