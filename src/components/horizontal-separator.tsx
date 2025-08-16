import { cn } from '@/lib/utils';

const CLASSES_MAP = {
  top: 'flex gap-y-0.5 mt-0.5 flex-col',
  bottom: 'flex gap-y-0.5 mb-0.5 flex-col',
  both: 'flex gap-y-0.5 my-0.5 flex-col'
};

interface HorizontalSeparatorProps extends React.ComponentProps<'div'> {
  side?: keyof typeof CLASSES_MAP;
}

export function HorizontalSeparator({
  className,
  side = 'top',
  ...props
}: HorizontalSeparatorProps) {
  const classes = cn(CLASSES_MAP[side], className);

  return (
    <div className={classes} {...props}>
      <div className="border-foreground h-px border-b border-dotted" />
      <div className="border-foreground h-px border-b border-dotted" />
      <div className="border-foreground h-px border-b border-dotted" />
    </div>
  );
}
