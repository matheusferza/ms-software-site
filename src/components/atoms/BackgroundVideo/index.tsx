import classNames from 'classnames';
import { useEffect, useRef } from 'react';

export default function BackgroundVideo(props) {
    const { url, className, videoClassName, opacity, playbackRate = 1, objectPosition = 'center', poster } = props;
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = playbackRate ?? 1;
        }
    }, [playbackRate]);

    if (!url) {
        return null;
    }

    return (
        <div
            className={classNames('page-background-video fixed inset-0 -z-20 overflow-hidden pointer-events-none', className)}
            style={{
                opacity: (opacity ?? 100) * 0.01
            }}
        >
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                {...(poster && { poster })}
                className={classNames('page-background-video-element', videoClassName)}
                style={{ objectPosition }}
            >
                <source src={url} type="video/mp4" />
            </video>
        </div>
    );
}
