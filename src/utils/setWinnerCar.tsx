import createApi from '../api/createApi';
import getIdApi from '../api/getIdApi';
import updateApi from '../api/updateApi';
import { WinnerCarI, WinnerI } from '../interfaces/interface';

export default function setWinnerCar(props: WinnerCarI) {
    getIdApi('winners', props.id).then((data) => {
        if (data) {
            const currentWinner = data as WinnerI;
            const bestTime = Math.min(currentWinner.time, props.time);

            updateApi({
                path: 'winners',
                id: props.id,
                body: {
                    wins: currentWinner.wins + 1,
                    time: bestTime,
                },
            });
        } else {
            createApi({
                path: 'winners',
                body: { id: props.id, wins: 1, time: props.time },
            });
        }
    });
}
