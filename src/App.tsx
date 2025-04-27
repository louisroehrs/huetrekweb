import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Screenshot } from "@/components/ui/screenshot";
import { Newsletter } from "@/components/ui/newsletter";
import { Sparkles, Lightbulb, SwitchCamera, Star, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import reactLogo from "@/assets/react.svg";
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

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* LCARS background animation */}
      <div className="absolute inset-0 z-0 opacity-20 animate-pulse pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-purple-800 to-indigo-900 blur-3xl"></div>
      </div>

      {/* Navigation Bar - Starfleet Style */}
      <nav className="relative z-10 bg-zinc-900 border-b border-orange-400 shadow-md text-orange-300 text-sm uppercase font-semibold tracking-wider">
        <div className="flex justify-between items-center px-6 py-3">
          <img src={hueTrekTitle} alt="HueTrek" className="w-32" />
          <div className="space-x-6">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Demo</a>
            <a href="#newsletter" className="hover:text-white transition">Join</a>
          </div>
      
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
              <div className="text-orange-400 pb-4">Coming Spring 2025!</div>
              <img src={downloadiOS} alt="Download on the App Store" />
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
              <ul class="border-t border-l border-b rounded-l-3xl border-orange-400 bg-black border-l-8">
                <h2 className="text-6xl font-[Okuda] rounded-tl-2xl font-bold text-center bg-orange-400 mb-12 pr-4 text-right text-black">FEATURES</h2>
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
                  <div className="pb-12"></div>
                </dl>
                <div className="text-6xl font-[Okuda] rounded-bl-2xl font-bold text-center h-6 bg-orange-400 pr-4 text-right text-black"></div>
              </ul>
          </div>
        </div>


        {/* Screenshots Section */}
        <div id="demo" className="py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div class="border-t border-l border-b rounded-l-3xl border-blue-400 bg-black border-l-8">
              <h2 className="text-6xl font-[Okuda] rounded-tl-2xl font-bold text-center bg-blue-400 mb-12 pr-4 text-right text-black">DEMO</h2>
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
        </div>


        {/* Newsletter Section */}
        <div id="join" className="pb-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div class="border-t border-l border-b rounded-l-3xl border-teal-400 bg-black border-l-8">
              <h2 className="text-6xl font-[Okuda] rounded-tl-2xl font-bold text-center bg-teal-400 mb-12 pr-4 text-right text-black">JOIN OUR NEWSLETTER</h2>
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
      </div>
    </div>
    );
}
   
