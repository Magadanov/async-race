import { CarEngineEnum } from '../enums/enum';

export default async function carDriveApi(carId: number): Promise<Response> {
    const response = await fetch(
        `http://localhost:3000/engine?id=${carId}&status=${CarEngineEnum.DRIVE}`,
        { method: 'PATCH' }
    );
    return response;
}
