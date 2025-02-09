// Landing Page

import { Layout } from "antd";
import styles from './page.module.css';

const { Content } = Layout;

export default function HomePage() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <div className={styles.main}>
                <h1>CSS Assignment</h1>
                <h2>Made by Andrea, Clyde, Vicky | P01</h2>
                <h3>
                    This website is meant as a website for Ngee Ann Polytechnic's Concert Band club, 
                    showcasing the committee members (Meet the Band!), events (Events), and an
                    interactive keyboard (Play This!).
                </h3>
                <h3>Select a page from the menu above.</h3>
            </div>
        </Layout>
    );
}
