import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { IEventItemModel } from "../../model";

interface IEventItemProps extends IEventItemModel {}

export const EventItem: FC<IEventItemProps> = ({ content, title }) => {
  const { push } = useRouter();
  return (
    <div onClick={() => push(`/events/${title}`)}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
