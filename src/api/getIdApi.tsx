import { CarI, WinnerI } from '../interfaces/interface';

export default async function getIdApi(
    path: string,
    id: number
): Promise<CarI | WinnerI | undefined> {
    try {
        const response = await fetch(`http://localhost:3000/${path}/${id}`);
        if (!response.ok) {
            return undefined;
        }
        const data = (await response.json()) as CarI | WinnerI;
        return data;
    } catch {
        throw new Error();
    }
}
