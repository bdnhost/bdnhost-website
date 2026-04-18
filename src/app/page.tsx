import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureRow } from "@/components/FeatureRow";
import { ProductsGrid } from "@/components/ProductsGrid";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureRow />
      <ProductsGrid />
      <CTASection />
      <Footer />
    </>
  );
}
