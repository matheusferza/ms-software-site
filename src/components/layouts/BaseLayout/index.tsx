import * as React from 'react';
import classNames from 'classnames';

import { Annotated } from '@/components/Annotated';
import { BackgroundImage, BackgroundVideo } from '@/components/atoms';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import { PageComponentProps } from '@/types';
import { PageModelType } from '@/types/generated';

type BaseLayoutProps = React.PropsWithChildren & PageComponentProps & PageModelType;

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
    const { global, ...page } = props;
    const { site } = global;
    const backgroundVideo = (page as any)?.backgroundVideo;
    const hasBackgroundVideo = !!backgroundVideo?.url;

    return (
        <div className={classNames('site-shell flex flex-col grow', { 'has-page-background-video': hasBackgroundVideo })}>
            {hasBackgroundVideo && <BackgroundVideo {...backgroundVideo} />}
            {page?.backgroundImage && <BackgroundImage {...page?.backgroundImage} />}
            {site.header && (
                <Annotated content={site}>
                    <Annotated content={site.header}>
                        <Header {...site.header} />
                    </Annotated>
                </Annotated>
            )}
            <Annotated content={page}>
                <main id="main" className="relative grow">
                    {props.children}
                </main>
            </Annotated>
            {site.footer && (
                <Annotated content={site}>
                    <Annotated content={site.footer}>
                        <Footer {...site.footer} />
                    </Annotated>
                </Annotated>
            )}
        </div>
    );
};

export default BaseLayout;
