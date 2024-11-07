/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function PopupItem({ domain }) {
  return (
    <Link
      href={`/dashboard/domain/${domain._id}`}
      className="w-full flex shadow-inner rounded-lg bg-indigo-50 p-3 gap-3 cursor-pointer"
    >
      <img
        src={domain.favicon}
        alt={domain.domain}
        className="size-8 object-contain"
      />
      <div className="">
        <p className="font-bold">{domain.domain}</p>
        <ul className="text-sm font-normal mt-1">
          <li>{domain.messages.length} popupr messages</li>
          <li>0 visitor in last 24h</li>
        </ul>
      </div>
    </Link>
  );
}
