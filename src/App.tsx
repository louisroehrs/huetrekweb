import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Screenshot } from "@/components/ui/screenshot";
import { Newsletter } from "@/components/ui/newsletter";
import { PrivacyPolicy } from "@/components/ui/privacy-policy";
import { Volume2, VolumeX, Menu, X } from "lucide-react";
import pairing from "@/assets/new/pairing.png";
import lights from "@/assets/new/lights.png";
import groups from "@/assets/new/groups.png";
import sensors from "@/assets/new/sensors.png";
import colorgrid from "@/assets/new/colorgrid.png";
import colorsliders from "@/assets/new/colorsliders.png";
import colorspectrum from "@/assets/new/colorspectrum.png";
import downloadiOS from "@/assets/download-on-the-app-store.svg";
import hueTrekLogo from "@/assets/hueTrekLogo.png";
import hueTrekTitle from "@/assets/final-frontier-old-style.png";
import hueTrekTitleBlack from "@/assets/huetrek-title-black.png";
import { Support } from "./components/ui/support";

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* LCARS background animation */}
      <div className="absolute inset-0 z-0 opacity-20 animate-pulse pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-purple-800 to-indigo-900 blur-3xl"></div>
      </div>
    <a href="#top"></a>
      {/* Navigation Bar - Starfleet Style */}
      <nav className="relative z-10 bg-zinc-900 border-b border-orange-400 shadow-md text-orange-300 text-sm uppercase font-semibold tracking-wider fixed top-0 w-full">
        <div className="flex justify-between items-center px-6 py-3">
          <img src={hueTrekTitle} alt="HueTrek" className="w-32" />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-orange-300 hover:text-white transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Demo</a>
            <a href="#support" className="hover:text-white transition">Support</a>
            <a href="#privacy" className="hover:text-white transition">Privacy</a>
          </div>
      {/*
          <div className="flex items-center">
            <div className="w-14 h-10 bg-orange-400 rounded-full z-20">
              <Button
                variant="ghost"
                className="text-white hover:text-orange-400"
                onClick={() => setSoundEnabled(!soundEnabled)}
              >
                {soundEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
              </Button>
            </div>
          </div>
          */}
        </div>
        {/* Mobile navigation menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-zinc-900 border-t border-orange-400`}>
          <div className="flex flex-col space-y-4 px-6 py-4">
            <a href="#features" className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#demo" className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Demo</a>
            <a href="#support" className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Support</a>
            <a href="#privacy" className="hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Privacy</a>
          </div>
        </div>
      </nav>
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="py-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className = "border-t-10 rounded-t-xl h-8 border-orange-400 border-2 border-b-0 pb-10"></div>
          <div className = "flex flex-col md:flex-row  items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center">
              <img 
                src={hueTrekLogo} 
                alt="HueTrek Logo" 
                className="w-32 h-32 mb-6 animate-pulse"
                />
              <div className="text-xl mb-6 max-w-2xl mx-auto text-orange-400">
                Command your lights like a Starfleet officer.</div>
              <div>HueTrek brings a Star Trek-inspired interface to your Philips Hue smart lighting system. </div>
              <div>Kids love it, and they can't change the configuration.</div>
              <div className="pb-10"></div>
              <div className="text-orange-400 pb-4">Available Now!</div>
              <a href="https://apps.apple.com/us/app/huetrek/id6745201555"><img src={downloadiOS} alt="Download on the App Store" /></a>
            </div>
            <div/><div/><div/>
            <div>
              <img src={groups} className="w-48"/>
            </div>
          </div>
          
          <div className = "border-b-10 rounded-b-xl h-8 border-orange-400 pt-10 border-2 border-t-0"></div>
        </div>
        {/* Features Section */}
        <div id="features" className="pt-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <ul className="border-t border-l border-b rounded-l-3xl border-orange-400 bg-black border-l-8">
              <h2 className="text-6xl font-[Okuda] rounded-tl-2xl font-bold text-center bg-orange-400 mb-12 pr-4 text-right text-black">
                <div className="flex items-center justify-between">
                  <a href="#top"><img src={hueTrekTitleBlack} alt="HueTrek Top" className="w-32"/></a>
                  <div>FEATURES</div>
                </div>
              </h2>
                <dl>
                  <dt>Multiple Bridges</dt>
                  <dd>Connect to one or more bridges with the same app.  You can set up bridges in different houses and connect as needed when you move between houses with two taps.</dd>
                  <dt>Easy bridge configuration</dt>
                  <dd>You can add, rename, delete bridges anytime.  Bridges can be on different networks.</dd>
                  <dt>Control lights independently</dt>
                  <dd>Control each light, supports all lighting that is supported by Philips Hue</dd>
                  <dt>Control groups or rooms of lights</dt>
                  <dd>Use groups to control sets of lights at once, setting them all to the same color</dd>
                  <dt>Uses existing Hue configurations</dt>
                  <dd>HueTrek will load in all your existing configuration from your bridge.  No need to configure the app once you conect to a bridge.</dd>
                  <dt>It's fun!</dt>
                  <dd>Turn the volume up for the best in star trek sounds while you control your house.</dd>
                  <dt>Use as a wall panel</dt>
                  <dd>Have an extra iPhone or tablet?  Load them up with this app, and control your house from a Star Trek wall panel or desk panel!</dd>
                  <dt>Cement your Trek nerd reputation!</dt>
                  <dd>Nothing will convince your friends that you are a trekkie more than this app!</dd>
                </dl>
                <div className="pb-12"></div>
                <div className="text-6xl font-[Okuda] rounded-bl-2xl font-bold text-center h-6 bg-orange-400 pr-4 text-right text-black"></div>
              </ul>
          </div>
        </div>


        {/* Screenshots Section */}
      <div id="demo" className="py-2 px-4 sm:px-6 lg:px-8">
      <a href="https://apps.apple.com/us/app/huetrek/id6745201555">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-l border-b rounded-l-3xl border-blue-400 bg-black border-l-8">
              <h2 className="text-6xl font-[Okuda] rounded-tl-2xl font-bold text-center bg-blue-400 mb-12 pr-4 text-right text-black">
                <div className="flex items-center justify-between">
                  <a href="#top"><img src={hueTrekTitleBlack} alt="HueTrek Top" className="w-32"/></a>
                  <div>DEMO</div>
                </div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4 pb-8">
                <Screenshot imageName={pairing} />
                <Screenshot imageName={lights} />
                <Screenshot imageName={groups} />
                <Screenshot imageName={sensors} />
                <Screenshot imageName={colorgrid} />
                <Screenshot imageName={colorsliders} />
                <Screenshot imageName={colorspectrum} />
              </div>
              <div className="text-6xl font-[Okuda] rounded-bl-2xl font-bold text-center h-6 bg-blue-400 pr-4 text-right text-black"></div>
            </div>
      </div>
      </a>
      </div>


        {/* Newsletter Section */}
        <div id="newsletter" className="pb-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="border-t border-l border-b rounded-l-3xl border-teal-400 bg-black border-l-8">
              <h2 className="text-6xl font-[Okuda] rounded-tl-2xl font-bold text-center bg-teal-400 mb-12 pr-4 text-right text-black">
                <div className="flex items-center justify-between">
                  <a href="#top"><img src={hueTrekTitleBlack} alt="HueTrek Top" className="w-32"/></a>
                  <div>JOIN OUR NEWSLETTER</div>
                </div>
              </h2>
              <div id="newsletter" className="py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto pl-4">
                  <Newsletter/>
                </div>
              </div>
              <div className="text-6xl font-[Okuda] rounded-bl-2xl font-bold text-center h-6 bg-teal-400 pr-4 text-right text-black"></div>
            </div>
          </div>

          
          <div className="text-center p-10 border-t border-zinc-800">
            <p className="text-orange-400">&copy; {new Date().getFullYear()} HueTrek. Engage your home lighting.</p>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div id="privacy" className="pb-2 px-4 sm:px-6 lg:px-8">
          <PrivacyPolicy />
        </div>

        {/* Support Section */}
        <div id="support" className="pb-2 px-4 sm:px-6 lg:px-8">
          <Support />
        </div>
      </div>
    </div>
  );
}
