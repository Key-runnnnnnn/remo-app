import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is ZYMO?",
      answer:
        "Zymo is the largest aggregator for self-drive car rentals in India and offers its services through its mobile apps. It provides a unique price comparison feature that allows users to compare prices and choose the best deal for them. With this feature, customers can save both time and money when renting a car. Zymo also offers a range of vehicles to suit different needs, including hatchbacks, sedans, SUVs, and luxury cars.",
    },
    {
      question: "Why customers should choose Zymo?",
      answer: [
        "1. Wide variety of cars: Zymo offers a diverse range of cars to choose from, catering to different needs and budgets.",
        "2. Affordable prices: Zymo's pricing model is transparent and affordable, with no hidden fees or charges.",
        "3. Convenience: With Zymo's self-drive model, customers have the freedom and flexibility to travel at their own pace and schedule.",
        "4. Ease of booking: Zymo's user-friendly app and website make it easy to book a car in just a few clicks.",
        "5. Quality service: Zymo focuses on providing excellent customer service to its customer and their app rating is testament to that.",
        "6. Price comparison feature: Zymo's price comparison feature allows customers to compare rates and choose the best deal for their needs.",
        "7. Trustworthiness: Zymo is committed to transparency and building a trustworthy brand that customers can rely on for their car rental needs.",
      ],
    },
    {
      question: "Is Zymo available in my city?",
      answer:
        "Zymo is currently active in more than 50 cities of India, please refer the list of cities on our website.",
    },
    {
      question: "What types of cars are available on Zymo?",
      answer:
        "Zymo offers a wide range of cars for self-drive rental, including hatchbacks, sedans, SUVs, and luxury cars. The specific models available may vary depending on the location and availability.",
    },
    {
      question: "How much does it cost to rent cars from ZYMO?",
      answer:
        "Our prices are most competitive in the industry. The cost of renting a car from ZYMO varies depending on the type of car and the duration of the rental. Customers can choose from a wide range of cars at different price points starting from as low as Rs. 49 per hour. We also offer daily, weekly, and monthly rental options at competitive prices. The exact cost can be found on the ZYMO website or app.",
    },
    {
      question: "What are the advantages of renting a car from Zymo?",
      answer:
        "Its price comparison feature, which allows customers to easily compare prices of different self-drive car rental options on the platform. This feature is aimed at providing customers with the best possible rental experience, while also helping them save money. In addition, Zymo also focuses on transparency and excellent customer service to build trust with its customers and become a trusted lifestyle brand in the Indian market.",
    },
    {
      question: "How much does it cost to rent cars from ZYMO?",
      answer: [
        "1. Cost savings.",
        "2. Flexibility.",
        "3. No maintenance/ Road tax / Insurance cost.",
        "4. No waiting periods.",
        "5. No lock-in period.",
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div id="faq" className="w-full max-w-3xl mx-auto">
        <h2 className="text-4xl text-center font-semibold mb-10">
          Frequently Asked Questions
        </h2>
        <ul className="accordion space-y-3">
          {faqData.map((faq, index) => (
            <li key={index} className="border-b">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left flex justify-between items-center p-4 font-semibold text-white bg-gradient-to-r from-[#58175c] to-[#b34fdb] rounded-t-2xl text-xl ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[#b34fdb] to-[#58175c]"
                    : ""
                }`}
              >
                <span>{faq.question}</span>
                <span className="text-3xl">
                  {activeIndex === index ? "x" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                {Array.isArray(faq.answer) ? (
                  <ul className="p-6 text-white bg-gradient-to-r from-[#b34fdb] to-[#58175c] rounded-b-2xl text-lg">
                    {faq.answer.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p
                    className="p-6 text-white bg-gradient-to-r from-[#b34fdb] to-[#58175c] rounded-b-2xl text-lg"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
