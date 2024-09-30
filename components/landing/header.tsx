import Link from 'next/link';
import { Zap } from 'lucide-react';
import { appOptions } from '@/config/app-options';

export const Header = () => {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center justify-between'>
      <Link
        className='flex items-center justify-center'
        href='/'
      >
        <Zap className='h-6 w-6' />
        <span className='ml-2 font-bold'>{appOptions.appName}</span>
      </Link>
      <nav className='flex gap-4 sm:gap-6'>
        {appOptions.navLinks.map((link, idx) => (
          <Link
            key={idx}
            className='text-sm font-medium hover:underline underline-offset-4'
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
