import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Screenshot } from "@/components/ui/screenshot";
import { Newsletter } from "@/components/ui/newsletter";
import { Sparkles, Lightbulb, SwitchCamera, Star, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import reactLogo from "@/assets/react.svg";
import iphone1 from "@/assets/iphone1.png";
import iphone2 from "@/assets/iphone2.png";
import iphone3 from "@/assets/iphone3.png";
import downloadiOS from "@/assets/download-on-the-app-store.svg";
import hueTrekLogo from "@/assets/hueTrekLogo.png";

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
          <span className="text-lg font-bold text-orange-400">HueTrek</span>
          <div className="space-x-6">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Demo</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
            <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
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
        <div className="bg-gradient-to-br from-indigo-900 to-black p-10 text-center">
          <div className="flex flex-col items-center justify-center">
            <img 
              src={hueTrekLogo} 
              alt="HueTrek Logo" 
              className="w-32 h-32 mb-6 animate-pulse"
            />
            <h1 className="text-5xl font-bold mb-4">HueTrek</h1>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Command your lights like a Starfleet officer. HueTrek brings a Star Trek-inspired interface to your Philips Hue smart lighting system.
            </p>
            <img src={downloadiOS} alt="Download on the App Store" />
          </div>
        </div>

{/*             <Button className="text-lg px-20 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500">
              
            </Button>
*/}
        {/* Screenshots Section */}
        <div id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">App Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Screenshot imageName={iphone1} />
              <Screenshot imageName={iphone2} />
              <Screenshot imageName={iphone3} />
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Newsletter />
          </div>
        </div>

        <div className="text-center p-10 border-t border-zinc-800">
          <p className="text-zinc-400">&copy; {new Date().getFullYear()} HueTrek. Engage your home lighting.</p>
        </div>
      </div>
    </div>
  );
}
