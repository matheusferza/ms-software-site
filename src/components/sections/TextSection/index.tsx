import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { DynamicComponent } from '@/components/components-registry';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function TextSection(props) {
    const { elementId, colors, variant = 'variant-a', styles = {}, media, mediaPlacement = 'right', ...rest } =
        props as any;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    const panelClass = styles.self?.class;
    const mediaClass = styles.self?.mediaClass;

    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {variant === 'variant-b' ? (
                <TextTwoCol
                    {...rest}
                    align={sectionAlign}
                    media={media}
                    mediaPlacement={mediaPlacement}
                    panelClass={panelClass}
                    mediaClass={mediaClass}
                />
            ) : (
                <TextOneCol {...rest} align={sectionAlign} media={media} panelClass={panelClass} mediaClass={mediaClass} />
            )}
        </Section>
    );
}

function TextOneCol(props) {
    const { title, subtitle, text, align, kicker = 'Apresentação', media, panelClass, mediaClass } = props as any;

    return (
        <div className={classNames('section-panel copy-panel', panelClass, mapStyles({ textAlign: align }))}>
            {title && <div className="section-kicker">{kicker}</div>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className={classNames('section-subtitle', { 'mt-3': title })}>{subtitle}</p>}
            {text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('max-w-none prose sm:prose-lg', {
                        'mt-6': title || subtitle
                    })}
                >
                    {text}
                </Markdown>
            )}
            {media && <TextSectionMedia media={media} className={classNames('mt-8', mediaClass)} />}
        </div>
    );
}

function TextTwoCol(props) {
    const {
        title,
        subtitle,
        text,
        align,
        kicker = 'Apresentação',
        media,
        mediaPlacement,
        panelClass,
        mediaClass
    } = props as any;

    return (
        <div
            className={classNames(
                'section-panel copy-panel text-section-split flex flex-wrap gap-6',
                panelClass,
                mapStyles({ textAlign: align }),
                {
                    'lg:flex-row-reverse': media && mediaPlacement === 'left'
                }
            )}
        >
            {(title || subtitle) && (
                <div className={classNames('w-full', { 'lg:flex-1': text || media })}>
                    {title && <div className="section-kicker">{kicker}</div>}
                    {title && <h2 className="section-title">{title}</h2>}
                    {subtitle && <p className={classNames('section-subtitle', { 'mt-3': title })}>{subtitle}</p>}
                </div>
            )}
            {text && (
                <div className={classNames('w-full', { 'lg:flex-1': media || title || subtitle })}>
                    <Markdown options={{ forceBlock: true, forceWrapper: true }} className="prose max-w-none sm:prose-lg">
                        {text}
                    </Markdown>
                </div>
            )}
            {media && (
                <div className="w-full lg:flex-1">
                    <TextSectionMedia media={media} className={mediaClass} />
                </div>
            )}
        </div>
    );
}

function TextSectionMedia({ media, className }) {
    return (
        <div className={classNames('text-section-media-frame', className)}>
            <DynamicComponent {...media} />
        </div>
    );
}
