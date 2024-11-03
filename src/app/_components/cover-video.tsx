type Props = {
  videoSrc: string;
};

const CoverVideo = ({ videoSrc }: Props) => {
    return (
        <div className="responsive-video">
            <iframe 
                src={videoSrc} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="autoplay; encrypted-media;"
                allowFullScreen>
            </iframe>
        </div>
    );
  };

export default CoverVideo;
