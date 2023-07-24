export type TrainCharacteristics = Record<characteristicsNames , characteristicsValues>;

export type characteristicsNames = 'speed' | 'force' | 'engineAmperage';

interface characteristicsValues{
   value: number;
   notValidate?: boolean;
}

export interface ITrainCharacteristics{
   speed: number
   force: number
   engineAmperage: number
}

export interface ITrainInfo {
   name: string;
   description:string;
   characteristics: ITrainCharacteristics[];
};

export type TrainsDataType = ITrainInfo[];

export interface IAction{
   type: string;
   payload?: any;
};

export interface ITrainDataReducerState{
   data: TrainsDataType;
   error: unknown;
   currentCharacteristics: TrainCharacteristics[];
   isAllValidate: boolean;
   currentTrain: string
};

export interface IStore {
   trainData: ITrainDataReducerState;
};
