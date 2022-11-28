import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import User from "../src/components/user";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
};

export default User;
