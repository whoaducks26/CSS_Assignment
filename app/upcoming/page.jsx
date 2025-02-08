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
    image: "/path/to/image2.png",
    isUpcoming: true,
    programme: [
        "Sign Up",
        "Tune-In",
        "Q&A Session"
    ]
  },
];

// Events page: utilises AntDesign's layout component
const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]); // Default to the first event
  const [expanded, setExpanded] = useState(false); // Track if details are expanded

  const handleMenuClick = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    setSelectedEvent(event);
    setExpanded(false); // Reset details to not be expanded when selecting a new event
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
      <Sider width={240} theme="dark" style={{ padding: '20px' }}>
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
            <Typography.Title level={2} className="yellow-text">{selectedEvent.name}</Typography.Title>
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
            <Typography.Paragraph style={{ marginTop: '5px' }} className="yellow-text">{selectedEvent.details}</Typography.Paragraph>

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
