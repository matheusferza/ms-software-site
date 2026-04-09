import classNames from 'classnames';

import { useEffect, useRef, useState } from 'react';

import { Annotated } from '@/components/Annotated';
import { iconMap } from '@/components/svgs';
import Link from '../Link';

export default function Action(props) {
    const {
        type,
        elementId,
        className,
        label,
        altText,
        url,
        showIcon,
        icon,
        iconPosition = 'right',
        style = 'primary',
        styles = {},
        ...rest
    } = props;
    const customClassName = styles?.self?.class || props.class;
    const IconComponent = icon ? iconMap[icon] : null;
    const mediaUrl = typeof url === 'string' ? url : '';
    const isPreviewableMedia = /^\/(?!\/).+\.(pdf|png|jpe?g|webp|gif|svg)$/i.test(mediaUrl);

    const baseClasses = ['relative lg:whitespace-nowrap'];
    if (type === 'Button') {
        baseClasses.push('action-button');
        baseClasses.push(style === 'secondary' ? 'action-button-secondary' : 'action-button-primary');
    } else {
        baseClasses.push('action-link');
    }

    return (
        <Annotated content={props}>
            {isPreviewableMedia ? (
                <PreviewableMediaAction
                    url={mediaUrl}
                    label={label}
                    altText={altText}
                    className={classNames(baseClasses, className, customClassName)}
                    showIcon={showIcon}
                    IconComponent={IconComponent}
                    iconPosition={iconPosition}
                />
            ) : (
                <Link
                    href={url}
                    aria-label={altText}
                    id={elementId || null}
                    className={classNames(baseClasses, className, customClassName)}
                    {...rest}
                >
                    {showIcon && IconComponent && iconPosition === 'left' && (
                        <IconComponent className="fill-current h-icon w-icon" />
                    )}
                    {label}
                    {showIcon && IconComponent && iconPosition === 'right' && (
                        <IconComponent className="fill-current h-icon w-icon" />
                    )}
                </Link>
            )}
        </Annotated>
    );
}

function PreviewableMediaAction({ url, label, altText, className, showIcon, IconComponent, iconPosition }) {
    const [isOpen, setIsOpen] = useState(false);
    const scrollPositionRef = useRef(0);
    const previousBodyOverflowRef = useRef('');
    const isPdf = /\.pdf$/i.test(url);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        scrollPositionRef.current = window.scrollY;
        previousBodyOverflowRef.current = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousBodyOverflowRef.current;
            window.requestAnimationFrame(() => {
                window.scrollTo({ top: scrollPositionRef.current });
            });
        };
    }, [isOpen]);

    return (
        <>
            <button
                type="button"
                aria-label={altText || label}
                className={classNames(className, 'cursor-pointer')}
                onClick={() => setIsOpen(true)}
            >
                {showIcon && IconComponent && iconPosition === 'left' && (
                    <IconComponent className="fill-current h-icon w-icon" />
                )}
                {label}
                {showIcon && IconComponent && iconPosition === 'right' && (
                    <IconComponent className="fill-current h-icon w-icon" />
                )}
            </button>

            {isOpen && (
                <div className="media-preview-overlay" role="dialog" aria-modal="true" aria-label={label || 'Prévia de mídia'}>
                    <button
                        type="button"
                        className="media-preview-backdrop"
                        aria-label="Fechar visualização"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="media-preview-shell">
                        <div className="media-preview-toolbar">
                            <div>
                                <p className="media-preview-label">Visualização</p>
                                <h3 className="media-preview-title">{label || 'Certificado'}</h3>
                            </div>
                            <div className="media-preview-actions">
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="action-button action-button-secondary"
                                >
                                    Abrir em nova aba
                                </a>
                                <button
                                    type="button"
                                    className="action-button action-button-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>

                        <div className="media-preview-frame">
                            {isPdf ? (
                                <iframe
                                    src={`${url}#toolbar=0&navpanes=0&scrollbar=1&zoom=page-fit`}
                                    title={label || 'Certificado'}
                                    className="media-preview-pdf"
                                />
                            ) : (
                                <img src={url} alt={altText || label || 'Imagem em destaque'} className="media-preview-image" />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
