import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <BookingForm />
      <Footer />
    </main>
  );
}
