import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getImageSize } from 'next/dist/server/image-optimizer'


export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const { data } = await supabaseAdmin.from('acp_recommends').select('*').order('episode',{ ascending: false }).order('id',{ascending: true})
  return {
    props: {
      images: data,
    },
  }
}


function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  created_at: string
  href: string
  imageSrc: string
  comic: string
  recommendBy: string
  episode: number
}

export default function Gallery({ images }: { images: Image[] }) {

  // const [query, setQuery] = useState<string[]>([]);
  // const excludedKeys: (keyof Image)[] = ['imageSrc', 'href','created_at']; // Specify the keys to exclude

  // //Handling the input on our search bar
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  //   const searchTerms = e.target.value;
  //   const resultArray = searchTerms.split(',').map((item) => item.trim());
  //   const filteredArray = resultArray.filter((item) => item !== '');

  //   setQuery(filteredArray);
  // };

  // function filterMainArray(
  //   array: Image[],
  //   terms: string[],
  //   excludedKeys: (keyof Image)[] 
  // ): Image[] {
  //   if (terms.length === 0) {
  //     // If the terms array is empty, return all results without filtering
  //     return array;
  //   }
  //   return array.filter(item => {
  //     // Check if all search terms exist in the item
  //     return terms.some(term => {
  //       // Check if the item's properties (excluding excluded keys) contain the search term
  //       return Object.keys(item).filter(key => !excludedKeys.includes(key as keyof Image)).some(key => {
  //         const value = item[key as keyof Image] as string;
  //         // Convert the value to a string for case-insensitive comparison
  //         return String(value).toLowerCase().includes(term.toLowerCase());
  //       });
  //     });
  //   });
  // }

  // const filteredImages: Image[] = filterMainArray(images, query, excludedKeys);

  return (
    <>
    <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
    {/* <div className="mx-auto max-w-2xl px-6 sm:px-6 py-3 sm:py-3 lg:max-w-7xl lg:px-8">
      <input 
        onChange={handleChange}
        className="flex w-2/3 max-w-2xl lg:max-w-7xl px-5 py-3 sm:px-5 sm:py-3  text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
        placeholder="What awesomeness are you looking for?"
      />
    </div> */}
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    {images && images.length > 0 ? (
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
      ) : (
        <p>Sorry no awesomeness found.</p>
      )}
    </div>
    </>
  )
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true)
  return (
    <a href={image.href} className="group" target="_blank">
      <div className="aspect-w-2 aspect-h-3 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-2 xl:aspect-h-3">
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{image.comic}</h3>
      <p className="mt-1 text-sm text-gray-900">Episode <span className="font-medium">{image.episode}</span></p>
      <p className="mt-1 text-sm text-gray-900">Recommended By <span className="font-medium">{image.recommendBy}</span></p>
    </a>
  )
}
