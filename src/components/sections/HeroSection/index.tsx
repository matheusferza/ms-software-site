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

    return (
        <Section elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            <div
                className={classNames(
                    'hero-shell',
                    hasBackgroundMedia ? 'hero-shell-background' : mapFlexDirectionStyles(sectionFlexDirection)
                )}
            >
                {hasBackgroundMedia && (
                    <div className="hero-background-media" aria-hidden="true">
                        <HeroMedia media={media} />
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
                        <HeroMedia media={media} />
                    </div>
                )}
            </div>
        </Section>
    );
}

function HeroMedia({ media }) {
    const mediaClassName = classNames({
        'hero-media-image': media.type === 'ImageBlock',
        'hero-media-video': media.type === 'VideoBlock'
    });

    return (
        <div className="hero-media-shell w-full">
            <DynamicComponent {...media} className={mediaClassName} />
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
