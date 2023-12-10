import React from 'react';

export function getPercentageWidth(flexParts: number, flex: number = 1): React.CSSProperties {
    const percentageWidth = (100 * flex) / flexParts;
    return {
        maxWidth: `${percentageWidth}%`,
        minWidth: `${percentageWidth}%`,
    };
}
