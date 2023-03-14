'use client';

import { useI18n } from '@/context/i18n';
import Image from 'next/image';
import Link from 'next/link';
import reactStringReplace from 'react-string-replace';

export default function Whoami() {
  const {
    translations: { name, description, heading1, heading2 }
  } = useI18n();

  let replacedHeading1 = reactStringReplace(heading1, '{company}', (match, i) => (
    <Link
      key="neomind-link"
      href="https://www.neomind.com.br"
      target="_blank"
      rel="noreferrer"
      className="focusable rounded-sm font-medium text-zinc-800 underline decoration-rose-500 decoration-2 underline-offset-2 transition duration-100 hover:text-rose-500 hover:decoration-rose-500/30 focus:text-rose-500 focus:ring-rose-500/40 dark:text-white dark:decoration-rose-400 dark:hover:text-rose-400 dark:hover:decoration-rose-400/30 dark:focus:text-rose-400 dark:focus:ring-rose-400/40"
    >
      Neomind
    </Link>
  ));

  replacedHeading1 = reactStringReplace(replacedHeading1, '{university}', (match, i) => (
    <Link
      key="udesc-link"
      href="https://www.udesc.br/cct"
      target="_blank"
      rel="noreferrer"
      className="focusable rounded-sm font-medium text-zinc-800 underline decoration-lime-500 decoration-2 underline-offset-2 transition duration-100 hover:text-lime-500 hover:decoration-lime-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white dark:decoration-lime-400 dark:hover:text-lime-400 dark:hover:decoration-lime-400/30 dark:focus:text-lime-400 dark:focus:ring-lime-400/40"
    >
      UDESC
    </Link>
  ));

  let replacedHeading2 = reactStringReplace(heading2, '{github}', (match, i) => (
    <Link
      key="github-link"
      href="https://www.github.com/joaodematte"
      target="_blank"
      rel="noreferrer"
      className="focusable rounded-sm font-medium text-zinc-800 underline decoration-stone-500 decoration-2 underline-offset-2 transition duration-100 hover:text-stone-500 hover:decoration-stone-500/30 focus:text-stone-500 focus:ring-stone-500/40 dark:text-white dark:decoration-stone-400 dark:hover:text-stone-400 dark:hover:decoration-stone-400/30 dark:focus:text-stone-400 dark:focus:ring-stone-400/40"
    >
      GitHub
    </Link>
  ));

  return (
    <section id="whoami">
      <Image
        src="https://github.com/joaodematte.png"
        alt="A portrait of João Dematte"
        width={80}
        height={80}
        className="rounded-full"
      />
      <h1 className="mt-5 text-2xl font-bold text-white">{name}</h1>
      <p className="text-lg text-zinc-400 mt-1">{description}</p>
      <div className="mt-8 space-y-4 leading-loose">
        <p>{replacedHeading1}</p>
        <p>{replacedHeading2}</p>
      </div>
    </section>
  );
}
