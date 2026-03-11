'use client';

import Image from 'next/image';

// Email is rendered as a PNG — no text in DOM or source for bots to scrape.
// The mailto: is assembled at click time so it never appears as a plain string.
const parts = ['info', 'gevs.dev'];

interface Props {
  variant?: 'dark' | 'light';
}

export default function EmailLink({ variant = 'light' }: Props) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    window.location.href = `mailto:${parts[0]}@${parts[1]}`;
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      className="no-underline hover:opacity-75 transition-opacity inline-block"
      aria-label="Send us an email"
    >
      <Image
        src={variant === 'dark' ? '/email-dark.png' : '/email-light.png'}
        alt=""
        width={94}
        height={13}
        unoptimized
      />
    </a>
  );
}
