import classNames from 'classnames';
import dayjs from 'dayjs';

import { Action, Link } from '@/components/atoms';
import ImageBlock from '@/components/molecules/ImageBlock';
import ArrowUpRightIcon from '@/components/svgs/arrow-up-right';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function ProjectFeedSection(props) {
    const {
        elementId,
        colors,
        variant = 'variant-a',
        title,
        subtitle,
        actions = [],
        styles = {},
        kicker = 'Projetos',
        ...rest
    } = props as any;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {(title || subtitle) && (
                <div className={classNames('section-heading', mapStyles({ textAlign: sectionAlign }))}>
                    <div className="section-heading-copy">
                        {title && <div className="section-kicker">{kicker}</div>}
                        {title && <h2 className="section-title">{title}</h2>}
                        {subtitle && <p className={classNames('section-subtitle', { 'mt-4': title })}>{subtitle}</p>}
                    </div>
                </div>
            )}
            {variant === 'variant-d' ? (
                <ProjectList {...rest} hasTopMargin={!!(title || subtitle)} headingLevel={title ? 'h3' : 'h2'} />
            ) : (
                <ProjectGrid
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

function ProjectGrid(props) {
    const {
        variant,
        projects = [],
        showDate,
        showDescription,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (projects.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('project-feed-grid grid gap-y-8', {
                'md:grid-cols-2': variant === 'variant-a',
                'md:grid-cols-3': variant === 'variant-b',
                'justify-center': variant === 'variant-c',
                'gap-x-6 lg:gap-x-8': variant !== 'variant-c',
                'mt-12': hasTopMargin
            })}
        >
            {projects.map((project, index) => (
                <Link key={index} href={project} className="feed-card-link block max-w-3xl">
                    <article className="feed-card h-full">
                        {showFeaturedImage && project.featuredImage && (
                            <div className="feed-card-image w-full aspect-3/2">
                                <ImageBlock {...project.featuredImage} className="object-cover w-full h-full" />
                            </div>
                        )}
                        <div className="flex grow flex-col">
                            <ProjectMeta project={project} showDate={showDate} className="premium-card-meta mb-3" />
                            <TitleTag className="premium-card-title">{project.title}</TitleTag>
                            {showDescription && project.description && (
                                <p className="mt-5 text-lg text-white/78">{project.description}</p>
                            )}
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

function ProjectList(props) {
    const {
        projects = [],
        showDate,
        showDescription,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (projects.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('project-feed-list grid gap-y-8', {
                'mt-12': hasTopMargin
            })}
        >
            {projects.map((project, index) => (
                <Link key={index} href={project} className="feed-card-link block">
                    <article className="feed-card feed-card-list">
                        <div className="flex flex-col gap-8 md:flex-row md:items-center">
                            {showFeaturedImage && project.featuredImage && (
                                <div className="md:shrink-0 md:self-stretch md:w-48">
                                    <div className="feed-card-image w-full aspect-3/2 md:min-h-full">
                                        <ImageBlock {...project.featuredImage} className="object-cover w-full h-full" />
                                    </div>
                                </div>
                            )}
                            <div className="md:grow">
                                <ProjectMeta project={project} showDate={showDate} className="premium-card-meta mb-3" />
                                <TitleTag className="premium-card-title">{project.title}</TitleTag>
                                {showDescription && project.description && (
                                    <p className="mt-5 text-lg text-white/78">{project.description}</p>
                                )}
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

function ProjectMeta({ project, showDate, className = '' }) {
    if (!project?.client && !(showDate && project?.date)) {
        return null;
    }

    return (
        <div className={className}>
            {project?.client}
            {project?.client && showDate && project?.date ? ' | ' : ''}
            {showDate && project?.date ? <ProjectDate date={project.date} /> : null}
        </div>
    );
}

function ProjectDate({ date }) {
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    return <time dateTime={dateTimeAttr}>{formattedDate}</time>;
}
