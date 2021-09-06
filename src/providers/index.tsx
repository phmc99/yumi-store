import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Providers;
