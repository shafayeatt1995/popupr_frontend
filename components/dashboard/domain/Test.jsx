"use client";
import { Button } from "@/components/ui/button";
import eventBus from "@/utils/event";
import { PlayIcon } from "lucide-react";
import React from "react";

export default function Test() {
  const test = () => {
    eventBus.emit("runTest");
  };
  return (
    <Button onClick={test}>
      <PlayIcon /> Test
    </Button>
  );
}
