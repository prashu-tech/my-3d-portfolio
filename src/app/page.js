import LoadingScreen from "@/components/ui/LoadingScreen"; // ← ADD THIS
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import AudioPlayer from "@/components/ui/AudioPlayer";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function Home() {
  return (
    <>
      {/* Loading Screen - Shows first */}
      <LoadingScreen />
      
      <main className="bg-black">
        <Navbar />
        
        <div id="hero">
          <HeroSection />
        </div>
        
        <AboutSection />
        
        <section id="multimedia" className="min-h-screen bg-gradient-to-b from-black to-purple-950/20 py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-white text-center mb-16">
              Multimedia <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Showcase</span>
            </h2>
            
            <div className="space-y-12">
              <VideoPlayer 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800"
                label="Project Demo Video"
              />
              
              <AudioPlayer 
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
                label="Portfolio Introduction Audio"
              />
              
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                <p className="text-white text-sm font-medium mb-4">Animated Process</p>
                <img 
                  src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyU/giphy.gif"
                  alt="Coding animation"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <div id="projects">
          <ProjectsSection />
        </div>
        
        <ContactSection />
      </main>
    </>
  );
}
