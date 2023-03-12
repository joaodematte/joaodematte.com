import Link from 'next/link';
import NeomindSVG from '@/components/icons/NeomindSVG';
import RapidsoftSVG from '@/components/icons/RapidsoftSVG';
import UdescSVG from '@/components/icons/UdescSVG';

export default function Resume() {
  return (
    <section id="resume">
      <h2 className="text-2xl text-white font-bold">Résumé</h2>
      <p className="mt-1">A history of places I’ve worked and studied at.</p>
      <ul className="mt-8 list-none space-y-5">
        <li className="flex items-center gap-4">
          <Link
            href="https://www.neomind.com.br"
            target="_blank"
            rel="noreferrer"
            className="focusable aspect-square w-12 flex justify-center items-center rounded-md transition bg-rose-400/20 text-rose-400 hover:bg-rose-400/30 focus:ring-rose-400/40"
          >
            <NeomindSVG />
          </Link>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">Neomind</span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                2022 - Current
              </span>
            </p>
            <p className="mb-1 flex items-center text-zinc-400">Software Engineer</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <Link
            href="https://www.rapidsoft.com.br"
            target="_blank"
            rel="noreferrer"
            className="focusable aspect-square w-12 flex justify-center items-center rounded-md transition bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 focus:ring-blue-400/40"
          >
            <RapidsoftSVG />
          </Link>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">Rapidsoft</span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                2022 - 2022
              </span>
            </p>
            <p className="mb-1 flex items-center text-zinc-400">Software Engineer</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <Link
            href="https://www.neomind.com.br"
            target="_blank"
            rel="noreferrer"
            className="focusable aspect-square w-12 flex items-center justify-center rounded-md transition bg-lime-400/20 text-lime-400 hover:bg-lime-400/30 focus:ring-lime-400/40"
          >
            <UdescSVG />
          </Link>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-1 flex items-center">
              <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">UDESC</span>
              <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                2020 - Current
              </span>
            </p>
            <p className="mb-1 flex items-center text-zinc-400">Bachelor of Computer Science</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
