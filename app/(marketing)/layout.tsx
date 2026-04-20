// app/(marketing)/layout.tsx ✅ CORRECT
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}