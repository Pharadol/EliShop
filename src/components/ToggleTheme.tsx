import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 cursor-pointer" onClick={handleTheme}>
      {theme === 'dark' ? <MdWbSunny /> : <IoMdMoon />}
    </div>
  );
};

export default ToggleTheme;
