import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-blue max-w-none">
            <p className="text-muted-foreground mb-8">Last Updated: March 2026</p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-6">
              At iNet Technologies ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. Data We Collect</h2>
            <p className="text-muted-foreground mb-6">
              We may collect, use, store and transfer different kinds of personal data about you, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Identity Data (first name, last name, title)</li>
              <li>Contact Data (email address, telephone numbers, billing addresses)</li>
              <li>Technical Data (IP address, browser type and version, time zone setting)</li>
              <li>Usage Data (information about how you use our website and services)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. How We Use Your Data</h2>
            <p className="text-muted-foreground mb-6">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. AI Agent Services</h2>
            <p className="text-muted-foreground mb-6">
              When using our Agent-as-a-Service or AI Employee setup, our systems may process data on your behalf. We act as a data processor in these scenarios. You retain full ownership and control over any data fed into these systems. We do not use your proprietary business data to train foundational models outside of your isolated, secure tenant.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:<br /><br />
              <strong>iNet Technologies</strong><br />
              Email: support@inet-technologies.com<br />
              Phone: 817-769-2202<br />
              Fort Worth, TX
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
