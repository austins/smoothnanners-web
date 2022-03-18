import styles from "../styles/Header.module.scss";

export default function Header() {
    return (
        <header>
            <h1 id="header-text" className={`mb-2 text-white ${styles.headerText}`}>
                SmoothNanners
            </h1>
        </header>
    );
}
