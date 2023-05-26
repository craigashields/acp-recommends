import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'


export default function FourZeroFour(): ReactElement {
  return (
    <>
     <PageSEO title={`Page Not Found - ${siteMetadata.title}`} description={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
            <Image
            alt="404"
            src="/static/images/acp-404.png"
            width={125}
            height={75}
          objectFit="cover"
            />
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Sorry I have no idea what that is.
          </p>
          <p className="mb-8">
            Why not go back to our homepage for awesome comic recommends.
          </p>
          <Link href="/">
            <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-black px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-red-700 focus:outline-none">
              Back to Awesomeness
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}