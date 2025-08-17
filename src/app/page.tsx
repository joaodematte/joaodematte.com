import { Contact } from '@/components/contact';
import { Craft } from '@/components/craft';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Whoami } from '@/components/whoami';
import { getNowPlaying } from '@/lib/spotify';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const initialPlaying = await getNowPlaying();

  return (
    <div className="flex min-h-screen flex-col">
      <Whoami initialPlaying={initialPlaying} />
      <Experience />
      <Craft />
      <Contact />
      <Footer />
    </div>
  );
}
