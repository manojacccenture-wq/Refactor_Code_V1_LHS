'use client';

import IndustryCard from "@/app/components/shared/ui/IndustryCard";

const manufacturingImage = "/Industries/Image_1.svg";
const utilitiesImage = "/Industries/Image_2.svg";
const commercialFoodImage = "/Industries/Image_3.svg";

const industries = [
    {
        id: 1,
        name: "Steel & Manufacturing",
        description: "High-volume production environments where system downtime translates directly to production loss. ERP integration, shop-floor monitoring, and procurement automation are operationally critical — not optional.",
        image: manufacturingImage,
        deliverables: [
            "SAP-integrated MIS",
            "Production monitoring platforms",
            "Procurement intelligence",
            "IT manpower under SLA governance",
            "Executive dashboards that surface operational exceptions in real time.",
        ],
        imagePosition: "left" as const,
    },
    {
        id: 2,
        name: "Commercial Food Courts & F&B Operators",
        description: "Multi-vendor food environments require centralised billing, revenue reconciliation, inventory control, and vendor performance management — with uptime commitments that match peak hours",
        image: commercialFoodImage,
        deliverables: [
            "Food ERP Platform — POS, vendor settlement",
            "Inventory management",
            "Franchise management",
            "Full mobile app ecosystem",
            "Executive dashboards that surface operational exceptions in real time.",
        ],
        imagePosition: "left" as const,
    },
    {
        id: 3,
        name: "Utilities & Infrastructure",
        description: "Operational continuity is regulatory and operational imperative. Systems must integrate field hardware, SCADA/IoT inputs, and management dashboards without failure.",
        image: utilitiesImage,
        deliverables: [
            "IoT device integration",
            "Field asset monitoring",
            "Infrastructure IT manpower",
            "IT manpower under SLA governance",
            "Executive dashboards that surface operational exceptions in real time.",
        ],
        imagePosition: "right" as const,
    },
];

export default function IndustriesContent() {
    return (
        <section className="w-full py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-24">
                    {industries.map((industry) => (
                        <IndustryCard key={industry.id} industry={industry} />
                    ))}
                </div>
            </div>
        </section>
    );
}
