
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
    return (
      <footer>
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-3 flex space-x-4">
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6}/>
          <SocialIcon kind="spotify" href={siteMetadata.spotify} size={6} />
          <SocialIcon kind="applepodcast" href={siteMetadata.applepodcast} size={6} />
          <SocialIcon kind="podbean" href={siteMetadata.podbean} size={6} />
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-gray-500">
            <div>{siteMetadata.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 text-center" >
            <Link href="/">{siteMetadata.title}</Link>
          </div>
          <div className="mb-8 text-sm text-gray-500">
          </div>
        </div>
      </footer>
  );
  }
