import { CarAnimationI, StartEngineI } from '../interfaces/interface';

export type PathType = 'garage' | 'winners';

export type CarModels = {
    [key: string]: string[];
};

export type CarEngineStatusType = 'started' | 'stopped' | 'drive';

export type CarEngineControlType = {
    velocity: number;
    distance: number;
};

type CarEngineDriveType = {
    success: true;
};

export type CarEngine = CarEngineControlType | CarEngineDriveType;

export type AnimationType = StartEngineI & CarAnimationI;
