import carDriveApi from '../api/carDriveApi';
import CarEngineApi from '../api/carEngineApi';
import { CarEngineEnum } from '../enums/enum';
import { AnimationType } from '../types/type';

export default async function carAnimation(props: AnimationType) {
    const { carData, carSpeed, car, containerWidth, setAnimationIDFunc } =
        props;
    const carId = carData.id!;
    let currentPoint = 0;
    let animationID = 0;

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
