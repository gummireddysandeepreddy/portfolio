import { Skills as s } from '@/lib/skills';
export default function Skills() {
    let a : [number, number] = [-10,10];
    const toggleA = (): [number, number] => {
        a = [-a[0], -a[1]];
        return a;
    }
    return (
        <div className='h-auto w-full overflow-hidden' id='skills'>
            <div className="my-16 gs-keyword-scroll-list overflow-hidden w-full">
      <div className="gs-keyword-scroll-list text-2xl" aria-hidden="true">
        {s.map((row, i) => (
          <p key={i} className="gs-keyword-scroll-list__row tracking-[-0.03em] translate-x-[-0.06em] whitespace-nowrap py-3 inline-block transition text-3xl">
            {row.map((keyword, j) => (
              <span key={j} className="gs-keyword-scroll-list__keyword text-muted-foreground  before:pr-3 after:px-2 after:h-[0.95em] after:border-r after:text-emerald-500/40 after:border-primary after:inline-block after:rotate-[15deg] after:no-underline">{keyword}</span>
            ))}
          </p>
        ))}
      </div>
      <span className="sr-only">
        On scroll animation of three rows of Skills and Areas of Expertise.
      </span>
    </div>
        </div>
    );
}

