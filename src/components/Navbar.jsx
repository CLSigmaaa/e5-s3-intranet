import React from 'react'

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 flex flex-row h-16 shadow-md">
      <div className="flex flex-row bg-slate-500 items-center pe-4">
        <h1 className="text-white text-lg font-bold">DUBETON</h1>
      </div>
      <div className="flex-1 flex flex-row bg-slate-400">
        <ul className="flex flex-row justify-end">
          <li className="text-white text-sm font-semibold p-4">
            <a href="/">Accueil</a>
          </li>
          <li className="text-white text-sm font-semibold p-4">
            <a href="/deliveries">Livraisons</a>
          </li>
          <li className="text-white text-sm font-semibold p-4">
            <a href="/trucks">Camions</a>
          </li>
          <li className="text-white text-sm font-semibold p-4">
            <a href="/employes">Employés</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
