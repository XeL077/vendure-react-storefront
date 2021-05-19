// Объявляем, что в window.cfg будут лежать данные
declare global {
    interface Window {
        cfgStore: {
            getCfg: (alias: string) => Object;
            subscribe: (alias: string, callback: () => void) => void;
        }
    }
}

export class CfgImpl {

    static get<T extends Object>(alias: string): T {
        return window.cfgStore.getCfg(alias) as T;
    }

    static subscribe(alias: string, callback: () => void): void {
        window.cfgStore.subscribe(alias, callback);
    }

}
