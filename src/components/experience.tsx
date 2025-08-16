import { Section } from '@/components/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem as AccordionItemBase,
  AccordionTrigger
} from '@/components/ui/accordion';

const EXPERIENCE_ITEMS = [
  {
    value: 'stone',
    company: 'Stone',
    role: 'Software Engineer III',
    description:
      'Driving innovation for businesses by developing solutions to streamline the payments market.',
    time: 'Now'
  },
  {
    value: 'neomind',
    company: 'Neomind',
    role: 'Software Engineer',
    description:
      'Led the architecture and development of a drag-and-drop form builder for customizing BPM processes.',
    time: '2022 - 2025'
  }
];

function AccordionItem({
  value,
  company,
  role,
  description,
  time
}: (typeof EXPERIENCE_ITEMS)[number]) {
  return (
    <AccordionItemBase value={value}>
      <AccordionTrigger className="hover:bg-brand hover:text-background data-[state=open]:bg-brand flex text-sm data-[state=open]:text-white">
        <p>
          <span className="font-semibold">{company}</span> {role}
        </p>
        <p className="ml-auto hidden sm:block">{time}</p>
      </AccordionTrigger>
      <AccordionContent className="group-data-[state=open]/content:bg-brand p-4 pt-0 group-data-[state=open]/content:text-white">
        {description}
      </AccordionContent>
    </AccordionItemBase>
  );
}

export function Experience() {
  return (
    <Section
      title="Experience"
      content={
        <div className="bg-background">
          <Accordion type="single" collapsible>
            {EXPERIENCE_ITEMS.map((item) => (
              <AccordionItem key={item.value} {...item} />
            ))}
          </Accordion>
        </div>
      }
    />
  );
}
