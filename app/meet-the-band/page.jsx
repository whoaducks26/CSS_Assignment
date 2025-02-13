"use client"; 

//imports
import { useState, } from "react";
import Image from "next/image";
import "./meet.styles.css";

// main comm
const mainComm = [
  {
    name: "Pei Yi", 
    role: "President", 
    instaPost: "https://www.instagram.com/p/C84CI51SuB2/?img_index=1",
    instaImage: "https://instagram.fsin15-1.fna.fbcdn.net/v/t51.29350-15/449615305_1157013472200791_735680815204929020_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2AHxl8zckqZFMhDiPw0KWtG4vKRhy2FFa2qeKMARqk7xsQVsbIo_1Fn2U1zi7kdmAdk&_nc_ohc=H9-Tb6EUPGAQ7kNvgGB9PQe&_nc_gid=39e336c5e59a4e8eb704a5d52cf804e6&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQwMjQ3ODkyMDI2NzIxNTI2MA%3D%3D.3-ccb7-5&oh=00_AYCLH_-4DB5G3CAjWm5XuR2Og23mPbgPVR6-WHtu9Tl8jg&oe=67AD371E&_nc_sid=22de04.jpg",
  },
  {
    name: "Kaley",
    role: "Vice President",
    instaPost: "https://www.instagram.com/p/C81e5clyp8I/?img_index=1",
    instaImage: "https://instagram.fsin15-2.fna.fbcdn.net/v/t51.29350-15/449459936_355848870866634_1612654218381304851_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AHxl8zckqZFMhDiPw0KWtG4vKRhy2FFa2qeKMARqk7xsQVsbIo_1Fn2U1zi7kdmAdk&_nc_ohc=bwiSmxoE2JAQ7kNvgH3lRgu&_nc_gid=39e336c5e59a4e8eb704a5d52cf804e6&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQwMTc2MDk3NTU2NDE5NzA4NA%3D%3D.3-ccb7-5&oh=00_AYDJpxNDU-fWvbAME-28irBiKn8FA7A9tzuIdcsCjPdm8Q&oe=67AD518E&_nc_sid=22de04.jpg",
  },
  {
    name: "Rena",
    role: "Treasurer",
    instaPost: "https://www.instagram.com/p/C8y4rrZS_Uw/?img_index=1",
    instaImage: "https://instagram.fsin15-1.fna.fbcdn.net/v/t51.29350-15/449462581_1374546740614701_7583823926694531415_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2AF_ilTAXp0k597BvYeKw_m4j4bDS8byuiZqokJNBHnRPmVPA6N-fjs6D7raS5ZdZ-w&_nc_ohc=t_mQ8NX4qTEQ7kNvgGdAiN6&_nc_gid=af6265205dde4c23a18bfda876d7ee04&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQwMTAyOTk1MjE4MjI5NjgwMg%3D%3D.3-ccb7-5&oh=00_AYCyleP952LwzEuZKEivZjL2phHF7wMX1VcSP7SeHqKBOQ&oe=67AD359F&_nc_sid=22de04.jpg",
  },
  {
    name: "Kenny",
    role: "Secretary",
    instaPost: "https://www.instagram.com/p/C8zTS-1ydJR/?img_index=1",
    instaImage: "https://instagram.fsin15-1.fna.fbcdn.net/v/t51.29350-15/449458137_456703613888313_7660034054553357054_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2AHxl8zckqZFMhDiPw0KWtG4vKRhy2FFa2qeKMARqk7xsQVsbIo_1Fn2U1zi7kdmAdk&_nc_ohc=1ELPvlacoQ0Q7kNvgGUctuA&_nc_gid=39e336c5e59a4e8eb704a5d52cf804e6&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzQwMTE0NzAwNDE1OTA2NzY1MQ%3D%3D.3-ccb7-5&oh=00_AYCbpNClYkT87h3Nyp8b-nFgV_YmR136qYlw76VO3RXoIw&oe=67AD2F8B&_nc_sid=22de04.jpg",
  },
];

