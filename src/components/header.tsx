"use client"; // 1. Transforma este em um Client Component

import { Sprout, User, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

    const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gardenTest', label: 'Jardins' },
    { href: '/produtos', label: 'Produtos' },
    ];

    return (
    <header className="bg-black text-white w-full">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
            <Sprout className="h-8 w-8 mr-2" />
            <Link href="/" className="text-2xl font-bold">
            Jar-din
            </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
                <Link
                key={link.href}
                href={link.href}
                className={`relative text-lg hover:text-gray-300 ${
                    isActive ? 'text-white' : 'text-gray-400'
                }`}
                >
                {link.label}
                {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white"></span>
                )}
                </Link>
            );
            })}
        </div>
        <div className="flex items-center space-x-6">
            <Link href="/become-a-host" className="hidden sm:block text-base hover:text-gray-300">
            Se torne um locador
            </Link>
            <button className="flex items-center space-x-3 bg-white text-black px-3 py-2 rounded-full hover:bg-gray-200">
            <Menu className="h-5 w-5" />
            <User className="h-7 w-7 bg-gray-300 rounded-full p-1" />
            </button>
        </div>
        </nav>
    </header>
    );
};

export default Header;