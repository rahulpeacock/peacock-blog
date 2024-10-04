'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const socials = [
  {
    label: 'github',
    href: 'https://github.com/rahulpeacock',
  },
  {
    label: 'x.com',
    href: 'https://x.com/rahulpeacock',
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/rahul-palamarthi',
  },
];

export function Footer() {
  const [command, setCommand] = React.useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    function handleKeyDown({ key }: KeyboardEvent) {
      if (key === 'Enter') {
        setError(true);
        return;
      }

      if (key === 'Backspace') {
        setCommand((curr) => curr.slice(0, -1));
        return;
      }

      if (key === 'Escape') {
        setCommand('');
        setError(false);
        return;
      }

      if (key === ':' && command.length === 0) {
        setCommand(':');
        return;
      }

      if (key.length === 1 && command.length !== 0) {
        setCommand((curr) => curr + key);
        return;
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [command]);

  return (
    <footer className='fixed bottom-0 inset-x-0'>
      <div className='flex items-stretch justify-between bg-[#080808] leading-5'>
        <span className={`${command.length === 0 ? 'bg-tokyo-blue' : 'bg-tokyo-magenta'} text-tokyo-bblack font-bold`}>
          &nbsp;{command.length === 0 ? 'NORMAL' : 'COMMAND'}&nbsp;
        </span>
        <ul className='bg-tokyo-bblack text-tokyo-blue underline flex items-center justify-center'>
          <li className='h-full w-[1ch]' />
          {socials.map(({ label, href }) => (
            <React.Fragment key={label}>
              <li>
                <Link href={href} className='hover:text-tokyo-green transition-colors duration-150' target='_blank' rel='noreferrer'>
                  {label}
                </Link>
              </li>
              <li className='h-full w-[1ch]' />
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className='flex items-stretch justify-start gap-px bg-tokyo-background relative'>
        <input
          style={{ width: `${command.length}ch` }}
          type='text'
          autoComplete='off'
          autoCorrect='off'
          className='focus:outline-none caret-transparent'
          value={command}
          readOnly
        />
        <span className={`bg-tokyo-foreground w-[1ch] pointer-events-none ${command.length === 0 ? 'hidden' : 'inline-block'}`} />
        <p className={`absolute w-full h-full bg-tokyo-background italic text-tokyo-red ${error ? 'block' : 'hidden'}`}>
          E492: Not an editor command: {command}
        </p>
      </div>
    </footer>
  );
}
