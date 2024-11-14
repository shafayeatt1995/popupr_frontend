import Customer from "@/components/home/Customer";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Marketing from "@/components/home/Marketing";
import Pricing from "@/components/home/Pricing";
import Reason from "@/components/home/Reason";
import Usecase from "@/components/home/Usecase";
import { authUser } from "@/services/nextAuth";

export const metadata = { title: "Turn visitor into customer | Popupr" };

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Marketing />
      <Reason />
      <Usecase />
      <Pricing />
      <FAQ />
      <Customer />
      <Footer />
    </>
  );
}
