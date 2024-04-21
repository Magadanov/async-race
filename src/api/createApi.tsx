import { CarI, WinnerI } from '../interfaces/interface';

interface CreateApiI {
    path: 'garage' | 'winners';
    body: Omit<CarI | WinnerI, 'id'>;
}

export default function createApi(props: CreateApiI): Promise<void> {
    return fetch(`http://localhost:3000/${props.path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props.body),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to create data');
            }
        })
        .catch((error: Error) => {
            throw new Error(error.message);
        });
}
