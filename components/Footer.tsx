import React from 'react';

export default function Footer() {
  return (
    <footer className="px-6 text-sm font-light text-center tracking-widest opacity-80 py-6 text-slate">
      <p>
        © 2020 - {new Date().getFullYear()} Son Nguyen. All Rights Reserved.
      </p>
    </footer>
  );
}
