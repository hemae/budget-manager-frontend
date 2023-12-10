import React, { useCallback } from 'react';

interface HeaderCellActionProps {
    icon: React.ReactNode;
    action?: (() => void) | (() => Promise<void>);
}

export const HeaderCellAction: React.FC<HeaderCellActionProps> = (props) => {
    const { icon, action } = props;

    const onClick = useCallback(() => {
        action?.();
    }, [action]);

    return (
        <span
            className='ui-table-header-cell-action'
            onClick={onClick}
        >
            {icon}
        </span>
    );
};
