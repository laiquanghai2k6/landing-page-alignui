import * as React from 'react';
import * as Avatar from '@/components/ui/avatar';
import { cn } from '@/utils/cn';

type Props = {
  url: string;
  size?: number;
};

export const AvatarDemo = React.forwardRef<HTMLDivElement, Props>(
  ({ url, size = 48 }, ref) => {
    return (
      <div ref={ref} className="h-full">
        <Avatar.Root
          className="rounded-full overflow-hidden cursor-pointer"
          style={{ width: size, height: size }}
        >
          <Avatar.Image
            src={url}
            className="w-full h-full object-cover"
          />
        </Avatar.Root>
      </div>
    );
  }
);

AvatarDemo.displayName = 'AvatarDemo';
