import { AllBlogs } from './_components';

export default function Page() {
  return (
    <main>
      <section className='min-h-screen flex items-start justify-center pt-32 pb-16'>
        <div className='py-8 px-4'>
          <div className='text-center'>
            <h2 className='uppercase font-bold'>Rahul Palamarthi v25.01</h2>
            <p className='leading-none'>&nbsp;</p>
            <p>software developer. open source contributor.</p>
            <p className='leading-none'>&nbsp;</p>
            <p className='leading-none'>&nbsp;</p>
          </div>
          <AllBlogs />
        </div>
      </section>
    </main>
  );
}
