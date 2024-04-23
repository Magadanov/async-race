import { CarEngineEnum } from '../enums/enum';
import calculateCarSpeed from './calculateCarSpeed';
import carAnimation from './carAnimation';

export default async function startEngine(
    carId: number,
    raceContainer: HTMLDivElement,
    car: HTMLDivElement,
    animationID: number,
    setAnimationIDFunc: (animId: number) => void
) {
    const containerWidth = raceContainer.offsetWidth;

    const carSpeed = await calculateCarSpeed(
        containerWidth,
        carId,
        CarEngineEnum.START
    );

    carAnimation(
        carId,
        car,
        carSpeed,
        containerWidth,
        animationID,
        setAnimationIDFunc
    );
}
