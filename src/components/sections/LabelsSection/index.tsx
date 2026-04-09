import classNames from 'classnames';

import { Annotated } from '@/components/Annotated';
import { Link } from '@/components/atoms';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function LabelsSection(props) {
    const { elementId, colors, title, subtitle, items = [], styles = {} } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            <div className={classNames('section-panel copy-panel', mapStyles({ textAlign: sectionAlign }))}>
                {title && <h2 className="section-title">{title}</h2>}
                {subtitle && (
                    <p
                        className={classNames('section-subtitle', {
                            'mt-4': title
                        })}
                    >
                        {subtitle}
                    </p>
                )}
                {items.length > 0 && (
                    <div
                        className={classNames('flex flex-wrap gap-4', {
                            'mt-10': title || subtitle,
                            'justify-center': sectionAlign === 'center',
                            'justify-end': sectionAlign === 'right'
                        })}
                    >
                        {items.map((item, index) => (
                            <LabelItem key={index} {...item} />
                        ))}
                    </div>
                )}
            </div>
        </Section>
    );
}

function LabelItem(props) {
    const { label, url } = props;
    if (!label) {
        return null;
    }

    return (
        <Annotated content={props}>
            {url ? (
                <Link
                    href={url}
                    className="inline-flex relative text-lg leading-tight no-underline transition rounded-full py-4 px-5 border-2 border-current hover:bottom-shadow-6 hover:-translate-y-1.5"
                >
                    {label}
                </Link>
            ) : (
                <div className="inline-flex px-5 py-4 text-lg leading-tight border-2 border-current rounded-full">
                    {label}
                </div>
            )}
        </Annotated>
    );
}
