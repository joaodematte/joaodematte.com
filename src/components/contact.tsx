import { HorizontalSeparator } from '@/components/horizontal-separator';
import { Section } from '@/components/section';

const CONTACT_ITEMS = [
  {
    label: 'Mail',
    value: 'jgdematte@gmail.com',
    href: 'mailto:jgdematte@gmail.com'
  },
  {
    label: 'LinkedIn',
    value: 'dematte',
    href: 'https://www.linkedin.com/in/dematte/'
  },
  {
    label: 'Instagram',
    value: 'joaodematte',
    href: 'https://www.instagram.com/joaodematte/'
  },
  {
    label: 'X',
    value: 'joaodematte',
    href: 'https://x.com/joaodematte'
  },
  {
    label: 'GitHub',
    value: 'joaodematte',
    href: 'https://github.com/joaodematte'
  }
];

type ContactItem = (typeof CONTACT_ITEMS)[number];

function ContactItem({ label, value, href }: ContactItem) {
  return (
    <div className="border-foreground grid grid-cols-[100px_auto] border-b border-dotted px-4 py-2 last:border-b-0">
      <span className="font-semibold">{label}</span>
      <a
        href={href}
        target="_blank"
        className="hover:text-background hover:bg-brand w-fit hover:underline"
      >
        {value}
      </a>
    </div>
  );
}
export function Contact() {
  return (
    <Section
      title="Contact"
      content={
        <div className="bg-background text-sm">
          <p className="p-4 pt-0 md:pt-4">
            I&apos;m always looking for new opportunities and challenges. If you
            have any questions or want to work together, feel free to contact
            me.
          </p>

          <HorizontalSeparator side="both" />

          <div className="grid grid-cols-1">
            {CONTACT_ITEMS.map((item) => (
              <ContactItem key={item.label} {...item} />
            ))}
          </div>
        </div>
      }
    />
  );
}
