import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import DoctorBio from "@/components/sections/DoctorBio";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import Faq from "@/components/sections/Faq";
import MapHours from "@/components/sections/MapHours";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <DoctorBio />
      <Testimonials />
      <Booking />
      <Faq />
      <MapHours />
    </main>
  );
}
