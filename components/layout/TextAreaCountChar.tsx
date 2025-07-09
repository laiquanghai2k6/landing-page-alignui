'use client';

import * as React from 'react';

import * as Textarea from '@/components/ui/textarea';

export function TextareaInteractiveCounter() {
  const [value, setValue] = React.useState('');

  return (
    <div className=' w-full '>
      <Textarea.Root
        placeholder='Jot down your thoughts...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <Textarea.CharCounter current={value.length} max={200} />
      </Textarea.Root>
    </div>
  );
}
