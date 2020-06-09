import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import { OpenInNew } from 'ui/Icon';

import './Markdown.scss';

function AddLinkProps({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <OpenInNew auto className="inline-block ml-1 w-3 h-3" />
    </a>
  );
}

export default function Markdown({ src }) {
  return (
    <ReactMarkdown
      source={src}
      className="Markdown"
      escapeHtml
      disallowedTypes={['image', 'table', 'html', 'virtualHtml']}
      renderers={{ link: AddLinkProps }}
    />
  );
}
