import * as Input from '@/components/ui/input';
import { cn } from '@/utils/cn';

type Props = {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  className: string
};

export function InputDemo({ placeholder, type = 'text', className = '' }: Props) {
  return (
    <div className={cn(className)}>
      <Input.Root>
        <Input.Wrapper>
          <Input.Input type={type} placeholder={placeholder} />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}