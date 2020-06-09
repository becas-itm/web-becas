import React from 'react';

function MarkdownEditor({ value, onChange, ...restProps }) {
  const [text, setText] = React.useState(value);

  const handleChange = event => {
    setText(event.target.value);
    onChange && onChange(event);
  };

  React.useEffect(() => void setText(value), [value]);

  return (
    <div className="rounded-sm border bg-white" data-testid="MarkdownEditor">
      <div className="text-sm text-medium italic px-3 py-2 select-none">
        Editando
      </div>
      <textarea
        value={text}
        onChange={handleChange}
        {...restProps}
        className="block w-full px-3 pb-2 focus:outline-none bg-transparent"
      />
    </div>
  );
}

export default MarkdownEditor;
