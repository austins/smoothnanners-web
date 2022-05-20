import styles from "../styles/Bio.module.scss";

export default function Bio() {
    return (
        <div className="d-flex mb-4">
            <div className={`flex-shrink-1 ${styles.avatar}`}>
                <img src="/assets/images/avatar.jpg" alt="SmoothNanners" className={`img-fluid rounded-2`} />
            </div>

            <div id="bio" className={`w-100 text-white fs-5 ms-3 ${styles.bio}`}>
                <p>Howdy! My name is Austin.</p>

                <p>I&apos;m a gamer, musician, software developer, and photographer.</p>

                <p className="mb-0">You can find links to my content and websites below!</p>
            </div>
        </div>
    );
}
