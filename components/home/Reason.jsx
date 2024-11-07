import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Reason() {
  const qnas = [
    {
      title: "✍️ Create a Popup",
      body: "Create pop-up messages in 2 minutes—no coding needed! Write about the biggest problem your visitors face. Make it emotional. Use familiar icons.",
    },
    {
      title: "🔗 Add to your site",
      body: "Simply copy and paste a small code snippet into your website. It works with any platform, including WordPress, Shopify, Wix, Webflow, and more.",
    },
    {
      title: "🤑 Get more customers",
      body: "Popup sends impactful pop-up messages that highlight your visitors pain point and encourage them to take action. Watch your conversion rates skyrocket🚀",
    },
  ];
  return (
    <div className="container mx-auto md:py-20 py-12 px-2">
      <div className="max-w-2xl mx-auto">
        <h2 className="md:text-5xl text-2xl text-center font-black">
          Give your visitors a reason
          <br className="hidden md:block" />
          to buy today,
          <span className="px-4 ml-1.5 leading-relaxed whitespace-nowrap bg-gradient text-white">
            not tomorrow
          </span>
        </h2>
        <p className="md:text-lg text-center mt-5 md:px-20">
          PopUpr delivers impactful pop-up messages that highlight your visitors
          pain points and encourage them to take action.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-5 gap-14 mt-20">
        <div className="flex items-center">
          <Accordion
            type="single"
            collapsible
            defaultValue={qnas[0].title}
            className="w-full"
          >
            {qnas.map((qna, i) => (
              <AccordionItem value={qna.title} key={i}>
                <AccordionTrigger>
                  <h3 className="md:text-2xl text-lg font-bold">{qna.title}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="md:text-lg">{qna.body}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="md:px-10 flex justify-center">
          <video
            className="lg:max-w-[450px] aspect-square w-full border-8 border-indigo-500 rounded-3xl"
            autoPlay
            loop
            playsInline
            muted
            controls
            src="/video/how-to.mp4"
            type="video/mp4"
          />
        </div>
      </div>
    </div>
  );
}
