import {CfgImpl} from './CfgImplClient';

export interface ICfg<T> {
    get(): T
}

export function cfg<T extends Object>(name: string): ICfg<T> {
    return {
        get: () => {
            return CfgImpl.get<T>(name);
        }
    };
}