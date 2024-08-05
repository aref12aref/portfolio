import { createContext, useState } from "react";

export const Mode = createContext("");

export default function ModeContext({ children }) {
  const [isBlack, setIsBlack] = useState(true);

  return (
    <Mode.Provider value={{ isBlack, setIsBlack }}>{children}</Mode.Provider>
  );
}
