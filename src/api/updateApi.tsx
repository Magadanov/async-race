import { CarI, WinnerI } from '../interfaces/interface';

interface UpdateApiI {
    id: number;
    path: 'garage' | 'winners';
    body: Omit<CarI | WinnerI, 'id'>;
}

export default function updateApi(props: UpdateApiI): Promise<void> {
    return fetch(`http://localhost:3000/${props.path}/${props.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(props.body),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to update data');
            }
        })
        .catch((error: Error) => {
            throw new Error(error.message);
        });
}
