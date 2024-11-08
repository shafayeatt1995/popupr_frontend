import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQ() {
  const qnas = [
    {
      title: "Is it a subscription?",
      body: "Nope! Make a one-time payment and access it for lifetime!",
    },
    {
      title: "Is it compatible with?...",
      body: "Simply copy and paste a small code snippet into your website. It works with any platform, including WordPress, Shopify, Wix, Webflow, and more.",
    },
    {
      title: "Do I need to code?",
      body: "You don’t need anything else! Just copy and paste a small code snippet into your website's <code><head></code> tag. It works seamlessly with WordPress, Shopify, Webflow, Bubble, Wix, and more!",
    },
    {
      title: "Does PopUpr work on mobile?",
      body: "Yes! To keep your visitor's experience smooth, only one PopUpr will be displayed at a time.",
    },
    {
      title: "What can I customize?",
      body: `Currently, you can customize these key elements <ul class="mt-2"><li>PopUpr title</li><li>PopUpr body</li><li>PopUpr Icon</li><li>When are PopUprs firing</li><li>How often are PopUprs firing</li><li>How long are PopUprs displayed</li></ul>`,
    },
  ];
  return (
    <div className="bg-gradient text-white" id="faq">
      <div className="container mx-auto md:py-20 py-12 px-2">
        <div className="grid md:grid-cols-2 gap-10 md:gap-3">
          <div className="flex flex-col items-center md:items-start">
            <h2>FAQ</h2>
            <p className="md:text-4xl text-2xl font-black mt-2 text-center md:text-left">
              Frequently Asked Questions
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {qnas.map((qna, i) => (
              <AccordionItem value={qna.title} key={i}>
                <AccordionTrigger>
                  <h3 className="md:text-2xl text-xl font-bold">{qna.title}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: qna.body }}
                  ></div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
