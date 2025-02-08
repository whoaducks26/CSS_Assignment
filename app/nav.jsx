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
            label: <Link href="/upcoming">Upcoming Events</Link>
        },
        {
            key: "3",
            label: <Link href="/virtual-instrument">Play This!</Link>
        }
    ];

    return (
        <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
            {/*Top left display name*/}
            <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
                <Link href="/">Ngee Ann Concert Band</Link>
            </div>

            {/* Menu */}
            <Menu theme="dark" mode="horizontal" style={{ flex: 1, justifyContent: "flex-end" }} items={menuItems} />
        </Header>
    );
}