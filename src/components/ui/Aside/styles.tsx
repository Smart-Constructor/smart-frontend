import { w } from "windstitch";

export const AsideComponent = w.aside(`
    flex flex-col 
    items-center 
    gap-4 
    w-2/12 
    h-screen 
    bg-white 
    shadow-lg 
    pt-8
`);

export const AsideItemContainer = w.div(`
    grid grid-cols-3 auto-cols-max 
    h-16 
    rounded-lg 
    gap-10 
    box-border 
    text-gray-800 
    transition ease-in 
    hover:bg-cyan-700 
    hover:text-white
`);

