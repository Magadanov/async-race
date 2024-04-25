import React, { useEffect, useState } from 'react';
import './Winners.scss';
import { CarI, WinnerI, WinnersComponentI } from '../../interfaces/interface';
import getIdApi from '../../api/getIdApi';
import WinnersTable from '../WinnersTable/WinnersTable';

export default function Winners(props: WinnersComponentI) {
    const [winnersData, setWinnersData] = useState<(CarI & WinnerI)[]>([]);
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: string;
    }>({ key: '', direction: '' });

    const sortOrder = (columnName: string) => {
        let direction = '';
        if (sortConfig.key !== columnName) direction = 'asc';
        else {
            if (sortConfig.direction === 'asc') direction = 'desc';
            if (sortConfig.direction === 'desc') direction = '';
            if (sortConfig.direction === '') direction = 'asc';
        }
        setSortConfig({ key: columnName, direction });
        props.setQueryString(
            direction && `&_sort=${columnName}&_order=${direction}`
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = props.data.map(async (winner) => {
                    const winnerCarData = await getIdApi('garage', winner.id);
                    return { ...winner, ...winnerCarData } as CarI & WinnerI;
                });
                const winnerCarData = await Promise.all(promises);
                setWinnersData(winnerCarData.filter(Boolean));
            } catch (err) {
                const error = err as Error;
                throw new Error(error.message);
            }
        };

        fetchData();
    }, [props.data]);

    return (
        <div className="winner-container">
            <WinnersTable winnersData={winnersData} sortOrder={sortOrder} />
        </div>
    );
}
