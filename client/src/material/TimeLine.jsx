/** @format */

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function Item({ children }) {
  return (
    <>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{children}</TimelineContent>
      </TimelineItem>
    </>
  );
}

export default function AlternateTimeline({ timeline }) {
  return (
    <div className='py-20 bg-[var(--backGround)] text-[var(--heading-trival)]'>
      <h1 className='font-bold text-3xl sm:text-5xl capitalize underline text-center text-[var(--heading-trival)] my-5'>
        Timeline
      </h1>
      <Timeline position='alternate'>
        {timeline.map((time, idx) => (
          <Item key={idx}>
            <div className='text-[var(--heading-light)]'>
              <p className='font-bold text-[var(--heading-trival)]'>
                {time.heading}
              </p>
              <p>{time.date}</p>
              <div className='flex justify-between'>
                {idx % 2 == 1 && <div></div>}
                <img height='100px' width='100px' src={time.image} alt='' />
              </div>
              <p className='text-xs sm:text-sm md:text-base'>{time.content}</p>
            </div>
          </Item>
        ))}
      </Timeline>
    </div>
  );
}
