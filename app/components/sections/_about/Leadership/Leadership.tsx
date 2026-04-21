
import Image from "next/image";

export default function Leadership() {
  const imgImage4 = "/Janakai_Ramana.png";
  const imgReport = "/about/Leader_Icon.svg";

  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary uppercase mx-auto font-bold tracking-widest">
            {`"Built on Execution, Not Assumptions"`}
          </p>
          <h2 className="font-bold" >
            Leadership
          </h2>
        </div>

        {/* Leadership Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md border" style={{ borderColor: "var(--color-neutral-300)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {/* Image */}
            <div className="relative h-64 md:h-auto md:col-span-1 overflow-hidden rounded-xl md:rounded-none">
              <Image
                src={imgImage4}
                alt="Janaki Raman"
                fill
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
              {/* Name & Title */}
              <div className="mb-6">
                <h2>
                  Janaki Raman
                </h2>
                <p >
                  Managing Director, Livelihood system.
                </p>
              </div>

              {/* Experience Subtitle */}
              <h3 >
                His Experience
              </h3>
              <p className="mb-[4%]" >
                Over two decades of leading enterprise system deployments across complex environments, we are focusing on building solutions that don’t just get approved but work consistently on ground.
              </p>

    

              {/* Experience List */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0 mt-1">
                    <Image
                      src={imgReport}
                      alt=""
                      width={24}
                      height={24}
                      // style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(78%) saturate(597%) hue-rotate(120deg)" }}
                    />
                  </div>
                  <p className="" >
                    Led long-term engagements within the Tata ecosystem, including JUSCO and Tata Steel
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="shrink-0 mt-1">
                    <Image
                      src={imgReport}
                      alt=""
                      width={24}
                      height={24}
                    // className="w-6 h-6"
                    // style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(78%) saturate(597%) hue-rotate(120deg)" }}
                    />
                  </div>
                  <p >
                    Delivered and maintained systems across multi-location, high-dependency operations
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0 mt-1">
                    <Image
                      src={imgReport}
                      alt=""
                      width={24}
                      height={24}

                    />
                  </div>
                  <p >
                    Built teams and processes capable of handling large-scale, real-world execution
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
