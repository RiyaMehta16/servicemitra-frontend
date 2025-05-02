import React from "react";
import PageContainer from "../components/PageContainer";

const TermsConditionsPage = () => {
  return (
    <div>
      <PageContainer>
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Terms & Conditions
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using ServiceMitra, you agree to follow these
                terms. If you disagree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                2. User Responsibilities
              </h2>
              <p>
                You agree not to misuse our services, engage in fraudulent
                activities, or violate any laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                3. Account Registration
              </h2>
              <p>
                You must provide accurate information when registering and are
                responsible for maintaining your account security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                4. Payments & Refunds
              </h2>
              <p>
                All service payments are final. Refunds are subject to approval
                under specific conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account if you
                violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                6. Changes to Terms
              </h2>
              <p>
                We may update these terms at any time. Continued use means you
                accept the changes.
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

export default TermsConditionsPage;
