import carDriveApi from '../api/carDriveApi';
import CarEngineApi from '../api/carEngineApi';
import { CarEngineEnum } from '../enums/enum';

export default async function carAnimation(
    carId: number,
    car: HTMLDivElement,
    carSpeed: number,
    containerWidth: number,
    animationID: number,
    setAnimationIDFunc: (animId: number) => void
) {
    let currentPoint = 0;

    const stopCar = () => {
        cancelAnimationFrame(animationID);
        CarEngineApi(carId, CarEngineEnum.STOP);
    };

    const animation = () => {
        currentPoint += carSpeed;
        car.style.transform = `translateX(${currentPoint}px)`;
        const carWidth = currentPoint + car.offsetWidth;

        if (carWidth < containerWidth) {
            animationID = requestAnimationFrame(animation);
            setAnimationIDFunc(animationID);
        }
        if (carWidth >= containerWidth) {
            stopCar();
        }
    };

    animation();

    carDriveApi(carId)
        .then((driveResponse) => {
            if (driveResponse.status === 500) {
                stopCar();
            }
        })
        .catch((error: Error) => {
            throw new Error(error.message);
        });
}
