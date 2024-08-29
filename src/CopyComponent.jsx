import { Copy, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import { copyToClipboard } from '~/Copy';

export const CopyComponent = ({blurred}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    copyToClipboard('cargo install rubit-cli');
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000); 
  };

  return (
    <pre className={` font-medium ${blurred ? 'bg-gradient-to-r from-white/15 to-white/20':'backdrop-blur-xl bg-white/10'}  px-4 py-2 rounded-xl flex flex-row items-center gap-2 cursor-pointer`} onClick={handleClick}>
      <div data-version="v1">
        <span aria-hidden="true" className="px-2">~</span>cargo install rubit-cli
      </div>
      {isCopied ? (
        <CheckCircle size='16' />
      ) : (
        <Copy size='16'  />
      )}
    </pre>
  );
};