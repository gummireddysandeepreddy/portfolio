import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax';
import { Skills as s } from '@/lib/skills';
export default function Skills() {
    let a : [number, number] = [-10,10];
    const toggleA = (): [number, number] => {
        a = [-a[0], -a[1]];
        return a;
    }
    return (
        <div className='h-auto w-full overflow-hidden' id='skills'>
                <div className='font-bold text-2xl'>Skills</div>
                {s.map((skill) => (
                    <div key={skill.name} className='overflow-hidden my-5'>
                        {/* <div className='font-bold text-xl'>{skill.name}</div> */}
                        <Parallax speed={-1} translateX={toggleA()} className='overflow-hidden'>
                            <p className='text-2xl font-mono overflow-hidden'>
                            {skill.list.map((s) => (
                                <span key={s}>{s}/</span>
                            ))}
                            </p>
                        </Parallax>
                    </div>
                ))}
        </div>
    );
}

