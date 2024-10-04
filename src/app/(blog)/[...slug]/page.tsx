import { source } from '@/app/source';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import {} from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);
  console.log(source.generateParams());
  if (!page) notFound();

  console.log(page);

  const MDX = page.data.body;

  return (
    <div>
      <MDX components={{ ...defaultMdxComponents }} />
    </div>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
