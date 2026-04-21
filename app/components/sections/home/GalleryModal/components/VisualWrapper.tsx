export const VisualWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
      absolute 
      left-1/2 
      -translate-x-1/2 
      top-0

      -translate-y-[38%] 
      sm:-translate-y-[44%] 
      md:-translate-y-[24%] 
      lg:-translate-y-[22.50%]

      flex justify-center w-full z-10 pointer-events-none
    "
  >
    {children}
  </div>
);