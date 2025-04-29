import React from "react";
import hueTrekTitleBlack from "@/assets/huetrek-title-black.png";

export function PrivacyPolicy() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="border-t border-l border-b rounded-l-3xl border-purple-400 bg-black border-l-8">
        <h2 className="text-6xl font-[Okuda] rounded-tl-2xl font-bold text-center bg-purple-400 mb-12 pr-4 text-right text-black">
          <div className="flex items-center justify-between">
            <a href="#top"><img src={hueTrekTitleBlack} alt="HueTrek Top" className="w-32"/></a>
            <div>PRIVACY POLICY</div>
          </div>
        </h2>
        <div className="prose prose-invert max-w-none pl-4 pb-8">
          <p className="text-lg mb-6">Last updated: April 28, 2025</p>
          <p><strong>Effective Date:</strong> April 28, 2025</p>
          <p><strong>HueTrek</strong> respects your privacy. This privacy policy outlines how our app handles user data.</p>
          <p>&nbsp;</p>
          <section className="mb-8">
            <h2 className="text-2xl font-[Okuda] text-purple-400 mb-4">1. Information We Collect</h2>
            <p>HueTrek collects only the minimum information necessary to function:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Philips Hue bridge connection information</li>
              <li>Light configurations and settings</li>
              <li>App preferences</li>
            </ul>
            <p>We do <strong>not</strong> collect, store, or share any personal information.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>No names, email addresses, phone numbers, or locations</li>
              <li>No analytics or tracking tools</li>
              <li>No third-party data collection</li>
            </ul> 
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-[Okuda] text-purple-400 mb-4">2. How We Use Your Information</h2>
            <p>We use the collected information solely to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Connect to your Philips Hue bridge</li>
              <li>Control your lights</li>
              <li>Save your preferences</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-[Okuda] text-purple-400 mb-4">3. Children's Privacy</h2>
            <p>Our app is suitable for all ages and does not collect any personal information from children or adults.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-[Okuda] text-purple-400 mb-4">4. Data Storage</h2>
            <p>All data is stored locally on your device. We do not transmit or store any personal information on external servers.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-[Okuda] text-purple-400 mb-4">5. Third-Party Access</h2>
            <p>HueTrek only communicates with your local Philips Hue bridge. We do not share any information with third parties. Our app does <strong>not</strong> use third-party services that collect data.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-[Okuda] text-purple-400 mb-4">6. Changes to This Policy</h2>
            <p>If we make changes to this policy in the future, we will update the policy and reflect the changes within the app or on our website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-[Okuda] text-purple-400 mb-4">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at huetrekofficial at gmail dot com</p>
          </section>
        </div>
        <div className="text-6xl font-[Okuda] rounded-bl-2xl font-bold text-center h-6 bg-purple-400 pr-4 text-right text-black"></div>
      </div>
    </div>
  );
}
