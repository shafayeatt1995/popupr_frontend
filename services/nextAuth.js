import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "@/config/authOptions";

let userSession = null;

const getAuth = async () => {
  if (userSession) return userSession;

  userSession =
    typeof window === "undefined"
      ? await getServerSession(authOptions)
      : await getSession();
  return userSession;
};

export const jwtToken = async () => {
  const session = await getAuth();
  return session?.user?.accessToken || false;
};

export const authUser = async () => {
  const session = await getAuth();
  if (session?.user) {
    const { accessToken, ...userWithoutToken } = session?.user;
    return userWithoutToken;
  } else {
    return null;
  }
};

export const removeSession = () => {
  userSession = null;
};
