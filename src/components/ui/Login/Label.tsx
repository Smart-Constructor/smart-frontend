
const LabelComponent = (props: labelComponent) => {
    const {placeholder, type, label} = props;
    return (
        <label className="flex flex-col box-border gap-3 font-semibold w-10/12 text-cyan-900 text-xl transition-all ease-in text-left">
            <h1 className="text-base">{label}</h1>
            <input 
            className="transition-all ease-in w-full h-16 p-2 placeholder:text-cyan-900/50 text-center focus:outline-none focus:border-none focus:ring focus:ring-cyan-300/50 rounded-xl
            focus:text-cyan-900/50 focus:text-center border-2 border-cyan-950/30" 
            type={type}
            placeholder={placeholder}
            ></input>
        </label>
    )
}

export default LabelComponent

type labelComponent = {
    placeholder: string,
    type: string,
    label?: string
}