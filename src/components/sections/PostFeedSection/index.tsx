import classNames from 'classnames';
import dayjs from 'dayjs';

import { Action, Link } from '@/components/atoms';
import ImageBlock from '@/components/molecules/ImageBlock';
import ArrowUpRightIcon from '@/components/svgs/arrow-up-right';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function PostFeedSection(props) {
    const { elementId, colors, variant = 'variant-a', title, subtitle, actions = [], styles = {}, ...rest } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {(title || subtitle) && (
                <div className={classNames('section-heading', mapStyles({ textAlign: sectionAlign }))}>
                    <div className="section-heading-copy">
                        {title && <div className="section-kicker">Conteúdo</div>}
                        {title && <h2 className="section-title">{title}</h2>}
                        {subtitle && <p className={classNames('section-subtitle', { 'mt-4': title })}>{subtitle}</p>}
                    </div>
                </div>
            )}
            {variant === 'variant-d' ? (
                <PostList {...rest} hasTopMargin={!!(title || subtitle)} headingLevel={title ? 'h3' : 'h2'} />
            ) : (
                <PostGrid
                    {...rest}
                    variant={variant}
                    hasTopMargin={!!(title || subtitle)}
                    headingLevel={title ? 'h3' : 'h2'}
                />
            )}
            {actions?.length > 0 && (
                <div
                    className={classNames(
                        'flex flex-wrap items-center gap-4 mt-10',
                        sectionAlign === 'center' ? 'justify-center' : 'justify-end'
                    )}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} />
                    ))}
                </div>
            )}
        </Section>
    );
}

function PostGrid(props) {
    const {
        variant,
        posts = [],
        showDate,
        showAuthor,
        showExcerpt,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (posts.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('grid gap-y-8', {
                'md:grid-cols-2': variant === 'variant-a',
                'md:grid-cols-3': variant === 'variant-b',
                'justify-center': variant === 'variant-c',
                'gap-x-6 lg:gap-x-8': variant !== 'variant-c',
                'mt-12': hasTopMargin
            })}
        >
            {posts.map((post, index) => (
                <Link key={index} href={post} className="feed-card-link block max-w-3xl">
                    <article className="feed-card h-full">
                        {showFeaturedImage && post.featuredImage && (
                            <div className="feed-card-image w-full aspect-3/2">
                                <ImageBlock {...post.featuredImage} className="object-cover w-full h-full" />
                            </div>
                        )}
                        <div className="flex grow flex-col">
                            <PostAttribution
                                showDate={showDate}
                                showAuthor={showAuthor}
                                date={post.date}
                                author={post.author}
                                className="premium-card-meta mb-3"
                            />
                            <TitleTag className="premium-card-title">{post.title}</TitleTag>
                            {showExcerpt && post.excerpt && <p className="mt-5 text-lg text-white/78">{post.excerpt}</p>}
                        </div>
                        {showReadMoreLink && (
                            <div className="mt-6">
                                <span className="premium-card-arrow">
                                    <ArrowUpRightIcon className="fill-current w-icon h-icon" />
                                </span>
                            </div>
                        )}
                    </article>
                </Link>
            ))}
        </div>
    );
}

function PostList(props) {
    const {
        posts = [],
        showDate,
        showAuthor,
        showExcerpt,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (posts.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('grid gap-y-8', {
                'mt-12': hasTopMargin
            })}
        >
            {posts.map((post, index) => (
                <Link key={index} href={post} className="feed-card-link block">
                    <article className="feed-card">
                        <div className="flex flex-col gap-8 md:flex-row md:items-center">
                            {showFeaturedImage && post.featuredImage && (
                                <div className="md:shrink-0 md:self-stretch md:w-48">
                                    <div className="feed-card-image w-full aspect-3/2 md:min-h-full">
                                        <ImageBlock {...post.featuredImage} className="object-cover w-full h-full" />
                                    </div>
                                </div>
                            )}
                            <div className="md:grow">
                                <PostAttribution
                                    showDate={showDate}
                                    showAuthor={showAuthor}
                                    date={post.date}
                                    author={post.author}
                                    className="premium-card-meta mb-3"
                                />
                                <TitleTag className="premium-card-title">{post.title}</TitleTag>
                                {showExcerpt && post.excerpt && <p className="mt-5 text-lg text-white/78">{post.excerpt}</p>}
                            </div>
                            {showReadMoreLink && (
                                <div className="md:mx-4">
                                    <span className="premium-card-arrow">
                                        <ArrowUpRightIcon className="fill-current w-icon h-icon" />
                                    </span>
                                </div>
                            )}
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
}

function PostAttribution({ showDate, showAuthor, date, author, className = '' }) {
    if (!showDate && !(showAuthor && author)) {
        return null;
    }
    return (
        <div className={className}>
            {showDate && (
                <time dateTime={dayjs(date).format('YYYY-MM-DD HH:mm:ss')}>{dayjs(date).format('YYYY-MM-DD')}</time>
            )}
            {showAuthor && author && (
                <>
                    {showDate && ' | '}
                    {author.firstName} {author.lastName}
                </>
            )}
        </div>
    );
}
