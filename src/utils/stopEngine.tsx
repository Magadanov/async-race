import CarEngineApi from '../api/carEngineApi';
import { CarEngineEnum } from '../enums/enum';

export default function stopEngine(
    carId: number,
    car: HTMLDivElement,
    animationID: number
) {
    cancelAnimationFrame(animationID);

    car.style.transform = 'translateX(0px)';

    CarEngineApi(carId, CarEngineEnum.STOP);
}
