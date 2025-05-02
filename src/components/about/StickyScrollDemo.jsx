// src/app/page.js or src/pages/index.js
"use client";
import React from "react";
import { StickyScroll } from "./StickyScroll";
import Header from "../design/Header";

export default function StickyScrollDemo() {
  const content = [
    {
      title: "Faster digital approval in 59 minutes",
      description:
        "Experience unprecedented speed with our innovative loan approval process. Get your application reviewed and approved in under an hour, eliminating the usual days of waiting and uncertainty.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white font-bold text-2xl">
          Fast Approval
        </div>
      ),
    },
    {
      title: "Digital application from anywhere anytime",
      description:
        "Apply for your loan on any device, from anywhere in the world, 24/7. Our fully digital platform eliminates the need for branch visits and adapts to your busy schedule, not the other way around.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white font-bold text-2xl">
          Anywhere Access
        </div>
      ),
    },
    {
      title: "Contactless and hassle-free application",
      description:
        "Say goodbye to paperwork and physical documentation. Our contactless application process is designed to be seamless and convenient, with digital verification systems that respect your time and privacy.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white font-bold text-2xl">
          Contactless Process
        </div>
      ),
    },
    {
      title:
        "Empowered to choose preferred lender products from multiple loan offers",
      description:
        "We put the power in your hands by connecting you with multiple lenders in one place. Compare rates, terms, and conditions to select the offer that perfectly suits your financial needs and goals.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white font-bold text-2xl">
          Multiple Offers
        </div>
      ),
    },
    {
      title: "One form for all the loans on the platform",
      description:
        "Fill out just one comprehensive application to access various loan products from different lenders. Our smart system matches your profile with compatible loan options, saving you time and repeated data entry.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white font-bold text-2xl">
          Single Application
        </div>
      ),
    },
    {
      title: "Sanction and disbursement expected within 7-10 working days",
      description:
        "After approval, receive your funds quickly and efficiently. Our streamlined disbursement process ensures that once your loan is sanctioned, the money reaches your account within 7-10 working days.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white font-bold text-2xl">
          Quick Disbursement
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <Header>Redefining customer experience using modern technology</Header>
      <StickyScroll content={content} />
    </div>
  );
}
