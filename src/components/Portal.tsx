import styles from "../styles/Portal.module.scss";
import {
    At,
    Code,
    Coins,
    DiscordLogo,
    GameController,
    GithubLogo,
    Globe,
    IconContext,
    MusicNotes,
    TwitchLogo,
    TwitterLogo,
    User,
    YoutubeLogo,
} from "phosphor-react";
import { Button, Card } from "react-bootstrap";

export default function Portal() {
    return (
        <IconContext.Provider value={{ size: 32 }}>
            <section>
                <Card border="primary" className="mb-4">
                    <Card.Header>
                        <GameController weight="fill" />
                        <div className={styles.cardHeaderText}>Gaming</div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text as="div" className="d-grid gap-3">
                            <Button
                                variant="danger"
                                size="lg"
                                className="text-start"
                                href="https://www.youtube.com/channel/UCQB1XVER5WPtxRESxHMG1Qw"
                                target="_blank"
                            >
                                <YoutubeLogo weight="fill" />
                                <div className={styles.buttonLinkText}>YouTube</div>
                            </Button>

                            <Button
                                variant="primary"
                                size="lg"
                                className="text-start"
                                href="https://www.twitch.tv/smoothnanners"
                                target="_blank"
                            >
                                <TwitchLogo weight="bold" />
                                <div className={styles.buttonLinkText}>Twitch</div>
                            </Button>

                            <Button
                                variant="dark"
                                size="lg"
                                className="text-start"
                                href="https://discord.gg/P7rhAhA"
                                target="_blank"
                            >
                                <DiscordLogo weight="fill" />
                                <div className={styles.buttonLinkText}>Discord</div>
                            </Button>

                            <Button
                                variant="dark"
                                size="lg"
                                className="text-start"
                                href="https://gamebyline.com"
                                target="_blank"
                            >
                                <Globe weight="regular" />
                                <div className={styles.buttonLinkText}>Game Byline</div>
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>

            <section>
                <Card border="secondary" className="mb-4">
                    <Card.Header>
                        <MusicNotes weight="fill" />
                        <div className={styles.cardHeaderText}>Music</div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text as="div" className="d-grid gap-3">
                            <Button
                                variant="danger"
                                size="lg"
                                className="text-start"
                                href="https://www.youtube.com/channel/UCPjcGsO8o_FKPGHLQ5d1hbg"
                                target="_blank"
                            >
                                <YoutubeLogo weight="fill" />
                                <div className={styles.buttonLinkText}>YouTube</div>
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>

            <section>
                <Card border="light" className="mb-4">
                    <Card.Header>
                        <Code weight="regular" />
                        <div className={styles.cardHeaderText}>Programming</div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text as="div" className="d-grid gap-3">
                            <Button
                                variant="danger"
                                size="lg"
                                className="text-start"
                                href="https://www.youtube.com/channel/UCJjowuNoLywGC7ujP74zFJg"
                                target="_blank"
                            >
                                <YoutubeLogo weight="fill" />
                                <div className={styles.buttonLinkText}>YouTube</div>
                            </Button>

                            <Button
                                variant="dark"
                                size="lg"
                                className="text-start"
                                href="https://github.com/austins"
                                target="_blank"
                            >
                                <GithubLogo weight="regular" />
                                <div className={styles.buttonLinkText}>GitHub</div>
                            </Button>

                            <Button
                                variant="dark"
                                size="lg"
                                className="text-start"
                                href="https://austinsdev.com"
                                target="_blank"
                            >
                                <Globe weight="regular" />
                                <div className={styles.buttonLinkText}>Austin&apos;s Dev</div>
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>

            <section>
                <Card border="dark">
                    <Card.Header>
                        <User weight="regular" />
                        <div className={styles.cardHeaderText}>Social</div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text as="div" className="d-grid gap-3">
                            <Button
                                variant="info"
                                size="lg"
                                className="text-start"
                                href="https://twitter.com/smoothnanners"
                                target="_blank"
                            >
                                <TwitterLogo weight="fill" />
                                <div className={styles.buttonLinkText}>Twitter</div>
                            </Button>

                            <Button
                                variant="dark"
                                size="lg"
                                className="text-start"
                                href="https://streamelements.com/smoothnanners/tip"
                                target="_blank"
                            >
                                <Coins weight="regular" />
                                <div className={styles.buttonLinkText}>Donate / Tip</div>
                            </Button>

                            <Button variant="dark" size="lg" className="text-start" href="mailto:austin@austinsdev.com">
                                <At weight="regular" />
                                <div className={styles.buttonLinkText}>Email</div>
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </IconContext.Provider>
    );
}
