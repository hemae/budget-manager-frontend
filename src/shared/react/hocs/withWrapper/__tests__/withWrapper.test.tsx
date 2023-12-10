import React from 'react';
import { render, screen } from '@testing-library/react';
import { withWrapper } from '../withWrapper';

interface WrapperProps
    extends React.PropsWithChildren<{
        wrapperProp: string;
    }> {}

const Wrapper: React.FC<WrapperProps> = (props) => {
    const { wrapperProp, children } = props;

    return (
        <>
            <span>{wrapperProp}</span>
            {children}
        </>
    );
};

interface ComponentProps {
    componentProp: string;
}

const Component: React.FC<ComponentProps> = (props) => {
    const { componentProp } = props;

    return (
        <>
            <span>{componentProp}</span>
        </>
    );
};

const wrapperProp = 'Wrapper';
const componentProp = 'Component';

describe('withWrapper tests', () => {
    it('withWrapper works', () => {
        const withWrapperHOC = withWrapper(Wrapper);
        const ComponentWithWrapper = withWrapperHOC(Component);

        render(
            <ComponentWithWrapper
                wrapperProp={wrapperProp}
                componentProp={componentProp}
            />,
        );
        expect(screen.getByText(wrapperProp)).toBeInTheDocument();
        expect(screen.getByText(componentProp)).toBeInTheDocument();
    });
});
