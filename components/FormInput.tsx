import React, { FC, HTMLProps, InputHTMLAttributes } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  label?: string;
  id?: string;
  inputProps?: HTMLProps<HTMLInputElement>;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
}

const FormInput: FC<FormInputProps> = ({
  label,
  id,
  inputProps,
  type = 'text',
}) => {
  const { register } = useForm();

  return (
    <div className="flex flex-col justify-center my-4 w-full max-w-xs">
      {label && (
        <label className="text-lg text-center text-black font-semibold">
          {label}
        </label>
      )}
      {id && (
        <input
          className="shadow-md bg-gray-300 rounded-2xl w-full py-3 px-8 my-2 text-center text-white border-none focus:border-blue-400"
          type={type}
          {...register(id)}
          {...inputProps}
        />
      )}
      {type === 'submit' && (
        <input
          type={type}
          className="shadow-md bg-blue-400 rounded-2xl py-3 px-8 my-2 w-full text-center text-white"
        />
      )}
    </div>
  );
};

export default FormInput;
