import { CarI, WinnerI } from '../interfaces/interface';

interface CreateApiI {
    path: 'garage' | 'winners';
    body: Omit<CarI | WinnerI, 'id'>;
}

export default function createApi(props: CreateApiI) {
    fetch(`http://localhost:3000/${props.path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props.body),
    }).catch((error: Error) => {
        throw new Error(error.message);
    });
}
