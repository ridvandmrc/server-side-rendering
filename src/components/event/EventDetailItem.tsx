import { FC } from "react";
import { IEventDetailModel } from "../../model";
import Image from "next/image";

export const EventDetailItem: FC<IEventDetailModel> = ({
  content,
  image,
  title,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <Image src={image} alt={title as string} width={500} height={500} />
      <p>{content}</p>
    </div>
  );
};
