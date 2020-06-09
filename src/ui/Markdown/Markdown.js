import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import './Markdown.scss';

export default function Markdown({ src }) {
  const ref = React.useRef();

  React.useLayoutEffect(
    function externalizeLinks() {
      ref.current.querySelectorAll('a').forEach(anchor => {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noopener noreferrer');
      });
    },
    [src],
  );

  return (
    <div ref={ref} className="Markdown">
      <ReactMarkdown source={src} escapeHtml />
    </div>
  );
}
