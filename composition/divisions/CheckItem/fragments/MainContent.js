import { useState, Fragment } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import AirplayIcon from '@mui/icons-material/Airplay';

import LLink from '@mui/material/Link';

import Link from 'next/link';
import Image from 'next/image';

var Latex = require("react-latex");

function Question () {
    const [firstStage, setFirstStage] = useState(false);
    const [hint, setHint] = useState(0);

    return (
        <Fragment>
            <Divider sx={{ mb: 3 }} variant="middle" />
            <Box sx={{ flexGrow: 1, pl: 12, pr: 12}}>
                <Typography variant="h6">Solve for <span style={{ fontStyle: "italic" }}>c</span></Typography>
                <Typography variant="subtitle2" fontStyle="italic">Give an exact answer</Typography>
                <br />
                <Typography fontSize="15px" sx={{ mt: 1.5, mb: 1.5 }}><Latex>{"$V_c = V_s(1 - 10^{-\\frac{t}{T}})$"}</Latex></Typography>
                <Stack direction="row" spacing={1} sx={{ display: "flex", alignItems: "center" }}><Typography variant="h6">c = </Typography><input type="number" style={{ width: "100px", height: "16px", marginTop: "5px" }} /></Stack>
                <br />
                <Divider sx={{ mt: 3, mb: 3 }} />
                {hint > 0 && (
                    <Box sx={{ pl: 3 }}>
                        <Stack direction="row">
                            <Typography fontWeight={700} sx={{ color: "#00897b", width: "35px" }}>1 / 3</Typography>
                            <Box sx={{ pl: 2, pb: 2, borderLeft: "3px solid #e1e1e1" }}>
                                <Typography>We need to manipulate the equation to get x by itself.</Typography>
                            </Box>
                        </Stack>
                        <Stack direction="row">
                            <Typography fontWeight={700} sx={{ color: "#00897b", width: "35px" }}>2 / 3</Typography>
                            <Box sx={{ pl: 2, pb: 2, borderLeft: "3px solid #e1e1e1" }}>
                            <Typography fontSize="14px" sx={{ color: "#4a4a4a", mb: 2.4 }}><Latex>{`$0.5(5 - 7x) = \\frac{8}{2} - (4x + 6)$`}</Latex></Typography>
                            <Typography fontSize="14px" sx={{ color: "#4a4a4a", mb: 2.4 }}><Latex>{`$0.5(5 - 7x) = 8 - (4x + 6)$`}</Latex></Typography>
                            <Typography fontSize="14px" sx={{ color: "#4a4a4a", mb: 2.4 }}><Latex>{`$2.5 - 3.5x + 4x = 2 - 4x + 4x$`}</Latex></Typography>
                            <Typography fontSize="14px" sx={{ color: "#4a4a4a", mb: 2.4 }}><Latex>{`$x = 1$`}</Latex></Typography>
                            </Box>
                        </Stack>
                        <Stack direction="row">
                            <Typography fontWeight={700} sx={{ color: "#00897b", width: "35px" }}>3 / 3</Typography>
                            <Box sx={{ pl: 2, pb: 2, borderLeft: "3px solid #e1e1e1" }}>
                                <Typography sx={{ fontWeight: 600 }}>The answer</Typography>
                                <br />
                                <Typography fontSize="14px" sx={{ color: "#4a4a4a", ml: 3 }}><Latex>{`$x = -1$`}</Latex></Typography>
                            </Box>
                        </Stack>
                    </Box>
                )}
                {firstStage ? (
                    <Fragment>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1" sx={{ color: "#808080" }}>Related content</Typography>
                            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ paddingLeft: 2, paddingRight: 2, pb: 2.5, pt: 2.5 }}>
                                <Avatar variant="rounded" sx={{ backgroundColor: "#ffffff", color: "#4a4a4a", width: 30, height: 30 }}><AirplayIcon sx={{ fontSize: "18px" }} /></Avatar>
                                <Stack>
                                    <Link href="https://google.com" sx={{ color: "#4a4a4a" }} fontSize="13px">Introduction to regression</Link>
                                    <Typography variant="body2" color="#808080">Last seen: 12 days ago</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack>
                            <Typography variant="subtitle1" sx={{ color: "#000000" }}>Still stuck?</Typography>
                            <Button onClick={() => {setHint(1); setFirstStage(false)}} sx={{ border: "1px solid #808080", backgroundColor: "#f4f4f4", color: "#1865f2", width: "200px", mt: 2 }}>Get a hint</Button>
                            <Typography sx={{ mt: 2, color: "#4a4a4a" }}>If you use a hint, this problem won't count towards your progress.</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mt: 3, mb: 3 }} />
                    </Fragment>
                ) : (
                    hint == 0 && (
                        <Typography variant="subtitle1" fontWeight={600}>Stuck? <LLink onClick={() => setFirstStage(true)} sx={{ color: "#1865f2" }}>Review related articles/videos or use a hint.</LLink></Typography>
                    )
                )}
            </Box>
        </Fragment>
    );
}

function Cover () {
    return (
        <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end", flexGrow: 1 }}>
            <Image src="/images/as.png" width={1920} height={1080} style={{ width: "100%", height: "100%" }} />
        </Box>
    );
}

export default function () {
    const [question, setQuestion] = useState(0);

    return (
        <Fragment>
            <Box sx={{ p: 3 }}>
                <Typography gutterBottom fontSize="22px" textAlign="center" fontWeight={600}>Number of solutions to equations</Typography>
                <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5}>
                      <Avatar variant="rounded" sx={{ backgroundColor: "inherit", color: "#4a4a4a", width: 32, height: 32 }}><AirplayIcon sx={{ fontSize: "16px" }} /></Avatar>
                      <Typography variant="subtitle1" fontWeight={500}>Check Material</Typography>
                </Stack>
            </Box>
            {question == 0 ? (
                <Cover />
            ) : (
                <Question />
            )}
            <Box sx={{ pt: 2, pb: 2, pr: 3, display: "flex", justifyContent: "flex-end", boxShadow: "0px -1px 0px 1px #808080 !important" }}>
                <Button color="secondary" sx={{ backgroundColor: "#ad1457", color: "#fff" }} onClick={() => {setQuestion(question + 1)}}>Next</Button>
            </Box>
        </Fragment>
    );
}