import React, {useId, useMemo} from 'react'
import { InfoLink } from '../InfoLink';
import { SimpleHeaderProps } from './interfaces';
import classNames from 'classnames';
import { FaExpand, FaCompress } from 'react-icons/fa';
import { Tooltip } from '../Tooltip';
import './SimpleHeader.scss';

export const SimpleHeader: React.FC<React.PropsWithChildren<SimpleHeaderProps>> = (props) => {
    const {
        className,
        headerClassName,
        infoLinkClassName,
        headerTitle,
        infoLink,
        openSourceInNewTab = true,
        onExpand,
        expanded = false,
        children,
    } = props;

    const id = useId()

    const Icon = useMemo(() => {
        return expanded ? FaCompress : FaExpand;
    }, [expanded]);

    return (
        <div className={classNames('ui-simple-header', className)}>
            <div className='ui-simple-header__title-wrapper'>
                <h2 className={classNames('ui-simple-header__title', headerClassName)}>{headerTitle}</h2>
                {infoLink && (
                    <InfoLink
                        url={infoLink}
                        className={classNames('ui-simple-header__info-link', infoLinkClassName)}
                        theSameTab={!openSourceInNewTab}
                    />
                )}
                {onExpand && (
                    <>
                        <Icon
                            data-tooltip-id={id}
                            className='ui-simple-header__expand-button'
                            onClick={onExpand}
                        />
                        <Tooltip
                            id={id}
                            place='bottom'
                            content={expanded ? 'Compress' : 'Expand'}
                        />
                    </>
                )}
            </div>
            <div className='ui-simple-header__filter-content'>
                {children}
            </div>
        </div>
    );
};
