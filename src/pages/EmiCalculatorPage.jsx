import PageContainer from "../components/PageContainer";

import React, { useState, useRef, useEffect } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const EmiCalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState("10000");
  const [interestRate, setInterestRate] = useState("8.5");
  const [loanTenure, setLoanTenure] = useState("1"); // in months
  const [results, setResults] = useState({
    emi: "0",
    totalInterest: "0",
    totalPayment: "0",
  });

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const handleCalculate = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const n = parseFloat(loanTenure);
    if (!P || !annualRate || !n) return;

    const r = annualRate / 1200; // monthly rate
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    setResults({
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
    });
  };

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      // Create new doughnut chart
      chartInstance.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Principal", "Interest"],
          datasets: [
            {
              data: [parseFloat(loanAmount), parseFloat(results.totalInterest)],
              backgroundColor: ["#367cff", "#be95be"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "bottom" },
          },
        },
      });
    }
  }, [results, loanAmount]);

  useEffect(() => {
    handleCalculate();
  }, []);

  return (
    <PageContainer>
      <section className="flex justify-center px-4 sm:px-6 lg:px-0 py-8 mb-20">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl overflow-hidden">
          {/* Top Section */}
          <div className="bg-[#14213d] text-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Loan Calculator</h2>
            <form className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex-1">
                <div className="text-sm mb-2 text-gray-200">Amount (Rs)</div>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full text-xl px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm mb-2 text-gray-200">
                  Interest Rate (%)
                </div>
                <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full text-xl px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm mb-2 text-gray-200">
                  Time to Repay (Months)
                </div>
                <input
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full text-xl px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
          </div>

          {/* Results Section */}
          <div className="flex flex-col md:flex-row">
            {/* Left Result Panel */}
            <div className="w-full md:w-1/2 p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-lg font-normal mb-2">Loan EMI</h3>
                <div className="text-3xl font-bold pb-2 border-b border-gray-200">
                  <span className="opacity-50 text-xl mr-1">Rs</span>
                  {results.emi}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-normal mb-2">
                  Total Interest Payable
                </h3>
                <div className="text-3xl font-bold pb-2 border-b border-gray-200">
                  <span className="opacity-50 text-xl mr-1">Rs</span>
                  {results.totalInterest}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-normal mb-2">Total Amount</h3>
                <div className="text-3xl font-bold pb-2 border-b border-gray-200">
                  <span className="opacity-50 text-xl mr-1">Rs</span>
                  {results.totalPayment}
                </div>
              </div>
              <button
                type="button"
                onClick={handleCalculate}
                className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white px-8 py-2 rounded-lg text-lg font-bold w-full sm:w-auto"
              >
                Calculate
              </button>
            </div>

            {/* Right Chart Panel */}
            <div className="w-full my-10 md:w-1/2 p-6 sm:p-8 h-72 sm:h-80 relative">
              <div className="absolute inset-0">
                <canvas ref={chartRef} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default EmiCalculatorPage;
