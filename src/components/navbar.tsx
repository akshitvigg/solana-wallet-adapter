import { useState } from "react";
import solanaLogo from "/solanaLogo.png";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Switch } from "@/components/ui/switch";

export const Navbar = () => {
  const [isDarktheme, setDarktheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarktheme(!isDarktheme);
    document.querySelector("html")?.classList.toggle("dark");
  };
  return (
    <div data-aos="fade-down" className=" flex justify-center">
      <div className=" ml-3 mr-3 sm:ml-0 sm:mr-0 shadow-md flex justify-between  py-8 bg-white/20 dark:bg-zinc-900/40 border border-gray-300 dark:border-zinc-700 rounded-2xl backdrop-blur-xl  translate-y-5 w-[1000px] ">
        <img className="ml-10" src={solanaLogo} width={150} alt="" />

        <div className=" flex items-center gap-2  mr-10">
          <IconMoon color={` ${!isDarktheme ? "#14F195" : "gray"}`} />
          <Switch onClick={toggleTheme} />
          <IconSun color={` ${isDarktheme ? "#14F195" : "gray"}`} />
        </div>
      </div>
    </div>
  );
};
