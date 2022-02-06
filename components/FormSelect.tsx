import React, { FC } from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';

interface FormSelectProps {
  label?: string;
  id: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
}

const FormSelect: FC<FormSelectProps> = ({ label, options, id, register }) => {
  return (
    <div className="flex flex-col justify-center my-4 w-full max-w-xs">
      {label && (
        <label className="text-lg text-center text-black font-semibold">
          {label}
        </label>
      )}
      <select
        className="shadow-md bg-gray-300 rounded-2xl text-center p-3 my-2 w-full border-none focus:border-blue-400"
        {...register(id)}
      >
        {options.map((option) => (
          <option className="" key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
