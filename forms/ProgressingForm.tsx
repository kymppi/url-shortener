import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface ProgressingFormProps {}

const ProgressingForm: FC<ProgressingFormProps> = ({ children }) => {
  return (
    <motion.div
      className="w-full mx-auto flex items-center justify-center"
      whileHover={{}}
    >
      {children}
    </motion.div>
  );
};

export default ProgressingForm;
