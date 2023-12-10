import { useCallback, useEffect, useState } from 'react';
import { HandleRefresh, Returned } from './interfaces';

/** Use this function in Providers, hooks or components when need get async data */
export const useAsyncData = <T>(method: () => Promise<T>, initialData: T, deps: any[]): Returned<T> => {
    const [data, setData] = useState<T>(initialData);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [refreshFlag, setRefreshFlag] = useState<boolean>(false);

    useEffect(() => {
        (async function () {
            try {
                setLoading(true);
                setData(await method());
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        })();
    }, [...deps, refreshFlag]);

    const handleRefresh = useCallback<HandleRefresh>(() => {
        setRefreshFlag((prev) => !prev);
    }, [setRefreshFlag]);

    return {
        data,
        loading,
        error,
        setData,
        handleRefresh,
    };
};
