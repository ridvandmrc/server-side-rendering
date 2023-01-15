import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

export const NavbarItem: FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => {
  const { push } = useRouter();
  return (
    <div style={{ cursor: "pointer" }} onClick={() => push(`/${href}`)}>
      {children}
    </div>
  );
};
