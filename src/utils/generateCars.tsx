import createApi from '../api/createApi';
import carsModels from '../data/carModels';

export default async function generateCars() {
    const promises = [];

    for (let i = 0; i < 100; i += 1) {
        const carMarks = Object.keys(carsModels) as string[];
        const randomCarMarkIndex = Math.floor(Math.random() * carMarks.length);
        const randomCarMark = carMarks[randomCarMarkIndex];

        const randomCarModelIndex = Math.floor(
            Math.random() * carsModels[randomCarMark].length
        );
        const randomCarModel = carsModels[randomCarMark][randomCarModelIndex];

        const randomCarColor = Math.floor(Math.random() * 16777215);

        const carName = `${randomCarMark} ${randomCarModel}`;
        const carColor = `#${randomCarColor.toString(16).padStart(6, '0')}`;

        const promise = createApi({
            path: 'garage',
            body: { name: carName, color: carColor },
        });

        promises.push(promise);
    }

    await Promise.all(promises);
}
