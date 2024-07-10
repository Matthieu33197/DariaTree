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
      className="group w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg border px-4 py-3 transition-colors border-black bg-[#EFA6FB] hover:border-neutral-600 hover:bg-[#A157AD] shadow-xl drop-shadow-2xl hover:shadow-xl"
    >
      <h2 className="mb-1 text-lg md:text-xl lg:text-2xl font-semibold text-black">
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      {description && <p className="m-0 text-xs md:text-sm lg:text-base opacity-75 text-black">{description}</p>}
    </a>
  );
};

export default TreeLink;
