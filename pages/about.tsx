import AuthorLayout from '../layouts/AuthorLayout';
import React from 'react';
import { GetStaticProps, GetStaticPropsContext } from "next";
import { getPostData } from "@/lib/post-utils";
import { PostType } from "@/interfaces/index";

interface Props {
  post: PostType;
}

const About: React.FC<Props> = ({ post }: Props) => {
  return (
    <>
      <AuthorLayout post={post} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // @ts-ignore
  const slug = 'about'//context.params;
  const postData = getPostData(slug);
  return {
      props: {
          post: postData,
      },
      // regenerate after every 600s(10mins)
      revalidate: 600,
  };
};

export default About;