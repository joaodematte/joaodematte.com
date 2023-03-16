import Link from 'next/link';
import NeomindSVG from '@/components/icons/NeomindSVG';
import RapidsoftSVG from '@/components/icons/RapidsoftSVG';
import UdescSVG from '@/components/icons/UdescSVG';
import clsx from 'clsx';
import { useI18n } from '@/context/i18n';

const getResumeData = (locale: string) => [
  {
    id: 0,
    title: 'Neomind',
    description: locale === 'en_US' ? 'Software Engineer' : 'Engenheiro de Software',
    time: `2022 - ${locale === 'en_US' ? 'Current' : 'Atualmente'}`,
    icon: <NeomindSVG />,
    href: 'https://www.neomind.com.br',
    className: 'bg-rose-400/20 text-rose-400 hover:bg-rose-400/30 focus:ring-rose-400/40'
  },
  {
    id: 1,
    title: 'Rapidsoft',
    description: locale === 'en_US' ? 'Software Engineer' : 'Engenheiro de Software',
    time: '2022 - 2022',
    icon: <RapidsoftSVG />,
    href: 'https://www.rapidsoft.com.br',
    className: 'bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 focus:ring-blue-400/40'
  },
  {
    id: 2,
    title: 'UDESC',
    description: locale === 'en_US' ? 'Bachelor of Computer Science' : 'Bacharelado em Ciência da Computação',
    time: `2020 - ${locale === 'en_US' ? 'Current' : 'Atualmente'}`,
    icon: <UdescSVG />,
    href: 'https://www.udesc.br/cct',
    className: 'bg-green-400/20 text-green-400 hover:bg-green-400/30 focus:ring-green-400/40'
  }
];

function Item({
  title,
  description,
  time,
  icon,
  href,
  className
}: Omit<ReturnType<typeof getResumeData>[number], 'id'>) {
  const { locale } = useI18n();

  return (
    <li className="flex items-center gap-4">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className={clsx(
          'focusable aspect-square w-12 flex justify-center items-center rounded-md transition',
          className
        )}
      >
        {icon}
      </Link>

      <div className="flex min-w-0 flex-col justify-center">
        <p className="mb-1 flex items-center">
          <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">{title}</span>
          <time className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            {time}
          </time>
        </p>
        <p className="mb-1 flex items-center text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
    </li>
  );
}

export default function Resume() {
  const {
    locale,
    translations: { resume, resume_description: resumeDescription }
  } = useI18n();

  const RESUME_DATA = getResumeData(locale);

  return (
    <section id="resume">
      <h2 className="text-2xl text-zinc-800 dark:text-white font-bold">{resume}</h2>
      <p className="mt-1">{resumeDescription}</p>
      <ul className="mt-8 list-none space-y-5">
        {RESUME_DATA.map(({ id, ...item }) => (
          <Item key={id} {...item} />
        ))}
      </ul>
    </section>
  );
}
