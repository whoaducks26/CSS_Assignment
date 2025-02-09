"use client";

import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

export default function NavHeader() {
    const menuItems = [
        {
            key: "1",
            label: <Link href="/meet-the-band">Meet the Band</Link>
        },
        {
            key: "2",
            label: <Link href="/upcoming">Events</Link>
        },
        {
            key: "3",
            label: <Link href="/virtual-instrument">Play This!</Link>
        }
    ];

    return (
        <Header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            backgroundColor: "white", // Light mode
            borderBottom: "1px solid #ddd"
        }}>
            {/* Top left display name */}
            <div style={{
                color: "#121212", 
                fontSize: "20px", 
                fontWeight: "600", 
                fontFamily: "'Figtree', sans-serif"
            }}>
                <Link href="/">Ngee Ann Concert Band</Link>
            </div>

            {/* Menu */}
            <Menu 
                theme="light" 
                mode="horizontal" 
                style={{ flex: 1, justifyContent: "flex-end", fontFamily: "'Figtree', sans-serif" }} 
                items={menuItems} 
            />
        </Header>
    );
}
