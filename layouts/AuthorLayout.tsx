import SocialIcon from '@/components/social-icons';
import { PageSEO } from '@/components/SEO';
import Image from 'next/image';
import { PostType } from "@/interfaces/index";
import ReactMarkdown from "react-markdown";
import Breaks from 'remark-breaks';


interface Props {
  post: PostType;
}


const AuthorLayout: React.FC<Props> = ({ post }) => {
  const { name, avatar, occupation, email, github, content } = post;

  return (
    <>
    <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 font-heading">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-primary-900">{name}</h3>
            <div className="text-primary-700">{occupation}</div>
            <div className="mb-3 flex space-x-4 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={8} />
              <SocialIcon kind="github" href={github} size={8}/>
            </div>
          </div>
          <div className="xl:col-span-2">
              <article className="prose max-w-none pt-8 pb-8 text-primary-700 prose-a:text-secondary hover:prose-a:text-primary-900">
                <ReactMarkdown className="links" children={content} remarkPlugins={[Breaks]}/>       
              </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorLayout;






