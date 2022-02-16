import React, { FC, HTMLProps, InputHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  label?: string;
  id?: string;
  inputProps?: HTMLProps<HTMLInputElement>;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  register?: UseFormRegister<FieldValues>;
  canBeEmpty?: boolean;
  error?: { type: 'pattern' | 'required'; enabled: boolean };
  validationRegex?: RegExp;
  validationError?: string;
}

const FormInput: FC<FormInputProps> = ({
  label,
  id,
  inputProps,
  type = 'text',
  register,
  canBeEmpty = false,
  error,
  validationRegex,
  validationError,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col justify-center my-4 w-full max-w-xs"
    >
      {label && (
        <label className="text-lg text-center text-black font-semibold">
          {label}
        </label>
      )}
      {id && (
        <>
          {error && (
            <p className="text-red-600 text-md text-center">
              {error.type == 'pattern'
                ? validationError
                : 'Field cannot be empty'}
            </p>
          )}
          <input
            className="shadow-md bg-gray-300 rounded-2xl w-full py-3 px-8 my-2 text-center text-black border-none focus:border-blue-400"
            type={type}
            {...register(id, {
              pattern: validationRegex,
              required: !canBeEmpty,
            })}
            {...inputProps}
          />
        </>
      )}
      {type === 'submit' && (
        <input
          type={type}
          className="shadow-md bg-blue-500 rounded-2xl py-3 px-8 my-2 w-full text-center text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        />
      )}
    </motion.div>
  );
};

export default FormInput;