// sub comm
const subComm = [
    {
        name: "Syafiq and Si Xuan",
        role: "Welfares",
        instaPost: "https://www.instagram.com/p/C8o4m8Dybsk/?img_index=1",
        instaImage: "https://instagram.fsin15-2.fna.fbcdn.net/v/t51.29350-15/449013692_352797260929769_3093404861705465592_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-2.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2AEQPtBp9N09Pf_oBWHjAanh0HGQT3yF5iXFhWIrvMZwck-vAQH3YW1DOwWw2vKYo8Y&_nc_ohc=fVRf81iC4ZkQ7kNvgEGyIj7&_nc_gid=5a2516bed3a34199a49454f19e659e28&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM5ODIxNDg3NzY1MDE4MjA5Ng%3D%3D.3-ccb7-5&oh=00_AYA56jpt1lFLME46JjIisRFiNIPXaJJSFlkmOn-t55Ouaw&oe=67AD52C2&_nc_sid=22de04.jpg",
    },
    {
        name: "Kai Wen",
        role: "Stage Manager",
        instaPost: "https://www.instagram.com/p/C8oBNrvyAYG/?img_index=1",
        instaImage: "https://instagram.fsin15-2.fna.fbcdn.net/v/t51.29350-15/449075115_340502952442854_3008478066302063775_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AEQPtBp9N09Pf_oBWHjAanh0HGQT3yF5iXFhWIrvMZwck-vAQH3YW1DOwWw2vKYo8Y&_nc_ohc=6YJEGAgDonsQ7kNvgF3UUoq&_nc_gid=5a2516bed3a34199a49454f19e659e28&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM5Nzk3MTI0OTU2NDUwNTc0NQ%3D%3D.3-ccb7-5&oh=00_AYCChnd10FwWeXytL7FQxtKfjDqBklghWgw8QCTkveAkjA&oe=67AD53AB&_nc_sid=22de04.jpg",
    },
    {
        name: "Jenelle and Joy",
        role: "Librarians",
        instaPost: "https://www.instagram.com/p/C8llPatSY5X/?img_index=1",
        instaImage: "https://instagram.fsin15-1.fna.fbcdn.net/v/t51.29350-15/449069728_834092094846764_2331872240078123650_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2AEQPtBp9N09Pf_oBWHjAanh0HGQT3yF5iXFhWIrvMZwck-vAQH3YW1DOwWw2vKYo8Y&_nc_ohc=rS8dpT4cZnwQ7kNvgHZxSdU&_nc_gid=5a2516bed3a34199a49454f19e659e28&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM5NzI4NTI3MjkyMzgzMzA4MQ%3D%3D.3-ccb7-5&oh=00_AYBIhnt5PjfRAAgr6L2DPKua5bgAtoTmV9G6AdMnfwOMYg&oe=67AD570D&_nc_sid=22de04.jpg",
    },
    {
        name: "Jason and Pei Xuan",
        role: "Quater Masters",
        instaPost: "https://www.instagram.com/p/C8jaeCcShMP/?img_index=1",
        instaImage: "https://instagram.fsin15-2.fna.fbcdn.net/v/t51.29350-15/448931567_1007407537783697_5908817447746307949_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-2.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2AEQPtBp9N09Pf_oBWHjAanh0HGQT3yF5iXFhWIrvMZwck-vAQH3YW1DOwWw2vKYo8Y&_nc_ohc=9GUumHsBarsQ7kNvgE698ny&_nc_gid=5a2516bed3a34199a49454f19e659e28&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzM5NjY3NDk0ODk5NDYwMjE0Mg%3D%3D.3-ccb7-5&oh=00_AYBLTJb5MeyOzej9Nr6juAl2Mvf69cZR947NaHZJpGpVqQ&oe=67AD4228&_nc_sid=22de04.jpg",
    },
]

