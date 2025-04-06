'use client';

const xKeyframes = ['0%', '-5%', '-15%', '7%', '-5%', '-15%', '15%', '0%', '3%', '-10%'];

const yKeyframes = ['0%', '-10%', '5%', '-25%', '25%', '10%', '0%', '15%', '35%', '10%'];

export function Grain({ className, ...props }: React.ComponentProps<'div'>) {
  const setGrainRef = (element: HTMLDivElement) => {
    if (!element) return;

    let i = 0;

    const interval = setInterval(() => {
      element.style.transform = `translateX(${
        xKeyframes[i % xKeyframes.length]
      }) translateY(${yKeyframes[i % yKeyframes.length]})`;

      i++;
    }, 50);

    return () => clearInterval(interval);
  };

  return (
    <div className={`pointer-events-none fixed inset-0 z-40 h-full w-full overflow-hidden ${className}`} {...props}>
      <div
        ref={setGrainRef}
        className="absolute inset-[-200%] h-[400%] w-[400%] bg-[url('/noise.png')] bg-[length:256px] bg-left-top opacity-[4%]"
      />
    </div>
  );
}
