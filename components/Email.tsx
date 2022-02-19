import Link from 'next/link';
import React from 'react';

const Email = () => {
  return (
    <section className="fixed bottom-0 right-12 hidden lg:flex flex-col items-center gap-8">
      <Link href="mailto:m.bluth@example.com">
        <a
          className="font-fira tracking-[0.1rem] text-xs text-slate hover:text-teal-300 transform hover:-translate-y-2 transition-transform duration-200"
          style={{ writingMode: 'vertical-rl' }}
        >
          sonhoang95@gmail.com
        </a>
      </Link>
      <div className="w-[1px] h-24 bg-[#8892b0]"></div>
    </section>
  );
};

export default Email;
