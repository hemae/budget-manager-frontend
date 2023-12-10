import React, { PropsWithChildren } from 'react';

export type ReactHOC<WrapperProps extends PropsWithChildren<{}> = PropsWithChildren<{}>> = <ComponentProps>(
    Component: React.FC<PropsWithChildren<ComponentProps>>,
) => React.FC<ComponentProps & WrapperProps>;

export const emptyFunc = (() => undefined) as () => void;
export const emptyAsyncFunc = (() => new Promise(() => undefined)) as () => Promise<void>;

export type MouseHandler<Element extends HTMLElement = any> = React.MouseEventHandler<Element> | (() => void);