// band sections
const bandRow1 = [
  { name: "Flutes", 
    instaPost: "https://www.instagram.com/p/DEj7gCJTk_1/?img_index=1",
    instaImage: "https://instagram.fsin15-1.fna.fbcdn.net/v/t51.29350-15/473175776_3841834322741348_8827110004119080995_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2AHIaUVLG1byeS8Si6JKhgF3pJd-6OT6QIiOEG5YpU2eUQxhCjDIhGYK8ceCqbCeiPk&_nc_ohc=rqgMdoPeShcQ7kNvgFq4eV4&_nc_gid=f5110e4ec8c74722a6d36871b44e6ed9&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU0MDkzNTQwOTg2ODMyNzA3OQ%3D%3D.3-ccb7-5&oh=00_AYA1UDFG4NKtcDe5Mbn8drvop3OgY7TWUkc43f89MC9ilg&oe=67AD2510&_nc_sid=22de04.jpg",
  },
  { name: "Clarinets", 
    instaPost: "https://www.instagram.com/p/DEkND7Yzt_c/?img_index=1",
    instaImage: "https://instagram.fsin15-1.fna.fbcdn.net/v/t51.29350-15/473057480_1129445781902432_6320440550456341047_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2AHIaUVLG1byeS8Si6JKhgF3pJd-6OT6QIiOEG5YpU2eUQxhCjDIhGYK8ceCqbCeiPk&_nc_ohc=ccJw-eXSiQQQ7kNvgE08fpf&_nc_gid=f5110e4ec8c74722a6d36871b44e6ed9&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU0MTAxMjY0MjU0OTE1NTUzMw%3D%3D.3-ccb7-5&oh=00_AYAjbNFGxr65rLSDQgflUbNeWbywyZ5Iumzax4VhwxBokA&oe=67AD3510&_nc_sid=22de04.jpg",
  },
  { name: "French Horns", 
    instaPost: "https://www.instagram.com/p/DEkdDa2zGnt/?img_index=1",
    instaImage: "https://instagram.fsin15-1.fna.fbcdn.net/v/t51.29350-15/472741630_449125918272790_4021995577715220388_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2AHIaUVLG1byeS8Si6JKhgF3pJd-6OT6QIiOEG5YpU2eUQxhCjDIhGYK8ceCqbCeiPk&_nc_ohc=avQ65-aiPZUQ7kNvgEIWEsE&_nc_gid=f5110e4ec8c74722a6d36871b44e6ed9&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU0MTA4Mjk3NDI4MjU5MDA0Mg%3D%3D.3-ccb7-5&oh=00_AYBtlDCTH66GNqGVal42vZ69o6YJV-yFp2-RQzydrieZjw&oe=67AD22EB&_nc_sid=22de04.jpg",
  },
  { name: "Trumpets", 
    instaPost: "https://www.instagram.com/p/DEnGQ_KzCW2/?img_index=1",
    instaImage: "https://instagram.fsin15-1.fna.fbcdn.net/v/t51.29350-15/473034983_601258925818430_3006168407822460782_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2AHIaUVLG1byeS8Si6JKhgF3pJd-6OT6QIiOEG5YpU2eUQxhCjDIhGYK8ceCqbCeiPk&_nc_ohc=IhA5nLbTnjEQ7kNvgHtZB_v&_nc_gid=f5110e4ec8c74722a6d36871b44e6ed9&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU0MTgyNzE3NTMxMjIwNDg0Mw%3D%3D.3-ccb7-5&oh=00_AYCaBm_BWaMdj0Yr4J_Q5Je0Uvr6EZmQ6OvNlgPiY1h6Hg&oe=67AD40F9&_nc_sid=22de04.jpg",
  },
]

