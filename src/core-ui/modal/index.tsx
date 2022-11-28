import React, { FC, useState } from "react";
import { Checkbox, Form, Input } from "antd";
import { Formik, Field, FormikTouched } from "formik";

import { ModalProps } from "./interfaces";
import {
  Title,
  ModalContent,
  DialogModalForm,
  DialogModalButton,
} from "./styles.modal-content";

const Modal: FC<ModalProps> = ({ isModalOpen, onSubmit, handleClose }) => {
  return (
    <ModalContent
      open={isModalOpen}
      onCancel={() => {
        handleClose();
      }}
    >
      <Title>Add Airdrop</Title>
      <Formik
        initialValues={{
          address: "",
          amount: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          resetForm();
          await onSubmit(values);
        }}
      >
        {({ values, errors }) => {
          const disabled = (values["address"] && values["amount"]) === "";

          return (
            <DialogModalForm>
              <Field
                type="text"
                name="address"
                tab="form"
                placeholder="AirDrop Address"
              />
              <Field
                type="number"
                name="amount"
                placeholder="Token Amount"
                tab="form"
              />
              <DialogModalButton type="submit" disabled={disabled}>
                OK
              </DialogModalButton>
            </DialogModalForm>
          );
        }}
      </Formik>
    </ModalContent>
  );
};

export default Modal;
