/* eslint-disable @next/next/no-img-element */
"use client";
import eventBus from "@/utils/event";
import React, { useCallback, useEffect, useState } from "react";

export default function Popup({ hide, messages, send, start }) {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [delivery, setDelivery] = useState(true);

  const pcTest = useCallback(() => {
    setDelivery(false);
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < messages.length) {
          const msg = messages[index++];
          setVisibleMessages((prev) => [...prev, msg]);
          setTimeout(() => {
            setVisibleMessages((prev) => prev.filter((m) => m !== msg));
          }, hide);
        } else {
          setDelivery(true);
          clearInterval(interval);
        }
      }, send);
      return () => clearInterval(interval);
    }, start);
    return () => clearTimeout(timeout);
  }, [hide, messages, send, start]);
  const mobileTest = useCallback(() => {
    setDelivery(false);
    const showMessages = (i = 0) => {
      if (i >= messages.length) return setDelivery(true);
      setVisibleMessages([messages[i]]);
      setTimeout(() => {
        setVisibleMessages([]);
        setTimeout(() => showMessages(i + 1), 100);
      }, hide);
    };
    const timeout = setTimeout(showMessages, start);
    return () => clearTimeout(timeout);
  }, [hide, messages, start]);

  useEffect(() => {
    const handleRunTest = () => {
      window.innerWidth <= 768 ? mobileTest() : pcTest();
    };
    eventBus.on("runTest", handleRunTest);
    return () => eventBus.off("runTest", handleRunTest);
  }, [mobileTest, pcTest]);

  return (
    <div className="fixed z-[9999] top-12 md:left-12 left-4 md:right-12 right-4 bottom-4 pointer-events-none">
      <div className="absolute left-0 right-0 top-0 bottom-0 md:bottom-auto flex flex-col-reverse items-end gap-2">
        {visibleMessages.map((msg, i) => (
          <div
            className={`w-full md:w-[350px] mb-1 flex space-x-3 bg-gray-200/75 backdrop-blur p-3 shadow-lg rounded-xl z-50  pointer-events-auto ${
              !delivery
                ? i + 1 !== visibleMessages.length
                  ? "animate-appearFromRight"
                  : "animate-slideIn"
                : ""
            }`}
            key={i}
          >
            <div className="shrink-0 rounded-lg">
              <div className="rounded-lg">
                <img
                  alt={msg.title}
                  loading="lazy"
                  decoding="async"
                  className="size-14 object-contain rounded"
                  src={msg.image}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="font-semibold text-gray-950">{msg.title}</div>
              <div className="text-sm font-normal text-gray-700 leading-tight">
                {msg.message}
              </div>
            </div>
            <div>
              <p className=" text-sm text-gray-600">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
