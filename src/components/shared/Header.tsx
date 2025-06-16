'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center -my-4">
            <Image
              src="/logo.png"
              alt="Grabsy Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-black' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/products') ? 'text-black' : 'text-muted-foreground'
              }`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-black' : 'text-muted-foreground'
              }`}
            >
              About
            </Link>
            <Link
              href="/login"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/login') ? 'text-black' : 'text-muted-foreground'
              }`}
            >
              Login
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <Image
                src="/cart.png"
                alt="Cart"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="hidden md:inline">Go to Cart</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link
                    href="/"
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/') ? 'text-black' : 'text-muted-foreground'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/products') ? 'text-black' : 'text-muted-foreground'
                    }`}
                  >
                    Products
                  </Link>
                  <Link
                    href="/about"
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/about') ? 'text-black' : 'text-muted-foreground'
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    href="/login"
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive('/login') ? 'text-black' : 'text-muted-foreground'
                    }`}
                  >
                    Login
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
} 