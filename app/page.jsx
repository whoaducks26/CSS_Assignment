// Landing Page

import { Layout } from "antd";
import styles from './page.module.css';

const { Content } = Layout;

export default function HomePage() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <div className={styles.main}>
                <h1>CSS Assignment</h1>
                <p>Made by Andrea, Clyde, Vicky | P01</p>
                <p>Select a page from the menu above.</p>
            </div>
        </Layout>
    );
}
