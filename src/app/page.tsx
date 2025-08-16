import { Contact } from '@/components/contact';
import { Craft } from '@/components/craft';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Whoami } from '@/components/whoami';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Whoami />
      <Experience />
      <Craft />
      <Contact />
      <Footer />
    </div>
  );
}
