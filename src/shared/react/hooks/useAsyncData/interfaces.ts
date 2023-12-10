import { Dispatch, SetStateAction } from 'react';

export type HandleRefresh = () => void;

export interface Returned<T> {
    /** Data type that specified method returns: Promise<DataType>*/
    data: T;
    /** Data loading flag*/
    loading: boolean;
    /** Error arising while request failing*/
    error: any;
    /** Refreshes data*/
    handleRefresh: HandleRefresh;
    /** Function for data setting hardly*/
    setData: Dispatch<SetStateAction<T>>;
}
