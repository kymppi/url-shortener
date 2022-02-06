import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
  onSubmit: (data: any) => void;
}

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center p-6 m-6 bg-amber-400 rounded-lg w-full max-w-md shadow-lg"
    >
      {children}
    </form>
  );
};

export default Form;
