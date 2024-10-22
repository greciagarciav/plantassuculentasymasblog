type Props = {
  videoSrc: string;
};

const CoverVideo = ({ videoSrc }: Props) => {

  return (
    <div
      className="sm:mx-0"
      dangerouslySetInnerHTML={{ __html: videoSrc }}
    />
  );
};

export default CoverVideo;
