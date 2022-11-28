import React, { FC } from "react";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import axios from "axios";

import bannerBg from "../../../public/img/banner-bg.png";
import {
  SignInContainer,
  ImageBg,
  Button,
  Content,
} from "./styles.signIn-content";

const SignIn: FC = () => {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();
  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const userData = { address: account, chain: chain.id, network: "evm" };

    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const message = data.message;

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const response = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/user",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */

    push(response?.url || "");
  };

  return (
    <SignInContainer>
      <ImageBg src={bannerBg} alt="bg" />
      <Content>
        <h3>Web3 Authentication</h3>
        <Button onClick={() => handleAuth()}>Authenticate via Metamask</Button>
      </Content>
    </SignInContainer>
  );
};

export default SignIn;
