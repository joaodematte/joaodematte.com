import { HorizontalSeparator } from '@/components/horizontal-separator';
import { Section } from '@/components/section';
import { cn } from '@/lib/utils';

const CRAFT_ITEMS = [
  {
    title: 'memo.directory',
    description:
      'Your personal vault for valuable hyperlinks. A simple, no-frills approach to saving and accessing the content that matters most to you.',
    links: [
      {
        label: 'Website',
        href: 'https://www.memo.directory/'
      },
      {
        label: 'Repository',
        href: 'https://github.com/joaodematte/memo-directory'
      }
    ]
  },
  {
    title: 'mocks',
    description:
      'Generate mock APIs from TypeScript interfaces to unblock your frontend development.',
    links: [
      {
        label: 'Website',
        href: 'https://mocksdev.vercel.app/'
      },
      {
        label: 'Repository',
        href: 'https://github.com/joaodematte/mocks'
      }
    ]
  }
];

type CraftItem = (typeof CRAFT_ITEMS)[number];
interface CraftItemProps extends CraftItem {
  index: number;
}

function CraftItem({ index, title, description, links }: CraftItemProps) {
  const isLast = index === CRAFT_ITEMS.length - 1;
  const isFirst = index === 0;

  return (
    <>
      <li className={cn('space-y-2 p-4 text-sm', isFirst && 'pt-0 md:pt-4')}>
        <p className="font-semibold">{title}</p>
        <p>{description}</p>
        <div className="flex gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              className="hover:bg-brand hover:text-background hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </li>
      {!isLast && <HorizontalSeparator />}
    </>
  );
}

export function Craft() {
  return (
    <Section
      title="Craft"
      content={
        <div className="bg-background">
          <ul className="grid grid-cols-1">
            {CRAFT_ITEMS.map((item, i) => (
              <CraftItem key={item.title} index={i} {...item} />
            ))}
          </ul>
        </div>
      }
    />
  );
}
