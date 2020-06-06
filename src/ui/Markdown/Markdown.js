import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import './Markdown.scss';

export default function Markdown({ src }) {
  return <ReactMarkdown source={src} escapeHtml className="Markdown" />;
}
