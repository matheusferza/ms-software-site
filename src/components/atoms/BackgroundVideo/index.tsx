import classNames from 'classnames';

export default function BackgroundVideo(props) {
    const { url, className, opacity } = props;
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
            <video autoPlay loop muted playsInline className="page-background-video-element">
                <source src={url} type="video/mp4" />
            </video>
        </div>
    );
}
