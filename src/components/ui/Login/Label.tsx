const LabelComponent = (props: labelComponent) => {
  const { placeholder, type, label } = props;
  return (
    <div
      className="flex flex-col box-border gap-3 font-semibold w-10/12 text-xl transition-all ease-in text-center relative"
      data-te-input-wrapper-init
    >
      <input
        id={type}
        name={placeholder}
        className="peer transition-all ease-in w-full h-16 p-2  placeholder:text-base text-center focus:outline-none focus:border-none focus:ring focus:ring-cyan-300/50 rounded-xl
            focus:text-cyan-900/50 focus:text-center border-2 border-cyan-950/20 focus:scale-105 box-border placeholder-transparent
            "
        type={type}
        placeholder={placeholder}
        required
      />
      <label
        htmlFor={type}
        className="transition-all ease-in text-lg text-cyan-900/50 absolute -top-4 left-4 scale-95
      peer-focus:-top-[18px] peer-focus:left-2 peer-focus:scale-100 peer-focus:text-cyan-500 bg-white
      peer-data-[te-input-state-active]:-top-[18px]
      "
      >
        {label}
      </label>
    </div>
  );
};

export default LabelComponent;

type labelComponent = {
  placeholder?: string;
  type: string;
  label?: string;
};
