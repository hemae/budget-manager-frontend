import React from 'react';

export interface SimpleHeaderProps {
    /** Title og header*/
    headerTitle?: React.ReactNode;
    /** Link to info source*/
    infoLink?: string;
    /** default: true, openSourceInNewTab = true opens source page in new tab*/
    openSourceInNewTab?: boolean;
    /** header block class name*/
    className?: string;
    /** header title class name (tag h2)*/
    headerClassName?: string;
    /** info link class name*/
    infoLinkClassName?: string;
    /** handler for expand click*/
    onExpand?: () => void;
    /** default: false, expanded flag*/
    expanded?: boolean;
    /** create entity button */
    onAdd?: () => void;
}
