// Home page - entry point

import { Layout } from "antd";
import NavHeader from "./nav";

const { Content } = Layout;

export default function HomePage() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h1>CSS Assignment</h1>
                <p>Made by Andrea, Clyde, Vicky | P01</p>
                <p>Select a page from the menu above.</p>
            </div>
        </Layout>
    )
}