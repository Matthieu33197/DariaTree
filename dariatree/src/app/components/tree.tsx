import React from 'react';

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
      className="group w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors hover:border-gray-400 hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
    >
      <h2 className="mb-1 text-lg md:text-xl lg:text-2xl font-semibold">
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      {description && <p className="m-0 text-xs md:text-sm lg:text-base opacity-75">{description}</p>}
    </a>
  );
};

export default TreeLink;
