"use client";

import React, { PropsWithRef } from 'react'
import LeftIcon from "@/components/icons/left"
import Link from "next/link"
import { usePathname } from "next/navigation"
import cn from "classnames"

const navLink = [{
    href: "/",
    label: "Home"
},
    {
        href: "/contact",
        label: "Contact"
    }]
export default function BlogHeader() {
    const path = usePathname()

    return (
      <div className={cn("flex justify-between  py-4 sm:py-6 transition-all duration-500 backdrop-")} id={"navi"}>
          <div>
        <Link href={path==="/blogs"? "/":"/blogs"} >
          <LeftIcon/>
        </Link>
      </div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div>
      <nav className="md:space-x-4 space-y-4 space-x-2">

                      <Link href="/">
                          <span className="text-sm font-light text-zinc-400 hover:text-zinc-200 transition transform">Home</span>
                  </Link>
                  <Link href={path==="/contact"? "/blogs" : "/contact"}>
                      <span className="text-sm font-light text-zinc-400 hover:text-zinc-200 transition transform">{path==="/contact"? "Blogs" : "Contact"}</span>
                    </Link>

      </nav>
          </div>
      </div>
  )
}

