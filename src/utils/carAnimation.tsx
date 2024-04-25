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
    const startTime = performance.now();
    const animation = () => {
        currentPoint += carSpeed;
        car.style.transform = `translateX(${currentPoint}px)`;
        const carWidth = currentPoint + car.offsetWidth;

        if (carWidth < containerWidth) {
            animationID = requestAnimationFrame(animation);
            setAnimationIDFunc(animationID);
        }
        if (carWidth >= containerWidth) {
            if (props.isRace) {
                const endTime = performance.now();
                const timeTaken = endTime - startTime;
                const timeInSeconds = Number((timeTaken / 1000).toFixed(2));
                props.setWinnerCar((prevCars) => {
                    if (!prevCars.length) {
                        return [
                            {
                                id: props.carData.id!,
                                name: props.carData.name,
                                time: timeInSeconds,
                            },
                        ];
                    }
                    return prevCars;
                });
            }
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
