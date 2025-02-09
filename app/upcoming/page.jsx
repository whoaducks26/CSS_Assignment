// Cheong Vicky, S10267187G
// this page uses the Layout (HeaderSider2) from AntDesign to give a light mode
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
    details: "It's that time of the year again! NPCB presents to you: Rondeau XXXVII! NPCB's annual concert, an event where all members, both current and alumni, come together to forge stronger bonds.",
    date: "SAT, 25 JAN 2025, 5.30PM",
    address: "MUSIC BOX, NGEE ANN POLYTECHNIC",
    image: "/images/Rondeau pic 1.jpg",
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
    image: "/images/Rondeau pic 2.jpg",
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
    image: "/images/Rondeau Poster.jpg",
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
            <div style={{ margin: '20px 0', textAlign: 'left' }}>
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
            <br/>
            <Typography.Text>{selectedEvent.details}</Typography.Text>
            <br/>
            <br/>

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
