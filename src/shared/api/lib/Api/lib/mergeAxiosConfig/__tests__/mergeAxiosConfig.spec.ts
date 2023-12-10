import { AxiosRequestConfig } from 'axios';
import { mergeAxiosConfig } from '../mergeAxiosConfig';

const mockQuery: AxiosRequestConfig['params'] = {
    query_1: 'query_1',
};

const mockHeaders: AxiosRequestConfig['headers'] = {
    Authorization: 'Bearer Authorization',
};

const emptyMockConfig: AxiosRequestConfig = {};

const mockConfigParams: AxiosRequestConfig['params'] = {
    query_2: 'query_2',
};

const mockConfigHeaders: AxiosRequestConfig['headers'] = {
    'User-Agent': 'User-Agent',
};

const setMockConfig = {
    ...emptyMockConfig,
    params: mockConfigParams,
    headers: mockConfigHeaders,
};

const expected: Record<string, AxiosRequestConfig> = {
    case_1: emptyMockConfig,
    case_2: setMockConfig,
    case_3: {
        ...emptyMockConfig,
        params: mockQuery,
    },
    case_4: {
        ...emptyMockConfig,
        headers: mockHeaders,
    },
    case_5: {
        ...emptyMockConfig,
        params: mockQuery,
        headers: mockHeaders,
    },
    case_6: {
        ...setMockConfig,
        params: {
            ...setMockConfig.params,
            ...mockQuery,
        },
    },
    case_7: {
        ...setMockConfig,
        headers: {
            ...setMockConfig.headers,
            ...mockHeaders,
        },
    },
    case_8: {
        ...setMockConfig,
        params: {
            ...setMockConfig.params,
            ...mockQuery,
        },
        headers: {
            ...setMockConfig.headers,
            ...mockHeaders,
        },
    },
};

describe('mergeAxiosConfig function', () => {
    it('mergeAxiosConfig | only empty mockConfig | case 1', () => {
        expect(
            mergeAxiosConfig({
                config: emptyMockConfig,
            }),
        ).toBe(expected.case_1);
    });

    it('mergeAxiosConfig | only set mockConfig | case 2', () => {
        expect(
            mergeAxiosConfig({
                config: setMockConfig,
            }),
        ).toBe(expected.case_2);
    });

    it('mergeAxiosConfig | empty mockConfig with query only | case 3', () => {
        expect(
            mergeAxiosConfig({
                config: emptyMockConfig,
                query: mockQuery,
            }),
        ).toStrictEqual(expected.case_3);
    });

    it('mergeAxiosConfig | empty mockConfig with headers only | case 4', () => {
        expect(
            mergeAxiosConfig({
                config: emptyMockConfig,
                headers: mockHeaders,
            }),
        ).toStrictEqual(expected.case_4);
    });

    it('mergeAxiosConfig | empty mockConfig with query and headers | case 5', () => {
        expect(
            mergeAxiosConfig({
                config: emptyMockConfig,
                query: mockQuery,
                headers: mockHeaders,
            }),
        ).toStrictEqual(expected.case_5);
    });

    it('mergeAxiosConfig | set mockConfig with query only | case 6', () => {
        expect(
            mergeAxiosConfig({
                config: setMockConfig,
                query: mockQuery,
            }),
        ).toStrictEqual(expected.case_6);
    });

    it('mergeAxiosConfig | set mockConfig with headers only | case 7', () => {
        expect(
            mergeAxiosConfig({
                config: setMockConfig,
                headers: mockHeaders,
            }),
        ).toStrictEqual(expected.case_7);
    });

    it('mergeAxiosConfig | set mockConfig with query and headers | case 8', () => {
        expect(
            mergeAxiosConfig({
                config: setMockConfig,
                query: mockQuery,
                headers: mockHeaders,
            }),
        ).toStrictEqual(expected.case_8);
    });
});
