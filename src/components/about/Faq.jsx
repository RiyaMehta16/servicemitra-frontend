import React from "react";
import { faqData } from "../../constants";
import Header from "../design/Header";
const Faq = () => {
  return (
    <div className="mb-28 mt-10">
      <Header>Frequenty Asked Questions</Header>
      <ul className="max-w-2xl mx-auto my-10 divide-y shadow shadow-blue-600 rounded-xl">
        {faqData.map((item, index) => (
          <li key={index}>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span className="text-lg font-bold opacity-70">
                  {item.question}
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p>{item.answer}</p>
                {item.listItems && (
                  <ul className="list-disc pl-6 mt-2">
                    {item.listItems.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </article>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
