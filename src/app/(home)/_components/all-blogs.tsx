import { source } from '@/app/source';
import Link from 'next/link';

function getDate(date: string) {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDate();

  return `${MONTHS[month]} ${day}, ${year}`;
}

export function AllBlogs() {
  return (
    <ul className='w-max mx-auto min-w-[620px] pb-8 px-4'>
      {source.getPages().map((page) => (
        <li key={page.file.name} className='flex items-start justify-start group/li hover:bg-[#080808] px-2'>
          <Link
            href={`/${page.slugs.join('/')}`}
            className='underline lowercase text-tokyo-blue group-hover/li:text-tokyo-green visited:text-tokyo-bmagenta transition-colors duration-150 relative'
          >
            {page.data.title}
            <span className='group-hover/li:animate-hover-blink opacity-0 bg-tokyo-green inline-block absolute h-5 w-[1ch] -right-3 top-1/2 -translate-y-1/2 pointer-events-none' />
          </Link>
          <div className='text-right group-hover/li:text-tokyo-green flex-grow ml-8 transition-colors duration-150'>
            <time dateTime={page.data.date}>{getDate(page.data.date)}</time>
          </div>
        </li>
      ))}
    </ul>
  );
}
