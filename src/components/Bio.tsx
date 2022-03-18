import styles from "../styles/Bio.module.scss";
import Image from "next/image";
import avatar from "../../public/assets/images/avatar.jpg";

export default function Bio() {
    return (
        <div className="d-flex mb-4">
            <div className={`flex-shrink-1 ${styles.avatar}`}>
                <Image
                    src={avatar}
                    alt="SmoothNanners"
                    className={`img-fluid rounded-2`}
                    layout="responsive"
                    quality={100}
                    priority
                />
            </div>

            <div id="bio" className={`w-100 text-white fs-5 ms-3 ${styles.bio}`}>
                <p>Howdy! My name is Austin.</p>

                <p>I&apos;m a gamer, musician, software developer, and photographer.</p>

                <p className="mb-0">You can find links to my content and websites below!</p>
            </div>
        </div>
    );
}
