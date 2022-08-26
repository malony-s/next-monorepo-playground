import React, { useCallback, useState } from 'react';

const useToggle = (
  defaultValue: boolean = false,
): [boolean, (data?: React.SyntheticEvent<HTMLElement> | boolean) => void] => {
  const [value, setValue] = useState<boolean>(defaultValue);
  const toggle = useCallback(
    (newValue?: React.SyntheticEvent<HTMLElement> | boolean) => {
      setValue((prev: boolean) => {
        if (typeof newValue === 'boolean') {
          return newValue;
        }
        return !prev;
      });
    },
    [],
  );
  return [value, toggle];
};

export default useToggle;
