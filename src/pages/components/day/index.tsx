import { Hour } from "../hour"
import styles from '@/styles/Home.module.css'
import { Modal } from "../modal";
import { useState } from "react";

const hoursInADay = new Array(24).fill('');
type Events = {
  start: number;
  end: number;
  name: string;
}
export const Day = ({ date }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [start, setStart] = useState<null|number>(null);
  const [events, setEvents] = useState<any>({});

  const setEvent = (name: string, start: number, end: number) => {
    // setEvents([...events, { name, start, end }]);
    const eventsCopy = {...events};
    console.log(start, end)
    for (let i = start; i < end + 1; i++) {
      console.log(i)
      eventsCopy[i] = name;
    }
    console.log(eventsCopy)
    setEvents(eventsCopy);
    setIsOpen(false);
  }

  const createNewEvent = (index: number) => {
    console.log({index})
    setIsOpen(true);
    setStart(index);
  }
  console.log(events)
  return (
    <>
      <div className={styles.day}>
      <p>{date}</p>

      {/* {events.map(event => <p>{event.name} {event.start} {event.end}</p>)} */}

      {hoursInADay.map((_, index) => <Hour index={index} createNewEvent={createNewEvent} name={events?.[index]}></Hour>)}
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} startTime={start} close={() => setIsOpen(false)} setEvent={setEvent}></Modal>
      )}
    </>
  )
}