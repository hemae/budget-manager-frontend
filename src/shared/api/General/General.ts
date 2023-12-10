import {Services} from './services'


export class General {

    public static getBackendUrl() {
        return Services.backendUrl + '/api'
    }
}
