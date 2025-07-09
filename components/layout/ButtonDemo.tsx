import * as Button from '@/components/ui/button';
type Props = {
  text: string,
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export function ButtonDemo({ text, type = 'button' }: Props) {
  return <Button.Root type={type}>{text}</Button.Root>;
}
