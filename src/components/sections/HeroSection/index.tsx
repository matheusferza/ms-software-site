import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { AnnotatedField } from '@/components/Annotated';
import { Action } from '@/components/atoms';
import { DynamicComponent } from '@/components/components-registry';
import { HeroSection } from '@/types';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

/*
 This is the only component in this codebase which has a few Stackbit annotations for specific primitive
 field. These are added by the <AnnotatedField> helper.
 The motivation for these annotations: allowing the content editor to edit styles at the field level.
 */
export default function Component(props: HeroSection) {
    const { elementId, colors, backgroundSize, title, subtitle, text, media, actions = [], styles = {} } = props;
    const sectionFlexDirection = styles.self?.flexDirection ?? 'row';
    const sectionAlign = styles.self?.textAlign ?? 'left';
    const hasBackgroundMedia = media?.type === 'VideoBlock';
    const customClassName = styles.self?.class;
    const shellClassName = styles.self?.shellClass;
    const mediaClassName = styles.self?.mediaClass;

    return (
        <Section elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            <div
                className={classNames(
                    'hero-shell',
                    shellClassName,
                    hasBackgroundMedia ? 'hero-shell-background' : mapFlexDirectionStyles(sectionFlexDirection)
                )}
            >
                {hasBackgroundMedia && (
                    <div className={classNames('hero-background-media', mediaClassName)} aria-hidden="true">
                        <HeroMedia media={media} className={mediaClassName} />
                    </div>
                )}
                <div
                    className={classNames(
                        hasBackgroundMedia ? 'hero-copy hero-copy-immersive' : 'hero-copy',
                        customClassName,
                        mapStyles({ textAlign: sectionAlign })
                    )}
                >
                    {subtitle && (
                        <AnnotatedField path=".subtitle">
                            <p className="hero-eyebrow">{subtitle}</p>
                        </AnnotatedField>
                    )}
                    {title && (
                        <AnnotatedField path=".title">
                            <h1 className="hero-title">{title}</h1>
                        </AnnotatedField>
                    )}
                    {text && (
                        <AnnotatedField path=".text">
                            <Markdown
                                options={{ forceBlock: true, forceWrapper: true }}
                                className={classNames('hero-description max-w-none prose sm:prose-lg', {
                                    'mt-6': title || subtitle
                                })}
                            >
                                {text}
                            </Markdown>
                        </AnnotatedField>
                    )}
                    {actions?.length > 0 && (
                        <div
                            className={classNames('hero-actions flex flex-wrap items-center gap-4', {
                                'justify-center': sectionAlign === 'center',
                                'justify-end': sectionAlign === 'right'
                            })}
                        >
                            {actions.map((action, index) => (
                                <Action key={index} {...action} />
                            ))}
                        </div>
                    )}
                </div>
                {!hasBackgroundMedia && media && (
                    <div
                        className={classNames('flex flex-1 w-full', {
                            'justify-center': sectionAlign === 'center'
                        })}
                    >
                        <HeroMedia media={media} className={mediaClassName} />
                    </div>
                )}
            </div>
        </Section>
    );
}

function HeroMedia({ media, className }) {
    const mediaElementClassName = classNames(
        {
            'hero-media-image': media.type === 'ImageBlock',
            'hero-media-video': media.type === 'VideoBlock'
        },
        media.className
    );

    return (
        <div className={classNames('hero-media-shell w-full', className)}>
            <DynamicComponent {...media} className={mediaElementClassName} />
        </div>
    );
}

function mapFlexDirectionStyles(flexDirection?: 'row' | 'row-reverse' | 'col' | 'col-reverse') {
    switch (flexDirection) {
        case 'row-reverse':
            return 'flex-col-reverse lg:flex-row-reverse lg:items-center';
        case 'col':
            return 'flex-col';
        case 'col-reverse':
            return 'flex-col-reverse';
        default:
            return 'flex-col';
    }
}
