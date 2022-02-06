import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

interface AddNewLinkProps {
  onSubmit: (data: any) => void;
}

const AddNewLink: FC<AddNewLinkProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput label="Link" id="link" register={register} />
      <FormInput label="Slug" id="slug" register={register} />
      <FormSelect
        label="Domain"
        id="domain"
        options={['url.midka.dev', 'sussy.link']}
        register={register}
      />
      <FormInput type="submit" />
    </Form>
  );
};

export default AddNewLink;
