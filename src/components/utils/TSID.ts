import {cfg} from "./cfg/Cfg";
import {IHash} from "./IHash";

const testIdConfig = cfg<{enabled: boolean}>('testId');

export class TSID {
    static attrName = 'data-tsid';

    static attr(str: string) {
        return true;
        // return testIdConfig.get().enabled ? str : undefined;
    }

    static assign(str: string, attrs: IHash<string | number> = {}) {
        if (testIdConfig.get().enabled) {
            return Object.assign({}, attrs, {
                [TSID.attrName]: str
            });
        }

        return attrs;
    }
}
