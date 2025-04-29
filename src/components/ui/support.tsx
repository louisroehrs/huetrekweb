import React from "react";
import hueTrekTitleBlack from "@/assets/huetrek-title-black.png";

export function Support() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="border-t border-l border-b rounded-l-3xl border-green-400 bg-black border-l-8">
        <h2 className="text-6xl font-[Okuda] rounded-tl-2xl font-bold text-center bg-green-400 mb-12 pr-4 text-right text-black">
          <div className="flex items-center justify-between">
            <a href="#top"><img src={hueTrekTitleBlack} alt="HueTrek Top" className="w-32"/></a>
            <div>SUPPORT</div>
          </div>
        </h2>
        <div className="prose prose-invert max-w-none pl-4 pb-8">
          <p className="text-lg mb-6">Last updated: April 28, 2025</p>
         
          <p><strong>HueTrek</strong> would love to ensure your success with this app.  Please contact us at huetrekofficial at gmail dot com</p>
          <p>&nbsp;</p>
          <section className="mb-8">
            <h2 className="text-2xl font-[Okuda] text-green-400 mb-4">Bridge Connection</h2>
            <p>
              If you have issues connecting to your Philips Hue bridge, please check the following:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ensure your Philips Hue bridge is powered on and connected to the same network as your device</li>
              <li>Wait until all three lights on your bridge are solid</li>
              <li>Check that your bridge is not in a restricted network. Some networks may block access to the bridge and to other devices such as networks in office buildings or hotels</li>
              <li>Ensure that your device has the latest version of the app</li>
              <li>Once the app has found a bridge and displays an IP address, tap the round button on the bridge to connect and then click the Start Pairing button in the app.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-[Okuda] text-green-400 mb-4">Bridge connected, now what?</h2>
            <p>Now that you have connected to your bridge, you can:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Connect to one or more bridges with the same app.  You can set up bridges in different houses and connect as needed when you move between houses with two taps.</li>
              <li>Easy bridge configuration</li>
              <li>Control lights independently</li>
              <li>Control groups or rooms of lights</li>
              <li>Uses existing Hue configurations</li>
              <li>It's fun!</li>
              <li>Use as a wall panel</li>
              <li>Cement your Trek nerd reputation!</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-[Okuda] text-green-400 mb-4">Lights not responding?</h2>
            <p>First, check that your lights are plugged in and all switches to the light are turned on.</p>
            <p>The bulb should turn on when switched off and on again.</p>
            <p>Try the app to turn on and off the light.</p>
            <p>The light may not be registered in the Philips Hub.  Use the Official Philips Hue app to add the light to the hub.</p>
            <p>Since the HueTrek app does not have access to change configurations, you can let others use it and not worry about configuration changes.</p>
            <p>If the lights are not responding, try restarting the bridge by pressing the round button on the bridge for 10 seconds.</p>
          </section>

        </div>
        <div className="text-6xl font-[Okuda] rounded-bl-2xl font-bold text-center h-6 bg-green-400 pr-4 text-right text-black"></div>
      </div>
    </div>
  );
}
