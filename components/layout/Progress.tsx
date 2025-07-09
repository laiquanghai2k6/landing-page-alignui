import * as ProgressBar from '@/components/ui/progress-bar';

export function ProgressBarDemo() {
  return (
    <div className='w-full max-w-96'>
      <ProgressBar.Root value={90} max={100} />
    </div>
  );
}
