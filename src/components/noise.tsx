import { cn } from '@/lib/utils';

export type NoiseProps = React.ComponentProps<'div'>;

export function Noise({ className, ...props }: NoiseProps) {
  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-10 bg-[url(/noise.svg)] bg-fixed opacity-40',
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}
