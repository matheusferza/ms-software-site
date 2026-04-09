import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Link, Social } from '@/components/atoms';
import ImageBlock from '@/components/molecules/ImageBlock';
import CloseIcon from '@/components/svgs/close';
import { iconMap } from '@/components/svgs';
import MenuIcon from '@/components/svgs/menu';
import HeaderLink from './HeaderLink';

export default function Header(props) {
    const { isSticky, styles = {}, ...rest } = props;
    const headerWidth = styles.self?.width ?? 'narrow';
    return (
        <header className={classNames(isSticky ? 'sticky top-0 z-30' : 'relative z-20', 'px-4 pt-4')}>
            <div
                className={classNames({
                    'max-w-7xl mx-auto': headerWidth === 'narrow',
                    'max-w-8xl mx-auto': headerWidth === 'wide',
                    'w-full': headerWidth === 'full'
                })}
            >
                <Link href="#main" className="sr-only">
                    Skip to main content
                </Link>
                <HeaderVariants {...rest} />
            </div>
        </header>
    );
}

function HeaderVariants(props) {
    const { headerVariant = 'variant-a', ...rest } = props;
    switch (headerVariant) {
        case 'variant-b':
            return <HeaderVariantB {...rest} />;
        case 'variant-c':
            return <HeaderVariantC {...rest} />;
        default:
            return <HeaderVariantA {...rest} />;
    }
}

function HeaderVariantA(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="site-header-bar">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:ml-2 lg:flex lg:flex-1 lg:flex-wrap lg:items-center lg:gap-2">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul className="hidden lg:ml-auto lg:flex lg:items-center lg:gap-2">
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderVariantB(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="site-header-bar">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <ul className="hidden lg:ml-auto lg:flex lg:flex-wrap lg:items-center lg:gap-2">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul
                    className={classNames('hidden lg:flex lg:items-center lg:gap-2', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                >
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderVariantC(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="site-header-bar">
            <SiteLogoLink {...logoProps} />
            {socialLinks.length > 0 && (
                <ul className="hidden lg:ml-auto lg:flex lg:items-center lg:gap-2">
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {primaryLinks.length > 0 && (
                <ul
                    className={classNames('hidden lg:flex lg:flex-wrap lg:items-center lg:gap-2', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                >
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function MobileMenu(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        if (!isMenuOpen) {
            return;
        }

        const previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    return (
        <div className="ml-auto lg:hidden">
            <button
                type="button"
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMenuOpen}
                className="mobile-menu-trigger focus:outline-hidden"
                onClick={() => setIsMenuOpen((state) => !state)}
            >
                <span className="mobile-menu-trigger-label">{isMenuOpen ? 'Fechar' : 'Menu'}</span>
                {isMenuOpen ? <CloseIcon className="fill-current w-icon h-icon" /> : <MenuIcon className="fill-current w-icon h-icon" />}
            </button>
            <div
                className={classNames('mobile-menu-panel fixed inset-0 z-50', {
                    'pointer-events-none': !isMenuOpen
                })}
            >
                <button
                    type="button"
                    aria-label="Close Menu"
                    className={classNames('mobile-menu-backdrop', {
                        'opacity-100': isMenuOpen,
                        'opacity-0': !isMenuOpen
                    })}
                    onClick={() => setIsMenuOpen(false)}
                />
                <aside
                    className={classNames('mobile-menu-drawer', {
                        'translate-x-0 opacity-100': isMenuOpen,
                        'translate-x-full opacity-0': !isMenuOpen
                    })}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu principal"
                >
                    <div className="mobile-menu-header">
                        <SiteLogoLink {...logoProps} forceTitle={true} />
                        <button
                            type="button"
                            aria-label="Close Menu"
                            className="mobile-menu-close focus:outline-hidden"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span>Fechar</span>
                            <CloseIcon className="fill-current w-icon h-icon" />
                        </button>
                    </div>
                    {(primaryLinks.length > 0 || socialLinks.length > 0) && (
                        <div className="mobile-menu-content grow overflow-y-auto">
                            {primaryLinks.length > 0 && (
                                <>
                                    <p className="mobile-menu-section-label">Navegação</p>
                                    <ul className="mobile-menu-links">
                                        <ListOfLinks
                                            links={primaryLinks}
                                            inMobileMenu={true}
                                            onNavigate={() => setIsMenuOpen(false)}
                                        />
                                    </ul>
                                </>
                            )}
                            {socialLinks.length > 0 && (
                                <>
                                    <p className="mobile-menu-section-label">Contato</p>
                                    <ul className="mobile-menu-socials">
                                        <ListOfSocialLinks
                                            links={socialLinks}
                                            inMobileMenu={true}
                                            onNavigate={() => setIsMenuOpen(false)}
                                        />
                                    </ul>
                                </>
                            )}
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
}

function SiteLogoLink({ title, isTitleVisible, logo, forceTitle = false }) {
    if (!(logo || (title && (isTitleVisible || forceTitle)))) {
        return null;
    }
    const mobileLogo = resolveMobileLogo(logo);

    return (
        <div className="flex items-center shrink-0">
            <Link href="/" className="site-logo-link">
                {mobileLogo && <ImageBlock {...mobileLogo} className="site-logo-image-mobile lg:hidden" />}
                {logo && <ImageBlock {...logo} className="site-logo-image-desktop hidden lg:block" />}
                {title && (isTitleVisible || forceTitle) && <span className="site-logo-title">{title}</span>}
            </Link>
        </div>
    );
}

function ListOfLinks({ links, inMobileMenu, onNavigate = undefined }) {
    return links.map((link, index) => (
        <li key={index} className={classNames(inMobileMenu ? 'w-full' : 'inline-flex items-stretch')}>
            <HeaderLink
                {...link}
                mobile={inMobileMenu}
                onClick={onNavigate}
                className={classNames(inMobileMenu ? 'mobile-menu-link' : 'nav-link')}
            />
        </li>
    ));
}

function ListOfSocialLinks({ links, inMobileMenu = false, onNavigate = undefined }) {
    return links.map((link, index) => {
        if (inMobileMenu) {
            const IconComponent = iconMap[link.icon];
            return (
                <li key={index} className="w-full">
                    <Link
                        href={link.url}
                        aria-label={link.altText}
                        className="mobile-menu-social-link"
                        onClick={onNavigate}
                    >
                        {IconComponent && <IconComponent className="fill-current h-icon w-icon" />}
                        <span>{link.label || link.altText}</span>
                    </Link>
                </li>
            );
        }

        return (
            <li key={index} className="inline-flex items-stretch">
                <Social
                    {...link}
                    className={classNames('social-link-pill text-lg', {
                        'w-12 h-12': inMobileMenu
                    })}
                />
            </li>
        );
    });
}

function resolveMobileLogo(logo) {
    if (!logo?.url) {
        return logo;
    }

    const mobileUrl = logo.url
        .replace('ms-software-stacked-sem-fundo.png', 'ms-software-horizontal-sem-fundo.png')
        .replace('ms-software-stacked.png', 'ms-software-horizontal.png');

    return {
        ...logo,
        url: mobileUrl
    };
}
