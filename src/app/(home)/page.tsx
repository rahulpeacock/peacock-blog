import { AllBlogs } from './_components/all-blogs';
import { Footer } from './_components/footer';

export default function Page() {
  return (
    <main>
      <section className='min-h-screen flex items-start justify-center pt-32 pb-16'>
        <div>
          <div className='text-center pt-8 px-4'>
            <h2 className='uppercase font-bold'>Rahul Palamarthi v25.01</h2>
            <p className='leading-none'>&nbsp;</p>
            <p>software developer. open source contributor.</p>
            <p className='leading-none'>&nbsp;</p>
            <p className='leading-none'>&nbsp;</p>
          </div>
          <AllBlogs />
        </div>
      </section>
      <Footer />
    </main>
  );
}
