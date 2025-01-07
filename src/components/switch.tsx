import * as Switch from "@radix-ui/react-switch";
import React, { useState } from "react";

const ShadcnSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <Switch.Root
        id="shadcn-switch"
        className={`w-12 h-6 flex items-center bg-white rounded-full p-1
        }`}
        checked={isOn}
        onCheckedChange={(checked) => setIsOn(checked)}
      >
        <Switch.Thumb
          className={`block w-4 h-4 bg-black rounded-full shadow transform transition-transform ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </Switch.Root>
    </div>
  );
};

export default ShadcnSwitch;
