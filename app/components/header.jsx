import {useState } from 'react'
export default function Header() {
    return (
        <header className="bg-white bg-opacity-10">
        <nav className=" mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 text-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-4xl font-bold text-indigo-600">
                OPENSEASONS
              </span>
              <img className="h-8 w-auto" src="" alt="" />
            </a>
          </div>
        </nav>
      </header>
    );
}