import React from "react";
import PageContainer from "../components/PageContainer";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PageContainer>
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
              <p>
                We are committed to protecting your privacy. This policy
                outlines how we collect and use your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                2. Information We Collect
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Personal Details:</strong> Name, email, and phone
                  number.
                </li>
                <li>
                  <strong>Payment Details:</strong> Securely processed by
                  third-party services.
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our
                  platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>To provide and improve our services.</li>
                <li>To process payments and verify identities.</li>
                <li>To enhance security and prevent fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                4. Sharing Your Data
              </h2>
              <p>
                We do not sell your data. However, we may share it with legal
                authorities, service providers, or business partners when
                necessary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Data Protection</h2>
              <p>
                Your data is encrypted and stored securely. We implement
                measures to protect against unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
              <p>
                You can request access, correction, or deletion of your personal
                data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
              <p>
                Email:{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@servicemitra.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  info@servicemitra.co.in
                </a>
              </p>
            </section>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default PrivacyPolicyPage;
