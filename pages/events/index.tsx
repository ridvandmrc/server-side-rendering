import { FC } from "react";
import { EventItem } from "../../src/components/event";
import { IEventItemModel } from "../../src/model";

import * as event from "../../data/event.json";

interface IEventItemProps {
  events: IEventItemModel[];
}

const Events: FC<IEventItemProps> = ({ events = [] }) => {
  return (
    <div>
      {events.map((item, index) => (
        <EventItem key={`event-id-${index}`} {...item} />
      ))}
    </div>
  );
};

export default Events;

export const getStaticProps = (): {
  props: { events: IEventItemModel[] };
} => {
  return {
    props: {
      events: event.event,
    },
  };
};
