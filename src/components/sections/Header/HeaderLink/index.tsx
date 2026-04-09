import classNames from 'classnames';

import { Annotated } from '@/components/Annotated';
import Link from '@/components/atoms/Link';
import { iconMap } from '@/components/svgs';

export default function HeaderLink(props) {
    const { elementId, className, label, altText, url, showIcon, icon, iconPosition = 'right', mobile = false, ...rest } =
        props;
    const IconComponent = icon ? iconMap[icon] : null;

    return (
        <Annotated content={props}>
            <Link
                href={url}
                aria-label={altText}
                id={elementId || null}
                {...rest}
                className={classNames(
                    'relative inline-flex items-center gap-1.5 no-underline',
                    mobile
                        ? 'justify-between text-left leading-snug normal-case tracking-normal'
                        : 'justify-center text-center leading-tight uppercase tracking-widest',
                    className
                )}
            >
                {label}
                {showIcon && IconComponent && (
                    <IconComponent
                        className={classNames('fill-current h-icon w-icon', {
                            'order-first': iconPosition === 'left'
                        })}
                    />
                )}
            </Link>
        </Annotated>
    );
}
