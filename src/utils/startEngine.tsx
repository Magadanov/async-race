import { CarEngineEnum } from '../enums/enum';
import { StartEngineI } from '../interfaces/interface';
import calculateCarSpeed from './calculateCarSpeed';
import carAnimation from './carAnimation';

export default async function startEngine(props: StartEngineI) {
    const { raceContainer } = props;
    const containerWidth = raceContainer.offsetWidth;
    const carId = props.carData.id!;

    const carSpeed = await calculateCarSpeed(
        containerWidth,
        carId,
        CarEngineEnum.START
    );

    carAnimation({ ...props, carSpeed, containerWidth });
}
