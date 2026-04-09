import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { Annotated } from '@/components/Annotated';
import Action from '@/components/atoms/Action';
import Link from '@/components/atoms/Link';
import ImageBlock from '@/components/molecules/ImageBlock';
import ArrowUpRightIcon from '@/components/svgs/arrow-up-right';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

export default function FeaturedItem(props) {
    const { elementId, title, subtitle, text, featuredImage, actions = [], styles = {}, headingLevel, url } = props;
    const { self = {} } = styles;
    const { borderWidth, ...otherSelfStyles } = self;
    const TitleTag = headingLevel;
    const cardContent = (
        <article
            id={elementId || null}
            className={classNames('premium-card overflow-hidden', mapStyles(otherSelfStyles))}
            style={{
                borderWidth: borderWidth ? `${borderWidth}px` : null
            }}
        >
            {featuredImage && (
                <div className="premium-card-image">
                    <ImageBlock {...featuredImage} className="inline-block" />
                </div>
            )}
            {subtitle && <p className="premium-card-meta">{subtitle}</p>}
            {title && <TitleTag className={classNames('premium-card-title', { 'mt-3': subtitle })}>{title}</TitleTag>}
            {text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('prose sm:prose-lg', {
                        'mt-4': title || subtitle
                    })}
                >
                    {text}
                </Markdown>
            )}
            {actions?.length > 0 && (
                <div
                    className={classNames('flex flex-wrap items-center gap-4', {
                        'justify-center': otherSelfStyles.textAlign === 'center',
                        'justify-end': otherSelfStyles.textAlign === 'right',
                        'mt-6': title || subtitle || text
                    })}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} />
                    ))}
                </div>
            )}
            {url && actions.length === 0 && (
                <span className="premium-card-arrow">
                    <ArrowUpRightIcon className="fill-current w-icon h-icon" />
                </span>
            )}
        </article>
    );

    return (
        <Annotated content={props}>
            {url && actions.length === 0 ? (
                <Link href={url} className="premium-card-link">
                    {cardContent}
                </Link>
            ) : (
                cardContent
            )}
        </Annotated>
    );
}
