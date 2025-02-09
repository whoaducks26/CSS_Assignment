// Cheong Vicky, S10267187G, P01
// this page uses the Layout (HeaderSider2) from AntDesign to give a light mode
// sidebar menu--Upcoming and Previous events. features a show details/hide
// details button to expand the programme setlist.

"use client";

import React, { useState } from 'react';
import { Layout, Menu, Typography, Button } from 'antd';
import Image from "next/image";
import './upcoming.styles.css';

const { Sider, Content } = Layout;

// events data: name, details, date, address, image n post url, past(false) or upcoming(true)
const events = [
  {
    id: 1,
    name: "Rondeau XXXVII",
    details: "It's that time of the year again! NPCB presents to you: Rondeau XXXVII! NPCB's annual concert, an event where all members, both current and alumni, come together to forge stronger bonds.",
    date: "SAT, 25 JAN 2025, 5.30PM",
    address: "MUSIC BOX, NGEE ANN POLYTECHNIC",
    imageUrl: "https://instagram.fsin16-1.fna.fbcdn.net/v/t51.29350-15/471551541_1145021933840975_7942593875723309872_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin16-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2AHlNB6kBETjXWaPBH3jgYdRSLdg-emCw33AwWbTY-mk4Sh-MvGAk0-1MOmGw08QmOs&_nc_ohc=UzVHoVm9iYEQ7kNvgE9rytb&_nc_gid=5219c5f763094c25b613153587a6effd&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzUzMDY1ODc1Mjk1MTU1Mzg1MA%3D%3D.3-ccb7-5&oh=00_AYAThz3RkaTivkQD3CAMe7g6aDV7aaZt7Bs5b8ENIdy_qg&oe=67AEA82E&_nc_sid=22de04",
    postUrl: "https://www.instagram.com/p/DD_a234zQ86/?hl=en",
    isUpcoming: false,
    programme: [
        "Philip Sparke — Invictus (The Unconquered)",
        "Alfred Reed — Armenian Dances Part II",
        "Sea of Wisdom — Daisuke Shimizu"
    ]
  },
  {
    id: 2,
    name: "Open House 2025",
    details: "Pull out your cameras, it's official that NPCB will be performing at this year's NP Open House '25! \nWatch as we perform familiar tunes, new and old, beloved by all!",
    date: "SAT, 11 JAN 2025, 3.30PM",
    address: "ATRIUM, NGEE ANN POLYTECHNIC",
    imageUrl: "https://instagram.fsin16-1.fna.fbcdn.net/v/t51.29350-15/471465660_27865764259734615_5001899786151993827_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin16-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AHlNB6kBETjXWaPBH3jgYdRSLdg-emCw33AwWbTY-mk4Sh-MvGAk0-1MOmGw08QmOs&_nc_ohc=_7Wh_sn0-CEQ7kNvgHUgd8n&_nc_gid=5219c5f763094c25b613153587a6effd&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzUyOTIzMzY5MzgwODY5NDcwMg%3D%3D.3-ccb7-5&oh=00_AYBPrIfqyYWMBI-AY7JkUsYvNs6lrVSGTCvMYQ-Utm0ruw&oe=67AE8FEC&_nc_sid=22de04",
    postUrl: "https://www.instagram.com/p/DD6W1iIzpWu/?hl=en",
    isUpcoming: false,
    programme: [
      "Jay Chou — Best of Jay Chou",
      "Taylor Swift — Taylor Swift Classics",
      "Rose, Bruno Mars — APT"
    ]
  },
  {
    id: 3,
    name: "CCA Fiesta",
    details: "Learn more about NPCB at our booth in the atrium, including details as to signing up for our tune-in and registration!",
    date: "APRIL 2025, TBC",
    address: "ATRIUM, NGEE ANN POLYTECHNIC",
    imageUrl: "https://instagram.fsin16-1.fna.fbcdn.net/v/t51.29350-15/439101566_2434116830310462_2540005088402249343_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin16-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AEGQJK6Xv7s-TjgdBAZxE4sujibZaTyEmAG-OsLa6tu9GnolyUpSE9svhLOSy1m0aQ&_nc_ohc=bqo9qlzH_IkQ7kNvgGtxOzp&_nc_gid=34bcc4a8390347f09cb513f38967954d&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM0OTY2NjEyNzE5Nzk1MTY4MQ%3D%3D.3-ccb7-5&oh=00_AYCktN2fXX-6JD_w6hCTQi7V2ObNPvzE5MLaZSSe2aGkUw&oe=67AEAC78&_nc_sid=22de04",
    postUrl: "https://www.instagram.com/p/C58Z5qRyOHM/?hl=en&img_index=1",
    isUpcoming: true,
    programme: [
        "Sign Up",
        "Tune-In",
        "Q&A Session"
    ]
  },
];

// events page: using AntDesign's layout component
const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]); // default to first event
  const [expanded, setExpanded] = useState(false); // check if details should be shown or hidden

  const handleMenuClick = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    setSelectedEvent(event);
    setExpanded(false); // reset details so it's not shown when selecting new event
  };

  const renderMenuItems = (isUpcoming) => {
    return events
      .filter((event) => event.isUpcoming === isUpcoming)
      .map((event) => ({
        key: event.id,
        label: event.name,
      }));
  };

  return (
    <Layout style={{ height: '100vh', padding: '20px' }}>
      
      {/* side menu */}
      <Sider width={240} theme="light" style={{ padding: '20px' }}>
        <Typography.Title level={4}>
            Upcoming
        </Typography.Title>
        <Menu
          mode="vertical"
          defaultSelectedKeys={[String(events[0].id)]}
          onClick={({ key }) => handleMenuClick(Number(key))}
          items={renderMenuItems(true)}
        />
        <Typography.Title level={4} style={{ marginTop: '20px' }}>
          Previous
        </Typography.Title>
        <Menu
          mode="vertical"
          onClick={({ key }) => handleMenuClick(Number(key))}
          items={renderMenuItems(false)}
        />
      </Sider>

      {/* event content */}
      <Content style={{ padding: '20px' }}>
        {selectedEvent && (
          <>
            <Typography.Title level={2}>{selectedEvent.name}</Typography.Title>
            <Typography.Text>{selectedEvent.date}</Typography.Text>
            <br />
            <Typography.Text>{selectedEvent.address}</Typography.Text>
            <div style={{ margin: '20px 0', textAlign: 'left', position: 'relative' }}>
              <a href={selectedEvent.postUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src={selectedEvent.imageUrl}
                  alt={selectedEvent.name}
                  crossOrigin="anonymous"
                  width="500"
                  height="500"
                  style={{
                    width: '80%',
                    height: 'auto',
                    maxHeight: '300px',
                    objectFit: 'contain',
                    cursor: 'pointer'
                  }}
                />
                {/* Overlay */}
                <div className="hover-text">Go to post</div>
              </a>
            </div>

            <Typography.Text>SYNOPSIS</Typography.Text>
            <br/>
            <Typography.Text>{selectedEvent.details}</Typography.Text>
            <br/>
            <br/>

            {/* More Details button */}
            <Button
              type="primary"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Hide Details' : 'More Details'}
            </Button>

            {/* expanded content; programme/setlist */}
            {expanded && (
              <div style={{ marginTop: '20px' }}>
                <Typography.Text>PROGRAMME/SETLIST</Typography.Text>
                <ul>
                  {selectedEvent.programme.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </Content>
    </Layout>
  );
};

export default EventsPage;