const bandRow2 = [
  { name: "Trombones", 
    instaPost: "https://www.instagram.com/p/DEreMbhzvYk/?img_index=1",
    instaImage: "https://instagram.fsin15-1.fna.fbcdn.net/v/t51.29350-15/473430757_441770592349633_9020276656270032809_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2AHIaUVLG1byeS8Si6JKhgF3pJd-6OT6QIiOEG5YpU2eUQxhCjDIhGYK8ceCqbCeiPk&_nc_ohc=IGbYbC9T9oQQ7kNvgHDgum1&_nc_gid=f5110e4ec8c74722a6d36871b44e6ed9&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU0MzA1ODMxOTMwNzIxMzAwOQ%3D%3D.3-ccb7-5&oh=00_AYBFh829YbnWYZcBo116WoZh-wjhHZzwFxdWWogegJHPMg&oe=67AD4453&_nc_sid=22de04.jpg",
  },
  { name: "Euphoniums & Tubas", 
    instaPost: "https://www.instagram.com/p/DErhLYdT3JO/?img_index=1",
    instaImage: "https://instagram.fsin15-2.fna.fbcdn.net/v/t51.29350-15/473426350_516865834144195_7547688666217698373_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2AHIaUVLG1byeS8Si6JKhgF3pJd-6OT6QIiOEG5YpU2eUQxhCjDIhGYK8ceCqbCeiPk&_nc_ohc=9widgXJBPhkQ7kNvgHzB8Wr&_nc_gid=f5110e4ec8c74722a6d36871b44e6ed9&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU0MzA3MTQzODUzNjUzNTk4Mg%3D%3D.3-ccb7-5&oh=00_AYAWkYE9oFkb0UnXF6wx7hjec4lfHAMQ6r69jrFNURDYwA&oe=67AD5212&_nc_sid=22de04.jpg", 
  },
  { name: "Saxophones", 
    instaPost: "https://www.instagram.com/p/DErhQvBzLYY/?img_index=1",
    instaImage: "https://instagram.fsin15-2.fna.fbcdn.net/v/t51.29350-15/473432179_519182930519418_660794439248939511_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-2.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2AFyTWJ8aIV4Vxcj1roMhiQVGfEVgqvO8Sc0xVIKNhu2KQiH0SVEkwWAYbjkHqRnxiE&_nc_ohc=cx4Sqg5OcKMQ7kNvgEPOBqa&_nc_gid=00c103b5cb45463b97974c634acea864&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzU0MzA3MTgwNjU4NjY2NjgyNw%3D%3D.3-ccb7-5&oh=00_AYDjx_XrSNd1hm7_XtAoCbmpejcM_YxVD2WBxPGQHbX1EA&oe=67AD3B00&_nc_sid=7a9f4b.jpg",
  },
  { name: "Percussion", 
    instaPost: "https://www.instagram.com/p/DEul9rsTY-B/?img_index=1", 
    instaImage: "https://instagram.fsin15-1.fna.fbcdn.net/v/t51.29350-15/472855398_1251080566000808_4947889647117329289_n.jpg?stp=dst-jpg_e35_s720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsin15-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2AFyTWJ8aIV4Vxcj1roMhiQVGfEVgqvO8Sc0xVIKNhu2KQiH0SVEkwWAYbjkHqRnxiE&_nc_ohc=Ztzs1kbwhYEQ7kNvgFFpjIh&_nc_gid=00c103b5cb45463b97974c634acea864&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzU0MzkzNjkxNTk5NTU5OTcxNg%3D%3D.3-ccb7-5&oh=00_AYAUJRYUcJf5e1XfXcu93vJt8932CtEbCQnz5ZibaPvkpg&oe=67AD2ECA&_nc_sid=7a9f4b.jpg",
  },
];

//  member card
const MemberCard = ({ member, onClick }) => (
  <div className="member-card" onClick={() => onClick(member)}>
    <Image src={member.instaImage} alt={member.name} width={150} height={150} className="member-image" />
    <h3>{member.name}</h3>
    {member.role && <p>{member.role}</p>}
  </div>
);

//  meet the members
export default function Meet() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="meet-container">
      {/* main comm */}
      <div className="section">
        <h2>Main Committee</h2>
        <div className="grid">{mainComm.map((member) => <MemberCard key={member.name} member={member} onClick={openModal} />)}</div>
      </div>

      {/* sub comm */}
      <div className="section">
        <h2>Subcommittee</h2>
        <div className="grid">{subComm.map((member) => <MemberCard key={member.name} member={member} onClick={openModal} />)}</div>
      </div>

      {/* band sections */}
      <div className="section">
        <h2>Band Sections</h2>
        <div className="band-grid">
          <div className="band-row">{bandRow1.map((section) => <MemberCard key={section.name} member={section} onClick={openModal} />)}</div>
          <div className="band-row">{bandRow2.map((section) => <MemberCard key={section.name} member={section} onClick={openModal} />)}</div>
        </div>
      </div>

      {/* modal */}
      {modalIsOpen && selectedMember && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Image src={selectedMember.instaImage} alt={selectedMember.name} width={250} height={250} className="modal-img" />
            <h2>{selectedMember.name}</h2>
            {selectedMember.role && <p>{selectedMember.role}</p>}
            <a href={selectedMember.instaPost} target="_blank" rel="noopener noreferrer" className="insta-link">
              View on Instagram
            </a>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
