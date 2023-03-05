import Link from "next/link";
import {useRouter} from "next/router";

export default function Header() {
    const router = useRouter()

    return (
        <header>
            <nav className="shadow-lg fixed w-full backdrop-blur-md">
                  <span className="w-full">
                    <div className="flex items-center h-20 w-full">
                      <div className="flex items-center items mx-20 justify-between w-full">
                        <span className="flex items-center justify-center gap-4 ">
                            <h1 className=" font-bold cursor-pointer text-xl">
                             Doe's Store
                            </h1>

                            <div className={"flex text-lg "} >
                                <Link href={"/"} locale={"en"}>
                                    <p
                                         className={`mr-2 cursor-pointer ${router?.locale === "en" ? "text-[red]" : ""}`} >
                                          EN
                                     </p>
                                </Link>

                                    |
                                <Link href={"/"} locale={"de"}>
                                         <p
                                             className={`ml-2 cursor-pointer ${router?.locale === "de" ? "text-[green]" : ""}`}
                                         >
                                            DE
                                         </p>
                                </Link>

                            </div>

                        </span>
                        <span className="hidden md:block">
                          <div className=" ml-10 flex items-baseline space-x-4">
                                              <a
                                                  href={"#reviews"}
                                                  className="cursor-pointer hover:bg-[#ffed02] text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                              >
                                                Reviews
                                            </a>

                               <a
                                   href={"#products"}
                                   className="cursor-pointer hover:bg-[#ffed02] text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                               >
                                                Products
                                            </a>

                              <a
                                  href={"#featured-products"}
                                  className="cursor-pointer hover:bg-[#ffed02] text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                              >
                                                Featured Products
                                            </a>
                            </div>
                        </span>
                      </div>
                    </div>
                  </span>
            </nav>
        </header>
    )
}
