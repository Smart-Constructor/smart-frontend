import Link from "next/link";
import { AsideItemContainer } from "./styles";
import { Children } from "react";

const AsideItem = (props: AsideItens) => {
  const { title, href, pathIcon } = props as AsideItens;
  return (
    <Link href={href} className="w-11/12 h-auto m-0">
      <AsideItemContainer>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={pathIcon} />
          </svg>
        </div>
        <h1 className="font-semibold text-[18px] flex items-center justify-center">
          {title}
        </h1>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </AsideItemContainer>
    </Link>
  );
};

export default AsideItem;

interface AsideItens {
  title: string;
  href: string;
  pathIcon: string
}
