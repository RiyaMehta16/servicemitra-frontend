import Header from "../design/Header";
import InfiniteMovingCards from "./InfiniteMovingCards";

function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "ServiceMitra LOAN PROVIDER customer friendly approach is what I liked. They are so transparent in their dealings. I look forward for my future association with them.",
      name: "Aniket Salvi",
      title: "",
    },
    {
      quote:
        "We are enjoy a delightful relationship with ServiceMitra SOLUTIONS. We have found it extremely smooth and easy to get any information regarding our loans from them. Their processes are well-defined and loans are disbursed within agreed timelines. There is comple",
      name: "Mr. Sood",
      title: "Sood Communications",
    },
    {
      quote:
        "ServiceMitra LOAN PROVIDER customer friendly approach is what I liked. They are so transparent in their dealings. I look forward for my future association with them.",
      name: "Vedanti Ghayal",
      title: "Student",
    },
    {
      quote:
        "I needed the money for my daughter's marriage. I have taken many loans from ServiceMitra Financial Solution's and I am very happy with their services.",
      name: "Parmeet Kaur",
      title: "Home Maker",
    },
    // Add more items as needed
  ];

  return (
    <div className="-mt-32 mb-20">
      <Header>Testimonials</Header>
      <InfiniteMovingCards items={testimonials} />
    </div>
  );
}

export default TestimonialSection;
