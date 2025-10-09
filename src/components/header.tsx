/* eslint-disable prettier/prettier */
'use client'

import { Sprout, User, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
	const pathname = usePathname()

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/garden', label: 'Jardins' },
		{ href: '/catalog', label: 'Produtos' },
	]

	return (
		<header className="bg-black text-white w-full">
			<nav className="mx-auto py-3 px-6 flex justify-between items-center">

				<div className="flex items-center">
					<Sprout className="h-5 w-5 mr-2" />
					<Link href="/" className="text-base font-bold">
						Jar-din
					</Link>
				</div>

				<div className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => {
						const isActive = pathname === link.href
						return (
							<Link
								key={link.href}
								href={link.href}
								className={`relative text-base hover:text-gray-300 ${isActive ? 'text-white' : 'text-gray-400'
									}`}
							>
								{link.label}
								{isActive && (
									<span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white"></span>
								)}
							</Link>
						)
					})}
				</div>

				<div className="flex items-center space-x-3">
					<Link
						href="/"
						className="hidden sm:block text-sm hover:text-gray-300"
					>
						Se torne um locador
					</Link>
					<button className="flex items-center space-x-3 bg-white text-black px-2 py-1 rounded-full hover:bg-gray-200">
						<Menu className="h-3 w-3 hover:cursor-pointer" />
						<User className="h-5 w-5 bg-gray-300 rounded-full p-1 hover:cursor-pointer" />
					</button>
				</div>

			</nav>
		</header>
	)
}