import CarEngineApi from '../api/carEngineApi';
import { CarEngineStatusType } from '../types/type';

export default async function calculateCarSpeed(
    containerWidth: number,
    carId: number,
    status: CarEngineStatusType
): Promise<number> {
    const { velocity, distance } = await CarEngineApi(carId, status);

    if (status === 'stopped') {
        return velocity;
    } else {
        const time = distance / velocity;

        const carSpeed = containerWidth / time;
        const speedUp = 20;
        return carSpeed * speedUp;
    }
}
