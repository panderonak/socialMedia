import { forwardRef, useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const ID = useId();
  return (
    <div className="bg-red-500">
      {label && (
        <label htmlFor={ID} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        className={`${className} px-5 py-3 rounded-3xl bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
        type={type}
        ref={ref}
        {...props}
        id={ID}
      />
    </div>
  );
}

export default forwardRef(Input);