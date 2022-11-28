import React, { FC, useState } from "react";
import { signOut } from "next-auth/react";
import { useAccount } from "wagmi";

import Modal from "../../core-ui/modal";
import { DataSourceType } from "../../core-ui/modal/interfaces";
import { magnaLogo } from "./logo";
import {
  Header,
  Button,
  Content,
  AddButton,
  LayoutContent,
  TableContent,
} from "./styles.user-content";
import { ColumnsType } from "antd/lib/table/Table";
import { airdropContract, tokenContract } from "../../libs/web3/web3Lib";

type UserProps = {};

const User: FC<UserProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const { address: ownerAddress } = useAccount();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data: DataSourceType) => {
    setIsModalOpen(false);
    setDataSource((val) => [
      ...val,
      { address: data.address, amount: data.amount },
    ]);
    const tokenBalance = await tokenContract.methods
      .balanceOf(data.address)
      .call({ from: ownerAddress });

    await airdropContract.methods
      .airdropTokens([data.address], [data.amount])
      .send({ from: ownerAddress });
  };

  const column = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (e: DataSourceType["amount"]) => (
        <p>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "ETH",
          }).format(e)}
        </p>
      ),
    },
  ];

  return (
    <LayoutContent>
      <Header>
        <a href="#">{magnaLogo}</a>
        <Button
          onClick={() => signOut({ callbackUrl: "/signin", redirect: true })}
        >
          Sign Out
        </Button>
      </Header>
      <Content>
        <AddButton onClick={showModal}>Add</AddButton>
        <TableContent dataSource={dataSource} columns={column} />
      </Content>
      <Modal
        isModalOpen={isModalOpen}
        onSubmit={onSubmit}
        handleClose={handleClose}
      />
    </LayoutContent>
  );
};

export default User;
