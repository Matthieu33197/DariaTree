import React from 'react';
import Link from 'next/link';

interface TreeLinkProps {
  href: string;
  title: string;
  description?: string;
}

const TreeLink: React.FC<TreeLinkProps> = ({ href, title, description }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full max-w-md rounded-lg border border-gray-300 bg-white px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
    >
      <h2 className="mb-2 text-xl font-semibold">
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      {description && <p className="m-0 text-sm opacity-75">{description}</p>}
    </a>
  );
};

export default TreeLink;
