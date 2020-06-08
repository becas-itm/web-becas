import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import './Markdown.scss';

function addLinkProps(props) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
}

export default function Markdown({ src }) {
  return (
    <ReactMarkdown
      source={src}
      className="Markdown"
      escapeHtml
      renderers={{
        link: addLinkProps,
      }}
    />
  );
}
