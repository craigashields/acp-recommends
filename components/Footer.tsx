
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
    return (
      <footer>
        <div className="mt-16 grid grid-rows-auto gap-1 justify-items-center">
          <div className="mb-3 grid grid-cols-4 content-center justify-items-center gap-5">
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={8}/>
            <SocialIcon kind="spotify" href={siteMetadata.spotify} size={8} />
            <SocialIcon kind="applepodcast" href={siteMetadata.applepodcast} size={8} />
            <SocialIcon kind="podbean" href={siteMetadata.podbean} size={8} />
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-primary-700">
            <div>{siteMetadata.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-primary-700 text-center" >
            <Link href="/">{siteMetadata.title}</Link>
          </div>
          <div className="mb-8 text-sm text-primary-500">
          </div>
        </div>
      </footer>
  );
  }
