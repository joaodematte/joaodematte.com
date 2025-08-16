import { Section } from '@/components/section';

export function Whoami() {
  return (
    <Section
      content={
        <div className="bg-background p-4 pt-12">
          <h1 className="text-xl font-bold">João Dematte</h1>
          <p className="text-sm">
            Self-taught interaction engineer obsessed with details and
            interfaces.
          </p>
          <p className="mt-4 text-sm">
            I have a strong passion for building web applications that are both
            functional and aesthetically pleasing.
          </p>

          {/* <div className="mt-4">
            <span className="text-xs font-semibold">
              Currently listening to
            </span>
            <div className="mt-2 flex items-end gap-2">
              <div className="size-16 bg-neutral-300" />
              <div className="text-sm">
                <p className="font-semibold">DIE TRYING</p>
                <p className="">PARTYNEXTDOOR</p>
              </div>
            </div>
          </div> */}
        </div>
      }
    />
  );
}
