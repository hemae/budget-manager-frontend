import { combineQuery, parseQuery, Query } from '../../../utils';
import { useCallback } from 'react';
import { SetQuery } from './interfaces';
import { useLocation } from 'react-router-dom';

type QueryFlow = [
    /** parser query*/
    Query,
    /** browser query string setter*/
    SetQuery,
];

export function useQuery(): QueryFlow {
    const { pathname } = useLocation();

    const setQuery = useCallback<SetQuery>(
        (fieldName, value) => {
            const currentQuery = parseQuery(window.location.search);
            currentQuery[fieldName] = value;
            // eslint-disable-next-line no-restricted-globals
            history.pushState('', '', combineQuery(currentQuery));
        },
        [pathname],
    );

    return [parseQuery(window.location.search), setQuery];
}
