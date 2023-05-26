import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

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
  href: string
  imageSrc: string
  comic: string
  recommendBy: string
  episode: number
}

export default function Gallery({ images }: { images: Image[] }) {
  return (
    <>
    <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
    </>
  )
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true)
  return (
    <a href={image.href} className="group" target="_blank">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
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
