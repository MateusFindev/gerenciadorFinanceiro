import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white">
    <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo */}
      <div className="text-2xl font-bold">Gerenciador Fin</div>

      {/* Menu de Navegação */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/sobre" className="hover:text-gray-300">
              Sobre
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-300">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
};
