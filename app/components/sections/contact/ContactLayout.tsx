"use client";

// ✅ Moved OUTSIDE the main component
const LocationCard = ({ mapSrc }: { mapSrc: string }) => (
  <div className="bg-gradient-to-b from-primary/20 to-transparent rounded-3xl border border-neutral-300 p-6 shadow-sm overflow-hidden">
    {/* Map */}
    <div className="h-64 rounded-2xl overflow-hidden mb-6">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
);

export default function ContactLayout() {
  return (
    <>
      {/* Location Section 1 - Map Left, Content Right */}
      <section className="w-full md:py-20 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT - Location Map Card */}
            <div>
              <LocationCard mapSrc="https://www.google.com/maps?q=Kadma,Jamshedpur,Jharkhand&output=embed" />
            </div>

            {/* RIGHT - Location Content */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h5 className="text-primary  font-semibold-token tracking-widest uppercase">Our Location</h5>
                <h2 className="font-bold-token  leading-[46px]">No connection no fear</h2>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold-token  leading-[35px]">Location 1</h4>
                <p className=" max-w-xs leading-[28.916px]">
                  NO-12, Ranapratap Path, Behind ICICI Bank, Kadma, Jamshedpur, Jharkhand, 831005
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section 2 - Content Left, Map Right (Alternating) */}
      <section className="w-full py-20 px-6 relative bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT - Location Content */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h5 className="text-primary  font-semibold-token tracking-widest uppercase">Our Location</h5>
                <h2 className="font-bold-token  leading-[46px]">No connection no fear</h2>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold-token  leading-[35px]">Location 2</h4>
                <p className=" max-w-xs leading-[28.916px]">
                  W/15, N Main Rd, C-Sector, Anna Nagar West Extension, Chennai, Tamil Nadu 600101
                </p>
              </div>
            </div>

            {/* RIGHT - Location Map Card */}
            <div>
              <LocationCard mapSrc="https://www.google.com/maps?q=Chennai,Tamil Nadu&output=embed" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}