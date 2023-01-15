import { Navbar } from "../../components/common";

export const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
