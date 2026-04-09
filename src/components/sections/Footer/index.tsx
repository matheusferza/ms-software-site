import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { Action } from '@/components/atoms';

export default function Footer(props) {
    const { primaryLinks = [], contacts, copyrightText, styles = {} } = props;
    const footerWidth = styles.self?.width ?? 'narrow';
    return (
        <footer className={classNames('relative', styles.self?.padding ?? 'py-16 px-4')}>
            <div
                className={classNames({
                    'max-w-7xl mx-auto': footerWidth === 'narrow',
                    'max-w-8xl mx-auto': footerWidth === 'wide'
                })}
            >
                <div className="footer-panel">
                    {primaryLinks.length > 0 && (
                        <div className={classNames(contacts ? 'w-full' : 'md:mr-auto')}>
                            <ul className="flex flex-wrap max-w-5xl gap-x-6 gap-y-3">
                                {primaryLinks.map((link, index) => (
                                    <li key={index}>
                                        <Action {...link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {contacts && <Contacts {...contacts} />}
                    {copyrightText && (
                        <div className={classNames('footer-meta', primaryLinks.length > 0 || contacts ? 'md:self-end' : null)}>
                            <Markdown
                                options={{ forceInline: true, forceWrapper: true, wrapper: 'p' }}
                                className="prose-sm prose uppercase"
                            >
                                {copyrightText}
                            </Markdown>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}

function Contacts(props) {
    const { phoneNumber, phoneAltText, email, emailAltText, address, addressAltText, elementId, title } = props;
    const phoneHref = phoneNumber?.replace(/[^\d+]/g, '');
    const emailHref = email?.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
    return (
        <div id={elementId || null} className="footer-contacts max-w-3xl prose sm:prose-lg">
            {title && <h3>{title}</h3>}
            {phoneNumber && (
                <p>
                    <a href={`tel:${phoneHref}`} aria-label={phoneAltText}>
                        {phoneNumber}
                    </a>
                </p>
            )}
            {email && (
                <p>
                    <a href={`mailto:${emailHref}`} aria-label={emailAltText}>
                        {email}
                    </a>
                </p>
            )}
            {address && (
                <p>
                    <a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`}
                        aria-label={addressAltText}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {address}
                    </a>
                </p>
            )}
        </div>
    );
}
