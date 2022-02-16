import { GetServerSideProps } from 'next';
import React from 'react';

const Url = () => {
  return <div>Url</div>;
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { url }: { url: string } = context.params;

  const destination = 'https://devapp.midka.dev';

  // Allow for checking if redirecting to rick roll or some other meme
  if (url.endsWith('+')) {
    return {
      props: {
        destination,
      },
    };
  }

  //TODO: get url from database

  return {
    redirect: {
      destination,
      permanent: true,
    },
  };
};

export default Url;
