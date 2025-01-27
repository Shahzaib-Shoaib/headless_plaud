import Accordion from "@/components/accordion";
import HeroSection from "@/components/hero";
import Sec3 from "@/components/sec3";
import TranscriptionSection from "@/components/transcription";
import VideoComponent from "@/components/video";

export default function Home() {
  return (
    <main className="font-gothic overflow-hidden">
      <HeroSection />
      <VideoComponent />
      <Accordion />
      <Sec3 />

      <TranscriptionSection />
      {/* <div>
        <video width="500" autoPlay loop control>
          <source src="/videos/showcase.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </main>
  );
}
