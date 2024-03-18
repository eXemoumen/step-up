import React, { useState } from 'react';

interface ToggleProps {
  label?: string; // Optional label for the toggle
}

const Toggle: React.FC<ToggleProps> = ({ label = 'Toggle' }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => setIsChecked(!isChecked);

  return (
    <label className="flex items-center relative w-max cursor-pointer select-none">
      <span className="text-lg font-bold mr-3">{label}</span>
      <input
        type="checkbox"
        className="appearance-none transition duration-200 ease-in-out bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 hover:bg-gray-300 checked:bg-green-500"
      />
      <span className="absolute font-medium text-xs uppercase right-1 text-white"> OFF </span>
      <span className="absolute font-medium text-xs uppercase right-8 text-white"> ON </span>
      <span
        className={`w-7 h-7 right-7 absolute rounded-full bg-gray-200 transform transition duration-200 ease-in-out ${
          isChecked ? 'translate-x-7' : ''
        }`}
      />
    </label>
  );
};

export default Toggle;
