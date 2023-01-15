import React, { FC } from "react";
import { EventDetailItem } from "../../src/components/event/EventDetailItem";

import { eventDetail } from "../../data/eventDetail.json";
import { IEventDetailModel } from "../../src/model";

const EventDetail: FC<IEventDetailModel> = ({ content, image, title }) => {
  return <EventDetailItem content={content} image={image} title={title} />;
};

export default EventDetail;

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "Artvin" } },
      { params: { id: "Erzurum" } },
      { params: { id: "İzmir" } },
      { params: { id: "Kocaeli" } },
      { params: { id: "Kars" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const selectedId = context.params.id;
  const selected = eventDetail[selectedId];

  return {
    props: {
      title: context.params.id,
      content: selected.content,
      image: selected.image,
    },
  };
};
