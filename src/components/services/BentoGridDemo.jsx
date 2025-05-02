// BentoGridDemo.jsx
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem, Skeleton, BentoImg } from "./BentoGrid";
import Header from "../design/Header";

export function BentoGridDemo() {
  return (
    <div className="text-center mb-40">
      <Header>Our Services</Header>
      <h1 className="text-neutral-500 mb-10">What Sets Us Apart</h1>
      <BentoGrid className="text-left">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Wide Range of Loan Products",
    description:
      "Access various loan options like personal, home, business, and car loans to suit your needs.",
    header: <BentoImg source="/wideRangeOfLoans.jpg" />,
    icon: <IconClipboardCopy className="size-6 text-neutral-500" />,
  },
  {
    title: "Expertise and Guidance",
    description:
      "Personalized advice to help you choose the best loan products based on your needs.",
    header: <BentoImg source="/expertise.jpg" className="object-[10%_45%]" />,

    icon: <IconFileBroken className="size-6 text-neutral-500" />,
  },
  {
    title: "Quick and Easy Process",
    description:
      "Smooth and hassle-free loan application process, from submission to approval.",
    header: <BentoImg source="/quickprocess.jpg" />,

    icon: <IconSignature className="size-6 text-neutral-500" />,
  },
  {
    title: "Customer-Centric Service",
    description:
      "Clear communication and excellent support before, during, and after the loan process.  Loan catered to your own needs",
    header: (
      <BentoImg source="/customercentric.jpg" className="object-[10%_45%]" />
    ),

    icon: <IconTableColumn className="size-6 text-neutral-500" />,
  },
  {
    title: "Strong Network of Lenders",
    description:
      "Wide range of loan options from a network of 25+ banking partners offering competitive rates.",
    header: <BentoImg source="/network.jpg" className="object-[10%_45%] " />,

    icon: <IconArrowWaveRightUp className="size-6 text-neutral-500" />,
  },
  {
    title: "Faster Loan Approval",
    description:
      "We help speed up the approval process to ensure timely disbursement.",
    header: <BentoImg source="/loanapproved.jpg" />,

    icon: <IconBoxAlignTopLeft className="size-6 text-neutral-500" />,
  },
  {
    title: "Transparency",
    description:
      "Clear communication of terms, conditions, and fees ensures that you’re never caught by surprise and always know how is the process working.",
    header: (
      <BentoImg source="/transparency.jpg" className="object-[10%_45%]" />
    ),

    icon: <IconBoxAlignRightFilled className="size-6 text-neutral-500" />,
  },
  {
    title: "No Hidden Charges",
    description:
      "We are upfront about fees, ensuring no surprises down the line.",
    header: <BentoImg source="/nohiddencharges.jpeg" />,
    icon: <IconClipboardCopy className="size-6 text-neutral-500" />,
  },
  {
    title: "Assistance at Every Step",
    description:
      "Support provided throughout the entire loan process, from application to disbursal and beyond.",
    header: <BentoImg source="/assistance.jpg" />,

    icon: <IconFileBroken className="size-6 text-neutral-500" />,
  },
  {
    title: "Flexible and Tailored Solutions",
    description:
      "We offer flexible repayment plans to fit your budget and personal financial situation.",
    header: <BentoImg source="/tailoredSolutions.jpeg" />,

    icon: <IconSignature className="size-6 text-neutral-500" />,
  },
];
