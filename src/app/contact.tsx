import { Nav } from '../lib/nav';
import { Social } from '../lib/social';
export function Contact() {
    return (
        <div className="my-10 mx-2">
            <div className="">
                <p className="text-4xl">G Venkata Sandeep Reddy</p>
                <p className="text-2xl">Cloud Engineer</p>
            </div>
            <div className="my-10 mx-12">
                <ul className="mt-16 w-max">
                    {Nav.map((nav) => (
                        <li key={nav.title} className="animate-fade-in slide-in-from-right slide-in-from-bottom duration-200 ease-out">
                            <a href={nav.link} className="group flex items-center py-3">
                                <span className="nav-indicator mr-4 h-px w-8 bg-secondary dark:group-hover:bg-slate-200 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:group-hover:text-slate-200 group-hover:text-secondary group-focus-visible:text-slate-200">{nav.title}</span></a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className='flex ml-12'>
                    {Social.map((social) => (
                        <li key={social.title} className="mx-4">
                            <a href={social.link} className="group flex items-center py-3">
                                <social.icon />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}