import { cn } from '@/lib/utils';

interface SectionProps
  extends Omit<React.ComponentProps<'section'>, 'title' | 'content'> {
  title?: string;
  content: React.ReactNode;
}

export function Section({ className, content, title, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'border-foreground divide-foreground grid divide-x border-b first:border-t md:grid-cols-[128px_640px_1fr]',
        className
      )}
      {...props}
    >
      {title ? (
        <div className="p-4 md:justify-self-end">
          <h2 className="text-sm font-semibold">{title}</h2>
        </div>
      ) : (
        <div />
      )}
      {content}
      <div />
    </section>
  );
}
