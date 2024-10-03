import Link from 'next/link';

const blogs = [
  {
    title: 'packaging a go cli as a nix flake',
    href: '/',
    date: 'Sep 7, 2024',
  },
  {
    title: `the art of programming and why i won't use llm`,
    href: '/',
    date: 'Sep 7, 2024',
  },
  {
    title: 'embracing impostor syndrome',
    href: '/',
    date: 'Sep 7, 2024',
  },
  {
    title: 'three types of figures you need in your life',
    href: '/',
    date: 'Sep 7, 2024',
  },
  {
    title: 'my neovim setup',
    href: '/',
    date: 'Sep 7, 2024',
  },
  {
    title: 'diving into mathjax css injection attack',
    href: '/',
    date: 'Sep 7, 2024',
  },
  {
    title: 'arithmetics with typescript types',
    href: '/',
    date: 'Sep 7, 2024',
  },
];

function getDate(date: string) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  return `${year}-${month}-${day}`;
}

export function AllBlogs() {
  return (
    <ul className='w-max mx-auto'>
      {blogs.map(({ title, href, date }) => (
        <li key={title} className='flex items-start justify-start'>
          <Link href={href} className='underline text-tokyo-blue'>
            {title}
          </Link>
          <div className='text-right flex-grow ml-8'>
            <time dateTime={date}>{date}</time>
          </div>
        </li>
      ))}
    </ul>
  );
}
