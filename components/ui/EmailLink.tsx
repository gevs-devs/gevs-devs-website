'use client';

import Image from 'next/image';
import { useState } from 'react';

// Email rendered as PNG — no text in DOM.
// Address is base64-encoded so it's not a plain string in the JS bundle.
const _e = 'aW5mb0BnZXZzLmRldg==';

interface Props {
  variant?: 'dark' | 'light';
}

export default function EmailLink({ variant = 'light' }: Props) {
  const [copied, setCopied] = useState(false);

  function open() {
    const email = atob(_e);

    // Try to open email client
    const a = document.createElement('a');
    a.href = `mailto:${email}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Also copy to clipboard as fallback
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={open}
        aria-label="Send us an email"
        className="hover:opacity-75 transition-opacity inline-block cursor-pointer bg-transparent border-0 p-0"
      >
        <Image
          src={variant === 'dark' ? '/email-dark.png' : '/email-light.png'}
          alt=""
          width={94}
          height={13}
          unoptimized
        />
      </button>
      {copied && (
        <span className={`text-xs font-mono ${variant === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>
          Copied!
        </span>
      )}
    </div>
  );
}
