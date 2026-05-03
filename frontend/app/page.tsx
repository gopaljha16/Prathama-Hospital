import { About } from "@/components/About";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Departments } from "@/components/Departments";
import { Doctors } from "@/components/Doctors";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceCards } from "@/components/ServiceCards";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <Departments />
        <Doctors />
        <AppointmentForm />
        <About />
      </main>
      <Footer />
    </>
  );
}
