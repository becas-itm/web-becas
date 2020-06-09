import React from 'react';
import Markdown from 'ui/Markdown';

export function StepsPreview({ src }) {
  return (
    <div className="rounded-sm border bg-white" data-testid="StepsPreview">
      <div className="text-sm text-medium italic px-3 py-2 select-none">
        Vista previa
      </div>
      <div className="w-full px-3 pb-2">
        <Markdown src={src} />
      </div>
    </div>
  );
}
