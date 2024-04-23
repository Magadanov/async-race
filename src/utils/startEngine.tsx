import { CarEngineEnum } from '../enums/enum';
import calculateCarSpeed from './calculateCarSpeed';
import carAnimation from './carAnimation';

export default async function startEngine(
    carId: number,
    raceContainer: HTMLDivElement,
    car: HTMLDivElement
) {
    const containerWidth = raceContainer.offsetWidth;

    const carSpeed = await calculateCarSpeed(
        containerWidth,
        carId,
        CarEngineEnum.START
    );

    carAnimation(carId, car, carSpeed, containerWidth);
}
