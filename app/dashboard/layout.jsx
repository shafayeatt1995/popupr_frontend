import Nav from "@/components/dashboard/nav";
import { authUser } from "@/services/nextAuth";
import React from "react";

export default async function Layout({ children }) {
  const user = await authUser();
  return (
    <div>
      {user && <Nav user={user} />}
      {children}
    </div>
  );
}
