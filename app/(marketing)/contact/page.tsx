

import ContactHero from "@/app/components/sections/contact/ContactHero";
import ContactLayout from "@/app/components/sections/contact/ContactLayout";

export const metadata = {
  title: "Contact Us | LHS",
  description: "Get in touch with us for inquiries, support, or project discussions.",
};

export default function ContactPage() {
  return (
    <section>
      <ContactHero />
      <ContactLayout />
    </section>
  );
}
