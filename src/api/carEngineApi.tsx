import { CarEngineControlType, CarEngineStatusType } from '../types/type';

export default async function CarEngineApi(
    carId: number,
    status: CarEngineStatusType
): Promise<CarEngineControlType> {
    try {
        const response = await fetch(
            `http://localhost:3000/engine?id=${carId}&status=${status}`,
            { method: 'PATCH' }
        );
        const data = await response.json();

        return data;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}
