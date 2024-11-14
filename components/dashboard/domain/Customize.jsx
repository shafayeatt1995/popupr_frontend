/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CameraIcon,
  CopyIcon,
  ExternalLinkIcon,
  GripVerticalIcon,
  Loader2Icon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import { ReactSortable } from "react-sortablejs";
import { userApi } from "@/server";
import { toast } from "sonner";
import Popup from "./Popup";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export default function Customize({ params }) {
  const router = useRouter();
  const script = useRef("");
  const [domain, setDomain] = useState(null);
  const [start, setStart] = useState("");
  const [send, setSend] = useState("");
  const [hide, setHide] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timerLoading, setTimerLoading] = useState(false);
  const [messageLoading, setMessageLoading] = useState(false);
  const click = useRef(true);
  const deleteList = useRef([]);

  const upMessage = (index, fieldName, value) => {
    const updatedMessages = [...messages];
    updatedMessages[index] = { ...updatedMessages[index], [fieldName]: value };
    setMessages(updatedMessages);
  };
  const addMessage = () => {
    const message = {
      image: null,
      title: "Title",
      message: "Message",
      time: "Time",
    };
    setMessages((p) => [...p, message]);
  };
  const handleImage = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedMessages = [...messages];
      updatedMessages[index] = {
        ...updatedMessages[index],
        image: reader.result,
      };
      setMessages(updatedMessages);
    };
    if (file) reader.readAsDataURL(file);
  };
  const removeMessages = (i) => {
    if (messages[i].key) {
      deleteList.current.push(messages[i].key);
    }
    setMessages(messages.filter((_, index) => index !== i));
  };
  const updateTimer = async (e) => {
    if (click.current) {
      try {
        e.preventDefault();
        click.current = false;
        setTimerLoading(true);
        const body = { start, send, hide, _id: domain._id };
        await userApi.updateTimer(body);
        toast.success("Timer successfully updated");
      } catch (error) {
        console.error(error);
      } finally {
        setTimerLoading(false);
        click.current = true;
      }
    }
  };
  const updateMessage = async (e) => {
    if (click.current) {
      try {
        e.preventDefault();
        click.current = false;
        setMessageLoading(true);
        await userApi.updateMessage({
          messages,
          _id: domain._id,
          deleteList: deleteList.current,
        });
        toast.success("Timer successfully updated");
        fetchDomain();
      } catch (error) {
      } finally {
        setMessageLoading(false);
        click.current = true;
      }
    }
  };
  const fetchDomain = useCallback(async () => {
    try {
      setLoading(true);
      const { id } = await params;
      const { domain } = await userApi.fetchSingleDomain({ id });
      setDomain(domain);
      setStart(domain.start);
      setSend(domain.send);
      setHide(domain.hide);
      setMessages(domain.messages);
      script.current = `<script defer data-domain="${domain.domain}" src="${window.location.origin}/js/script.js"></script>`;
      document.title = `${domain.domain} | Popupr`;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [params]);
  const copyScript = async () => {
    try {
      await navigator.clipboard.writeText(script.current);
      toast.success("script copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  const deleteDomain = async () => {
    try {
      if (confirm("Are you sure you want to delete this domain?")) {
        await userApi.deleteDomain({ _id: domain._id });
        toast.success("Domain Removed successfully");
        router.push("/dashboard");
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchDomain();
  }, [fetchDomain]);

  return (
    <>
      <div className="rounded-xl bg-indigo-200 shadow-inner md:p-10 py-4 px-2 my-5">
        {loading ? (
          <div className="flex flex-col md:flex-row gap-10 h-[450px]">
            <Skeleton className="size-full rounded-lg" />
            <Skeleton className="size-full rounded-lg" />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-1">
                  <img
                    src={domain?.favicon}
                    alt={domain.domain}
                    className="size-8 object-contain"
                  />
                  <a
                    href={`https://${domain.domain}`}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <span className="text-2xl font-bold cursor-pointer">
                      {domain.domain}
                    </span>
                    <ExternalLinkIcon />
                  </a>
                </div>
                <button
                  className="text-rose-500 px-2 md:px-0"
                  onClick={deleteDomain}
                >
                  <Trash2Icon />
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 mt-5 gap-10">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="start">Start popupr after (ms)</Label>
                  <Input
                    type="number"
                    id="start"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                  />
                  <p className="text-sm font-normal mt-2">
                    1. If the network is slow then the popupr may take a few
                    seconds to load
                  </p>
                  <p className="text-sm font-normal">
                    2. The first message will shown after {start}ms
                  </p>
                </div>
                <div>
                  <Label htmlFor="send">Send message every (ms)</Label>
                  <Input
                    type="number"
                    id="send"
                    value={send}
                    onChange={(e) => setSend(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="hide">Hide message after (ms)</Label>
                  <Input
                    type="number"
                    id="hide"
                    value={hide}
                    onChange={(e) => setHide(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  onClick={updateTimer}
                  disabled={timerLoading}
                >
                  {timerLoading && (
                    <Loader2Icon className="mr-2 size-4 animate-spin" />
                  )}
                  Update timer
                </Button>
              </form>
              <hr className="md:hidden" />
              <div className="space-y-6">
                <div className="border-2 border-dashed rounded-xl md:p-5 p-2">
                  <div className="max-h-80 overflow-y-auto mb-5">
                    <ReactSortable
                      list={messages}
                      setList={setMessages}
                      handle=".drag"
                      className="space-y-4"
                    >
                      {messages.map((message, i) => (
                        <div
                          className="flex gap-2 bg-gray-100/70 backdrop-blur-sm p-3 rounded-lg"
                          key={i}
                        >
                          <div className=" flex items-center drag cursor-grab">
                            <GripVerticalIcon />
                          </div>
                          <div>
                            <div
                              className={`size-16 flex justify-center ${
                                message.image ? "" : "border"
                              }`}
                            >
                              <label
                                className="w-full bg-white p-2 flex justify-center items-center rounded-lg"
                                htmlFor={`image-${i}`}
                              >
                                {message.image ? (
                                  <img
                                    src={message.image}
                                    className="w-14 object-contain rounded-sm"
                                    alt={message.title}
                                  />
                                ) : null}
                                <p className="absolute cursor-pointer border-white z-10 bg-indigo-100/50 size-8 rounded-full flex justify-center items-center">
                                  <CameraIcon />
                                </p>
                              </label>
                            </div>
                            <input
                              type="file"
                              accept="image/*"
                              id={`image-${i}`}
                              className="hidden"
                              onChange={(e) =>
                                handleImage(i, e.target.files[0])
                              }
                            />
                          </div>
                          <div className="flex-1 space-y-1">
                            <input
                              type="text"
                              className="w-full border px-1 font-bold bg-gray-100/70"
                              value={messages[i].title}
                              onChange={(e) =>
                                upMessage(i, "title", e.target.value)
                              }
                            />
                            <input
                              type="text"
                              className="w-full border px-1 bg-gray-100/70"
                              value={messages[i].message}
                              onChange={(e) =>
                                upMessage(i, "message", e.target.value)
                              }
                            />
                          </div>
                          <div className="flex flex-col justify-between items-center">
                            <input
                              type="text"
                              className="max-w-16 text-sm border text-center rounded-lg font-bold bg-gray-100/70"
                              value={messages[i].time}
                              onChange={(e) =>
                                upMessage(i, "time", e.target.value)
                              }
                            />
                            <button
                              className="text-rose-500 -mt-10"
                              onClick={() => removeMessages(i)}
                            >
                              <Trash2Icon size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      className={messages.length > 0 ? "" : "w-full"}
                      onClick={addMessage}
                    >
                      <PlusIcon />
                      Add popupr
                    </Button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  onClick={updateMessage}
                  disabled={messageLoading}
                >
                  {messageLoading && (
                    <Loader2Icon className="mr-2 size-4 animate-spin" />
                  )}
                  Update popupr
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <hr className="my-10" />
      <div className="mx-auto max-w-lg text-center my-10">
        <h2 className="text-xl font-bold">
          Activate Your Popupr in Seconds 💥
        </h2>
        <p className="font-normal">
          Paste the script in the
          <code className="font-semibold px-1">{`<head>`}</code>of your website
        </p>

        <div className="flex bg-indigo-100 p-5 rounded-xl shadow-inner mt-10 items-center gap-3">
          <div className="flex-1 break-all md:break-normal">
            {script.current}
          </div>
          <div className="w-10">
            <button
              className="size-10 rounded-full bg-white flex justify-center items-center"
              onClick={copyScript}
            >
              <CopyIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      <Popup start={start} send={send} hide={hide} messages={messages} />
    </>
  );
}
