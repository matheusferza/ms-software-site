import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { Action } from '@/components/atoms';
import { DynamicComponent } from '@/components/components-registry';
import FormBlock from '@/components/molecules/FormBlock';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function ContactSection(props) {
    const {
        elementId,
        colors,
        backgroundSize,
        title,
        text,
        form,
        media,
        styles = {},
        actions = [],
        kicker,
        formHeading,
        formText
    } = props as any;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    const resolvedKicker = kicker || 'Contato';
    const resolvedFormHeading = formHeading || 'Solicite um contato comercial';
    const resolvedFormText =
        formText || 'Retornaremos com foco em clareza, viabilidade e próximos passos para o seu contexto.';

    return (
        <Section elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            <div className={classNames('contact-grid', mapFlexDirectionStyles(styles.self?.flexDirection ?? 'row'))}>
                <div className={classNames('section-panel contact-copy', mapStyles({ textAlign: sectionAlign }))}>
                    {title && <div className="section-kicker">{resolvedKicker}</div>}
                    {title && <h2 className="section-title">{title}</h2>}
                    {text && (
                        <Markdown
                            options={{ forceBlock: true, forceWrapper: true }}
                            className={classNames(
                                'max-w-none prose sm:prose-lg',
                                mapStyles({ textAlign: sectionAlign }),
                                {
                                    'mt-4': title
                                }
                            )}
                        >
                            {text}
                        </Markdown>
                    )}
                    {actions?.length > 0 && (
                        <div
                            className={classNames('mt-8 flex flex-wrap items-center gap-4', {
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
                {(form || media) && (
                    <div className="section-panel contact-form-shell">
                        {form && (
                            <>
                                <h3>{resolvedFormHeading}</h3>
                                <p>{resolvedFormText}</p>
                                <FormBlock {...form} className={classNames({ 'mt-8': title || text || actions?.length > 0 })} />
                            </>
                        )}
                        {media && (
                            <div
                                className={classNames('mt-8 flex w-full', {
                                    'justify-center': sectionAlign === 'center',
                                    'justify-end': sectionAlign === 'right'
                                })}
                            >
                                <ContactMedia media={media} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Section>
    );
}

function ContactMedia({ media }) {
    return <DynamicComponent {...media} />;
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
            return 'flex-col lg:flex-row lg:items-center';
    }
}
