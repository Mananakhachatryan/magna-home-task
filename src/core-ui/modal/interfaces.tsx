export type ModalProps = {
  isModalOpen: boolean;
  onSubmit: (data: DataSourceType) => Promise<void>;
  handleClose: () => void;
};

export type DataSourceType = {
  address: string;
  amount: string;
};
