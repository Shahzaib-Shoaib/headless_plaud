import { useEffect, useRef } from "react";

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement: any = videoRef.current;

    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // Check if the video element is in the viewport
          if (entry.isIntersecting) {
            // Play the video when it enters the viewport
            videoElement.play();
            // Unobserve the element after it has been played
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is in the viewport
    );

    // Observe the video element
    if (videoElement) {
      observer.observe(videoElement);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <>
      <div className="md:block hidden my-28">
        <video
          ref={videoRef}
          width="300"
          autoPlay
          muted
          loop
          playsInline
          style={{ display: "block", margin: "0 auto" }}
        >
          <source src="/videos/showcase.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="md:hidden block my-28">
        <video
          ref={videoRef}
          width="180"
          autoPlay
          muted
          loop
          playsInline
          style={{ display: "block", margin: "0 auto" }}
        >
          <source src="/videos/showcase.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default VideoComponent;
