import { AxiosRequestConfig } from 'axios';
import jsCookie from 'js-cookie'

interface Options {
    query?: AxiosRequestConfig['params'];
    headers?: AxiosRequestConfig['headers'];
    config?: AxiosRequestConfig;
}

export function mergeAxiosConfig(options: Options): AxiosRequestConfig {
    const { query, headers, config = {} } = options;

    if (!config['headers']) {
        config['headers'] = {}
    }

    config['headers'] = {
        ...config['headers'],
        'Authorization': `Bearer ${jsCookie.get('jwt')}`,
    }

    if (query || headers) {
        let resultConfig = { ...config };
        if (query)
            resultConfig = {
                ...resultConfig,
                params: {
                    ...resultConfig.params,
                    ...query,
                },
            };
        if (headers)
            resultConfig = {
                ...resultConfig,
                headers: {
                    ...resultConfig.headers,
                    ...headers,
                },
            };

        return resultConfig;
    }

    return config;
}
