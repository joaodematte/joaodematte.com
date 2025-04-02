export function Overlay() {
  return (
    <>
      <div className="from-background pointer-events-none fixed top-0 left-0 z-10 h-24 w-full bg-linear-to-b to-transparent" />
      <div className="from-background pointer-events-none fixed bottom-0 left-0 z-10 h-24 w-full bg-linear-to-t to-transparent" />
    </>
  );
}
