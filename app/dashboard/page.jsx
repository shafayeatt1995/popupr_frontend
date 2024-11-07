"use client";
import React, { useCallback, useRef, useState } from "react";
import { userApi } from "@/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { paginate } from "@/utils";
import { ChevronRightIcon, Loader2Icon } from "lucide-react";
import PopupItem from "@/components/dashboard/PopupItem";

export default function Dashboard() {
  const perPage = 24;
  const [loading, setLoading] = useState(false);
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
      const { items } = await userApi.fetchDomain(paginate(domains, perPage));
      setDomains((p) => [...p, ...items]);
    } catch (error) {}
  };

  useState(() => {
    fetchItems();
  }, []);

  return (
    <div className=" container mx-auto">
      <div className="flex flex-col md:flex-row mt-10 gap-5 px-2 my-10">
        <div className="flex-1">
          <h2 className="text-4xl font-bold">{domains.length} Domain</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 my-5 gap-5">
            {domains.map((domain, i) => (
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
                  placeholder="popup.com"
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
  );
}
