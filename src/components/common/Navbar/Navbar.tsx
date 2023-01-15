import Link from "next/link";
import { NavbarItem } from "../NavbarItem";

export const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "25%",
          justifyContent: "space-between",
          padding: "1rem",
          maxWidth: "50rem",
          marginLeft: "auto",
          marginRight: "2rem",
        }}
      >
        <NavbarItem href="main">Main</NavbarItem>
        <NavbarItem href="events">Event</NavbarItem>
        <NavbarItem href="blog">Blog</NavbarItem>
        <NavbarItem href="contact-us">Contact Us</NavbarItem>
      </div>
    </>
  );
};
