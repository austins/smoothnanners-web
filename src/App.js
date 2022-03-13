import "./styles/App.scss";
import { Button, Card, Container } from "react-bootstrap";
import {
    At,
    Code,
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
import avatar from "./assets/images/avatar.jpg";

function App() {
    return (
        <Container id="main" className="d-flex align-items-center py-3">
            <div className="w-100">
                <header>
                    <h1 id="logo" className="mb-2 text-white">
                        SmoothNanners
                    </h1>

                    <div className="d-flex mb-4">
                        <div className="flex-shrink-1">
                            <img id="avatar" src={avatar} alt="SmoothNanners" className="img-fluid rounded-2" />
                        </div>

                        <div id="bio" className="w-100 text-white fs-5 ms-3">
                            <p>Howdy! My name is Austin.</p>

                            <p>I'm a gamer, musician, software developer, and photographer.</p>

                            <p className="mb-0">You can find links to my content and websites below!</p>
                        </div>
                    </div>
                </header>

                <main>
                    <IconContext.Provider value={{ size: 32 }}>
                        <section>
                            <Card border="primary" className="mb-4">
                                <Card.Header>
                                    <GameController weight="fill" />
                                    <div className="card-header-text">Gaming</div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <div className="d-grid gap-3">
                                            <Button
                                                variant="danger"
                                                size="lg"
                                                className="text-start"
                                                href="https://www.youtube.com/channel/UCQB1XVER5WPtxRESxHMG1Qw"
                                                target="_blank"
                                            >
                                                <YoutubeLogo weight="fill" />
                                                <div className="button-link-text">YouTube</div>
                                            </Button>

                                            <Button
                                                variant="primary"
                                                size="lg"
                                                className="text-start"
                                                href="https://www.twitch.tv/smoothnanners"
                                                target="_blank"
                                            >
                                                <TwitchLogo weight="bold" />
                                                <div className="button-link-text">Twitch</div>
                                            </Button>

                                            <Button
                                                variant="dark"
                                                size="lg"
                                                className="text-start"
                                                href="https://discord.gg/P7rhAhA"
                                                target="_blank"
                                            >
                                                <DiscordLogo weight="fill" />
                                                <div className="button-link-text">Discord</div>
                                            </Button>

                                            <Button
                                                variant="dark"
                                                size="lg"
                                                className="text-start"
                                                href="https://gamebyline.com"
                                                target="_blank"
                                            >
                                                <Globe weight="regular" />
                                                <div className="button-link-text">Game Byline</div>
                                            </Button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </section>

                        <section>
                            <Card border="secondary" className="mb-4">
                                <Card.Header>
                                    <MusicNotes weight="fill" />
                                    <div className="card-header-text">Music</div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <div className="d-grid gap-3">
                                            <Button
                                                variant="danger"
                                                size="lg"
                                                className="text-start"
                                                href="https://www.youtube.com/channel/UCPjcGsO8o_FKPGHLQ5d1hbg"
                                                target="_blank"
                                            >
                                                <YoutubeLogo weight="fill" />
                                                <div className="button-link-text">YouTube</div>
                                            </Button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </section>

                        <section>
                            <Card border="light" className="mb-4">
                                <Card.Header>
                                    <Code weight="regular" />
                                    <div className="card-header-text">Programming</div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <div className="d-grid gap-3">
                                            <Button
                                                variant="danger"
                                                size="lg"
                                                className="text-start"
                                                href="https://www.youtube.com/channel/UCJjowuNoLywGC7ujP74zFJg"
                                                target="_blank"
                                            >
                                                <YoutubeLogo weight="fill" />
                                                <div className="button-link-text">YouTube</div>
                                            </Button>

                                            <Button
                                                variant="dark"
                                                size="lg"
                                                className="text-start"
                                                href="https://github.com/austins"
                                                target="_blank"
                                            >
                                                <GithubLogo weight="regular" />
                                                <div className="button-link-text">GitHub</div>
                                            </Button>

                                            <Button
                                                variant="dark"
                                                size="lg"
                                                className="text-start"
                                                href="https://austinsdev.com"
                                                target="_blank"
                                            >
                                                <Globe weight="regular" />
                                                <div className="button-link-text">Austin's Dev</div>
                                            </Button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </section>

                        <section>
                            <Card border="dark">
                                <Card.Header>
                                    <User weight="regular" />
                                    <div className="card-header-text">Social</div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <div className="d-grid gap-3">
                                            <Button
                                                variant="info"
                                                size="lg"
                                                className="text-start"
                                                href="https://twitter.com/smoothnanners"
                                                target="_blank"
                                            >
                                                <TwitterLogo weight="fill" />
                                                <div className="button-link-text">Twitter</div>
                                            </Button>

                                            <Button
                                                variant="dark"
                                                size="lg"
                                                className="text-start"
                                                href="mailto:austin@austinsdev.com"
                                                target="_blank"
                                            >
                                                <At weight="regular" />
                                                <div className="button-link-text">Email</div>
                                            </Button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </section>
                    </IconContext.Provider>
                </main>
            </div>
        </Container>
    );
}

export default App;
