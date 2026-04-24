import DeliveryHero from "@/app/components/sections/delivery-framework/DeliveryHero/DeliveryHero";
import DeliveryTimeline from "@/app/components/sections/delivery-framework/DeliveryTimeline/DeliveryTimeline";


export const metadata = {
  title: "Delivery Framework | LHS",
  description: "Our six-phase delivery framework ensures successful ERP implementation.",
};

export default function DeliveryFrameworkPage() {
  return (
    <>
      <DeliveryHero />
      <DeliveryTimeline />
    </>
  );
}
