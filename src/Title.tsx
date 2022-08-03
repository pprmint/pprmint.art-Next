import { Typography, Container } from "@mui/material";

export default function Title(
    props: React.PropsWithChildren<{
        top: string;
        bottom: string;
        big?: boolean;
        body?: string;
        src?: string;
    }>
) {
    if (props.big) {
        return (
            <Container
                maxWidth={false}
                sx={{
                    height: 400,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <img src={props.src} />
                <Container className="title" maxWidth="xl">
                    <Typography variant="h1top">{props.top}</Typography>
                    <Typography variant="h1" gutterBottom>
                        {props.bottom}
                    </Typography>
                    <Typography variant="body1" gutterBottom>{props.body}</Typography>
                    {props.children}
                </Container>
            </Container>
        );
    } else {
        return (
            <>
                <Container className="title" maxWidth="lg">
                    <Typography variant="h1top">{props.top}</Typography>
                    <Typography variant="h1">{props.bottom}</Typography>
                </Container>
            </>
        );
    }
}
