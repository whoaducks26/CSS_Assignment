// Cheong Vicky, S10267187G
// this page uses the Layout (HeaderSider2) from AntDesign to give a dark mode
// sidebar menu--Upcoming and Previous events. Features a show details/hide
// details button to expand the programme setlist.

"use client";

import React, { useState } from 'react';
import { Layout, Menu, Typography, Button } from 'antd';
import './upcoming.styles.css';

const { Sider, Content } = Layout;

// Events data: name, details, date, address, image, past(false) or upcoming(true)
const events = [
  {
    id: 1,
    name: "Rondeau XXXVII",
    details: "NPCB's annual concert, an event where all members, both current and alumni, come together to forge stronger bonds.",
    date: "SAT, 25 JAN 2025, 5.30PM",
    address: "MUSIC BOX, NGEE ANN POLYTECHNIC",
    image: "https://connectnpedu-my.sharepoint.com/personal/s10255990_connect_np_edu_sg/Documents/NP%20Concert%20Band%20x%20NPPC/20250125-DSC08693-Enhanced-NR.jpg",
    isUpcoming: false,
    programme: [
        "Philip Sparke — Invictus (The Unconquered)",
        "Alfred Reed — Armenian Dances Part II",
        "Sea of Wisdom — Daisuke Shimizu"
    ]
  },
  {
    id: 2,
    name: "CCA Fiesta",
    details: "Learn more about NPCB at our booth in the atrium, including details as to signing up for our tune-in and registration!",
    date: "April 2025, TBC",
    address: "ATRIUM, NGEE ANN POLYTECHNIC",
    image: "https://instagram.fsin16-1.fna.fbcdn.net/v/t51.29350-15/439101566_2434116830310462_2540005088402249343_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin16-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AE21wrlKuvDBPiPSAhxygp3hpRJobzJGQUkXPHqEKVvnUQhrGjp-GYiJN022UsReEc&_nc_ohc=bqo9qlzH_IkQ7kNvgGtxOzp&_nc_gid=c154ef8ab80e41cba5b5048935041ff2&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM0OTY2NjEyNzE5Nzk1MTY4MQ%3D%3D.3-ccb7-5&oh=00_AYC-L_J4xTx8sFwwfDXNiW-SRvbuuoU1Nm231rLcz4nUpg&oe=67AE3BF8&_nc_sid=22de04",
    isUpcoming: true,
    programme: [
        "Sign Up",
        "Tune-In",
        "Q&A Session"
    ]
  },
];

// Events page: AntDesign's layout component
const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]); // Default to first event
  const [expanded, setExpanded] = useState(false); // Check if details should be shown or hidden

  const handleMenuClick = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    setSelectedEvent(event);
    setExpanded(false); // Reset details so it's not shown when selecting new event
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
      {/* Side Menu */}
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

      {/* Event Content */}
      <Content style={{ padding: '20px' }}>
        {selectedEvent && (
          <>
            <Typography.Title level={2}>{selectedEvent.name}</Typography.Title>
            <Typography.Text>{selectedEvent.date}</Typography.Text>
            <br />
            <Typography.Text>{selectedEvent.address}</Typography.Text>
            <div style={{ margin: '20px 0', textAlign: 'center' }}>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.name}
                style={{
                  width: '80%',
                  height: 'auto',
                  maxHeight: '300px',
                  objectFit: 'cover',
                }}
              />
            </div>

            <Typography.Text>SYNOPSIS</Typography.Text>
            <Typography.Paragraph style={{ marginTop: '5px' }}>{selectedEvent.details}</Typography.Paragraph>

            {/* More Details Button */}
            <Button
              type="primary"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Hide Details' : 'More Details'}
            </Button>

            {/* Expanded Content */}
            {expanded && (
              <div style={{ marginTop: '20px' }}>
                <Typography.Text>PROGRAMME</Typography.Text>
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
