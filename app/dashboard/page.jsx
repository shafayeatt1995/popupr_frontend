"use client";
import React, { useEffect, useRef, useState } from "react";
import { userApi } from "@/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { paginate } from "@/utils";
import {
  ChevronRightIcon,
  CircleCheckBigIcon,
  Loader2Icon,
  RefreshCwIcon,
} from "lucide-react";
import PopupItem from "@/components/dashboard/PopupItem";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { refreshToken } from "@/services/nextAuth";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const perPage = 24;
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [domains, setDomains] = useState([]);
  const click = useRef(true);
  const domain = useRef(null);

  const addDomain = async (e) => {
    if (click.current) {
      try {
        e.preventDefault();
        click.current = false;
        setLoading(true);
        const res = await userApi.addDomain({
          domain: domain?.current?.value,
        });
        if (res.toast) toast.success(res.toast);
        domain.current.value = "";
        setDomains([]);
        fetchItems();
      } catch (error) {
        if (error?.error?.toast) {
          toast.error(error.error.toast);
        }
      } finally {
        setLoading(false);
        click.current = true;
      }
    }
  };
  const fetchItems = async () => {
    try {
      setFetchLoading(true);
      const { items } = await userApi.fetchDomain(paginate(domains, perPage));
      setDomains((prev) => [...prev, ...items]);
    } catch (error) {
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const verifyQuery = searchParams.get("verify");
        if (verifyQuery == "true") {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
          setIsOpen(true);
          setTimeout(async () => {
            await refreshToken();
            setIsSuccess(true);
          }, 10000);
        } else {
          await fetchItems();
        }
      } catch (error) {}
    };
    init();
  }, [searchParams]);
  useEffect(() => {
    document.title = "Dashboard | Popupr";
  }, []);

  return (
    <>
      <div className=" container mx-auto">
        <div className="flex flex-col md:flex-row mt-10 gap-5 px-2 my-10">
          <div className="flex-1">
            <h2 className="text-4xl font-bold">
              {domains.length} Domain links
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 my-5 gap-5">
              {fetchLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton className="h-24 w-full rounded-lg" key={i} />
                  ))
                : domains.map((domain, i) => (
                    <PopupItem domain={domain} key={i} />
                  ))}
            </div>
            <div className="flex justify-center">
              {domains.length
                ? domains.length % perPage === 0 && (
                    <Button onClick={fetchItems}>
                      Load More <ChevronRightIcon />
                    </Button>
                  )
                : null}
            </div>
          </div>
          <div className="md:w-72">
            <div className="p-4 rounded-xl bg-gradient text-white">
              <form className="space-y-8" onSubmit={addDomain}>
                <div className="space-y-2">
                  <h2 className="font-bold text-lg">Add Domain</h2>
                  <p className="text-sm">
                    {`Add your domain name to get started, no need to add "https://"
                  or "www."`}
                  </p>
                </div>
                <div className="space-y-3">
                  <Input
                    placeholder="popupr.com"
                    type="text"
                    required
                    ref={domain}
                    className="text-gray-800"
                  />
                  <Button
                    className="w-full"
                    variant="white"
                    type="submit"
                    disabled={loading}
                  >
                    {loading && (
                      <Loader2Icon className="mr-2 size-4 animate-spin" />
                    )}
                    Add website
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[650px]">
          <DialogTitle></DialogTitle>
          <div className="flex flex-col gap-4">
            <div className="text-center flex items-center flex-col gap-4">
              {isSuccess ? (
                <CircleCheckBigIcon size={90} className="text-green-500" />
              ) : (
                <RefreshCwIcon
                  size={90}
                  className="animate-spin-slow text-indigo-500"
                />
              )}
              <p className="text-xl md:text-3xl font-bold mb-5">
                {isSuccess
                  ? `Your purchase is verified. Thank you for your order.`
                  : `Your purchase verification is in progress. Please don't close the browser.`}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
