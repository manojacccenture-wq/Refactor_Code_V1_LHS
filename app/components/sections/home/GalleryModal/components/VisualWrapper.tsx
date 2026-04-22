export const VisualWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
      absolute 
      left-1/2 
      -translate-x-1/2 
      top-0

      -translate-y-[34%] 
            xs:-translate-y-[60%] 
      sm:-translate-y-[45%] 
      md:-translate-y-[24%] 
      lg:-translate-y-[23.50%]

      flex justify-center w-full z-10 pointer-events-none
    "
  >
    {children}
  </div>
);