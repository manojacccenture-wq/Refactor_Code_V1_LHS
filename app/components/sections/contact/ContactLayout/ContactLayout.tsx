"use client";

const LocationCard = ({ mapSrc }: { mapSrc: string }) => (
  <div className="bg-linear-to-b from-primary/30 via-primary/5 to-white rounded-[32px] p-4 md:p-6 shadow-[0px_8px_40px_rgba(0,0,0,0.06)] border border-white/80 overflow-hidden">
    {/* Map */}
    <div className="relative w-full h-[300px] md:h-[400px] rounded-[24px] overflow-hidden bg-white shadow-sm ">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </div>
  </div>
);

export default function ContactLayout() {
  return (
    <>
      {/* Location Section 1 - Map Left, Content Right */}
      <section className="w-full  px-6 relative bg-white">
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
                <h3 className="font-bold-token  leading-[35px]">Location 1</h3>
                <p className=" max-w-xs leading-[28.916px]">
                  NO-12, Ranapratap Path, Behind ICICI Bank, Kadma, Jamshedpur, Jharkhand, 831005
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section 2 - Content Left, Map Right (Alternating) */}
      {/* Added overflow-hidden to contain the glow */}
      <section className="w-full py-20 px-6 relative bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">

        {/* ================= BACKGROUND GLOWS ================= */}
        {/* Left Glow */}
        <div
          className="absolute top-[-10%] -left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[var(--color-primary-1)] blur-[100px] md:blur-[140px] opacity-20 pointer-events-none z-0"
        />

        {/* Right Glow */}
        <div
          className="absolute top-[30%] -right-[15%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[var(--color-primary-1)] blur-[100px] md:blur-[160px] opacity-[0.15] pointer-events-none z-0"
        />

        {/* TOP FADE OUT: Smoothly blends the top edge into Section 1 */}
        <div
          className="absolute top-0 left-0 right-0 h-[100px] md:h-[150px] bg-gradient-to-b from-white to-transparent pointer-events-none z-[1]"
        />

        {/* BOTTOM FADE OUT: Smoothly blends the bottom edge into the footer/next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[100px] md:h-[150px] bg-gradient-to-t from-white to-transparent pointer-events-none z-[1]"
        />
        {/* ================================================== */}

        {/* Added relative z-10 to ensure content sits above the glows */}
        <div className="relative z-10 max-w-7xl mx-auto">
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