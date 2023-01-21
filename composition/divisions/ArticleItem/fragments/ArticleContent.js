import * as React from 'react';
import { 
    Box, Button, Typography, Avatar, Stack,
    Divider, Link, Tooltip, TableContainer,
    Paper, Table, TableHead, TableRow,
    TableCell, TableBody
} from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import FunctionsIcon from '@mui/icons-material/Functions';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotesIcon from '@mui/icons-material/Notes';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CircleIcon from '@mui/icons-material/Circle';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Carousel from './Carousel';

import Image from 'next/image';

import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), {
    ssr: false
});



import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import { tomorrowNight, nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('cpp', cpp);


var Latex = require("react-latex");


const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className } } />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#fff',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: 10,
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));


export default function () {
    const [TableShowed, setTableShowed] = React.useState(false);
    return (
        <>
                <Typography textAlign="center" gutterBottom sx={{ }} variant="h4" fontWeight={700}>Multi-step equations review</Typography>
                <Box sx={{ mt: 2 }}>
                    <Divider />
                    <Typography sx={{ pt: 3, pb: 3, pr: 8, pl: 8 }} textAlign="center" fontStyle="italic">A mixture of explanations, examples, and practice problems to have you evaluating expressions with one variable in no time!</Typography>
                    <Divider  />
                </Box>
                <Box sx={{ pt: 3, pb: 3, pr: 5, pl: 5 }}>
                    <Box sx={{ pt: 2, pb: 5 }}>
                        <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                        <Typography variant="subtitle1" fontSize="14px">This <span style={{ textDecoration: "underline" }}>quickstart</span> guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> programmatic animations.</Typography>
                    </Box>
                    <Box sx={{ pt: 2, pb: 5, pr: 24 }}>
                        <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                        <Typography fontSize="11px" fontWeight={600} sx={{ mb: 2, textTransform: "uppercase", color: "#939393", letterSpacing: .5 }}>Tutorial from Aleksandrov Ruslan</Typography>
                        <Typography variant="subtitle1" fontSize="14px">This <span style={{ textDecoration: "underline" }}>quickstart</span> guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> programmatic animations.</Typography>
                    </Box>
                    <Box sx={{ pt: 2, pb: 5, pr: 8, pl: 8 }}>
                        <Typography textAlign="center" sx={{ mb: 2 }} gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                        <Divider sx={{ borderStyle: "dashed" }} />
                        <Typography textAlign="center" sx={{ mt: 1 }} variant="subtitle1" fontSize="14px">This <span style={{ textDecoration: "underline" }}>quickstart</span> guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> programmatic animations.</Typography>
                    </Box>
                    <Box sx={{ pt: 2, pb: 5, display: "flex", flexDirection: "column" }}>
                        <Typography textAlign="right" gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                        <Typography textAlign="right" variant="subtitle1" fontSize="14px">This <span style={{ textDecoration: "underline" }}>quickstart</span> guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> programmatic animations.</Typography>
                    </Box>
                    <Box sx={{ pt: 2, pb: 5, display: "flex", justifyContent: "center", gap: "40px" }}>
                        <Typography textAlign="right" variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                        <Typography textAlign="justify" variant="subtitle1" fontSize="14px">This <span style={{ textDecoration: "underline" }}>quickstart</span> guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> programmatic animations.</Typography>
                    </Box>
                    <Stack sx={{ pt: 2, pb: 5 }} spacing={3}>
                        <Box sx={{ pt: 2, display: "flex", gap: "20px" }}>
                            <Typography textAlign="left" variant="h2" fontWeight={700}>1</Typography>
                            <Box sx={{ pt: 1 }}>
                                <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                <Typography textAlign="justify" variant="subtitle1" fontSize="14px" paddingLeft={0}>This <span style={{ backgroundColor: "#ffffff", borderRadius: "0.2em", padding: "0.1em 0.2em", color: "#ad1457", fontStyle: "italic" }}>quickstart</span> guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> programmatic animations.This <span style={{ textDecoration: "underline", textDecorationColor: "#7c7c7c" }}>quickstart</span> guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> <span style={{ backgroundColor: "#e7e7e7", borderRadius: "0.2em", padding: "0.1em 0.2em", textTransform: "lowercase" }}>programmatic</span> animations.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ pt: 4, display: "flex", gap: "20px", alignItems: "center" }}>
                            <Typography textAlign="right" variant="h2" sx={{ writingMode: "vertical-lr", rotate: "180deg" }} fontWeight={700}>HOW?</Typography>
                            <Box sx={{ pt: 1 }}>
                                <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                <Typography textAlign="justify" variant="subtitle1" fontSize="14px">This <span style={{ textDecoration: "underline" }}>quickstart</span> guide will <Latex>{`$\\int{1_x + 2^ 2}$`}</Latex> lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project <span style={{ paddingLeft: "15px", paddingRight: "15px" }}></span> using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> programmatic animations.This quickstart guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using <a href="https://a.com">Manim</a>: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> <span style={{ backgroundColor: "#ffffff", borderRadius: "0.2em", padding: "0.1em 0.2em" }}>programmatic</span> animations.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ pt: 4, display: "flex", gap: "30px", alignItems: "center" }}>
                            <Typography textAlign="right" variant="h2" sx={{ writingMode: "vertical-lr", textOrientation: "upright", letterSpacing: -8 }} fontWeight={700}>HOW</Typography>
                            <Box sx={{ pt: 1 }}>
                                <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                <Typography textAlign="justify" variant="subtitle1" fontSize="14px">This <span style={{ textDecoration: "underline" }}>quickstart</span> guide will <Latex>{`$\\int{1_x + 2^ 2}$`}</Latex> lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project <span style={{ paddingLeft: "15px", paddingRight: "15px" }}></span> using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> programmatic animations.This quickstart guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using <a href="https://a.com">Manim</a>: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> <span style={{ backgroundColor: "#ffffff", borderRadius: "0.2em", padding: "0.1em 0.2em" }}>programmatic</span> animations.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ pt: 4, display: "flex", gap: "30px" }}>
                            <Typography textAlign="right" variant="h2" fontWeight={700}>HOW<br/>TO</Typography>
                            <Box sx={{ pt: 1 }}>
                                <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                <Typography textAlign="justify" variant="subtitle1" fontSize="14px">This <span style={{ textDecoration: "underline" }}>quickstart</span> guide will <Latex>{`$\\int{1_x + 2^ 2}$`}</Latex> lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project <span style={{ paddingLeft: "15px", paddingRight: "15px" }}></span> using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> programmatic animations.This quickstart guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using <a href="https://a.com">Manim</a>: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> <span style={{ backgroundColor: "#ffffff", borderRadius: "0.2em", padding: "0.1em 0.2em" }}>programmatic</span> animations.</Typography>
                                <br/><Divider /><br/><Typography textAlign="right" variant="subtitle2">Notice how the number 3 is right next to the variable x</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#ad1457", p: 3, borderRadius: 2, transition: ".1s" }}>
                              <Typography fontStyle="italic" gutterBottom sx={{ color: "#f4f4f4" }} variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                              <Typography fontStyle="italic" variant="subtitle1" fontSize="14px" sx={{ color: "#f4f4f4" }}>This quickstart guide will lead you <span style={{  }}>through</span> creating a sample project using Manim: an animation engine for precise programmatic animations.</Typography>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 0, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#5c6bc0", p: 2, borderRadius: 2, transition: ".1s" }}>
                              <Typography fontStyle="italic" variant="subtitle1" fontSize="14px" sx={{ color: "#f4f4f4" }}>This quickstart using Manim: an animation engine for precise programmatic animations.</Typography>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 0, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#546e7a", p: 2, borderRadius: 2, transition: ".1s" }}>
                              <Typography fontStyle="italic" variant="subtitle1" fontSize="14px" sx={{ color: "#f4f4f4" }}>This quickstart using Manim: an animation engine for precise programmatic animations.</Typography>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 0, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#d4e157", p: 2, borderRadius: 2, transition: ".1s" }}>
                              <Typography fontWeight={700} fontSize="16px" sx={{ pl: 0.5 }}>Here we go then!</Typography>
                              <Typography sx={{ p: 1, pl: 1.5, borderRadius: 1.5, backgroundColor: "#c8d335", mt: 1.2 }} fontStyle="italic" variant="subtitle1" fontSize="14px">This quickstart using Manim: an animation engine for precise programmatic animations.</Typography>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 0, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#cfd8dc", p: 2, borderRadius: 2, transition: ".1s" }}>
                              <Typography fontStyle="italic" variant="subtitle1" fontSize="14px">This quickstart using Manim: an <span style={{ color: "#37474f", fontWeight: "700" }}>animation</span> engine for precise programmatic animations.</Typography>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 0, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#e0e0e0", p: 2, borderRadius: 2, transition: ".1s" }}>
                              <Typography fontStyle="italic" variant="subtitle1" fontSize="14px">This quickstart using Manim: an <span style={{ color: "#424242", fontWeight: "700" }}>animation</span> engine for precise programmatic animations.</Typography>
                            </Box>  
                        </Box>
                        <Stack sx={{ pt: 2, pb: 1 }} direction="row" spacing={5}>
                            <Box sx={{ width: "fit-content", backgroundColor: "#f4f4f4", p: 3, pb: 2, borderRadius: 2, transition: ".1s", border: "1px solid #455a64", boxShadow: "5px 5px 1px 1px #455a64 !important", "&:hover": {boxShadow: "9px 9px 1px 1px #455a64 !important", backgroundColor: "#eceff1"} }}>
                              <Typography gutterBottom sx={{ color: "#78909c" }} variant="subtitle2">Multi-step integral formula</Typography>
                              <Typography fontStyle="italic" gutterBottom sx={{ color: "#263238" }} variant="h4" fontWeight={700}><Latex>{`$ \\int udv = uv - \\int vdu $`}</Latex></Typography>
                            </Box>
                            <HtmlTooltip
                                  title={
                                    <React.Fragment>
                                      <Typography variant="subtitle1" fontWeight={600}>Multi-step integral formula</Typography>
                                      <Typography variant="body2" fontWeight={400}>In calculus, and more generally in mathematical analysis, integration by parts or partial integration is a process that finds the integral of a product of functions in terms of the integral of the product of their derivative and antiderivative.</Typography>
                                    </React.Fragment>
                                  }
                                  placement="bottom-end"
                                >
                                  <Box sx={{ width: "fit-content", backgroundColor: "#f4f4f4", p: 3, pb: 2, borderRadius: 2, transition: ".1s", border: "1px solid #7b1fa2", boxShadow: "5px 5px 1px 1px #7b1fa2 !important", "&:hover": {boxShadow: "9px 9px 1px 1px #7b1fa2 !important", backgroundColor: "#f3e5f5"} }}>
                                    <Typography gutterBottom sx={{ color: "#78909c" }} variant="subtitle2">Multi-step integral formula</Typography>
                                    <Typography fontStyle="italic" gutterBottom sx={{ color: "#263238" }} variant="h4" fontWeight={700}><Latex>{`$ \\int udv = uv - \\int vdu $`}</Latex></Typography>
                                  </Box>
                                </HtmlTooltip>
                        </Stack>
                        <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#f4f4f4", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #9c27b0" }}>
                                <Box sx={{ backgroundColor: "#e1bee7", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.5}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#4a148c", width: 20, height: 20 }}><FunctionsIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#4a148c" }} fontWeight={600}>Formula: Multi-step integral</Typography>
                                  </Stack>
                                </Box>
                                <Box sx={{ backgroundColor: "#f3e5f5", p: 2, pr: 3, borderBottomRightRadius: 1.2 }}>
                                  <Typography gutterBottom variant="h3"><Latex>{`$ \\int udv = uv - \\int vdu $`}</Latex></Typography>
                                  <Typography variant="body1" fontWeight={400}>In calculus, and more generally in mathematical analysis, integration by parts or partial integration is a process that finds the integral of a product of functions in terms of the integral of the product of their derivative and antiderivative.</Typography>
                                  <br/><Divider /><br/><Typography textAlign="right" variant="subtitle2">Notice how the number 3 is right next to the variable x</Typography>
                                </Box>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#eceff1", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #546e7a", pb: 2 }}>
                                <Box sx={{ backgroundColor: "#cfd8dc", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.5}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#263238", width: 20, height: 20 }}><FunctionsIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#263238" }} fontWeight={600}>Formula: Multi-step integral</Typography>
                                  </Stack>
                                </Box>
                                <Box sx={{ display: "flex", backgroundColor: "#eceff1" }}>
                                  <Box sx={{ p: 2, pr: 3, borderBottomRightRadius: 1.2, flex: 1 }}>
                                    <Typography gutterBottom variant="h4"><Latex>{`$ \\int udv = uv - \\int vdu $`}</Latex></Typography>
                                    <Typography variant="body1" fontWeight={400} sx={{ mt: 2 }}>In calculus, and more generally in mathematical analysis, integration by parts or partial integration is a process that finds the integral of a product of functions in terms of the integral of the product of their derivative and antiderivative.</Typography>
                                  </Box>
                                  <Divider flexItem orientation='vertical' />
                                  <Box sx={{ p: 2, pr: 3, borderBottomRightRadius: 1.2, flex: 1 }}>
                                    <Typography gutterBottom variant="h4"><Latex>{`$ \\int cos(x) = sin(x)dx $`}</Latex></Typography>
                                    <Typography variant="body1" fontWeight={400} sx={{ mt: 2 }}>Integration can be considered the reverse process of differentiation or called Inverse Differentiation. Integration is the process of finding a function with its derivative.</Typography>
                                  </Box>
                                </Box>
                                <Divider /><br/><Typography textAlign="right" variant="subtitle2" sx={{ pr: 2 }}>Notice how the number 3 is right next to the variable x</Typography>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 0, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#cadbe7", p: 2, borderRadius: 2, transition: ".1s" }}>
                              <FormatQuoteIcon sx={{ fontSize: "40px", color: "#37474f" }} />
                              <Typography gutterBottom fontStyle="italic" variant="subtitle1" fontWeight={500} fontSize="15px" sx={{ color: "#263238", pr: 10, pl: 2 }}>What your potential employer wants to know about is your thinking process. I soon found out that was true!</Typography>
                              <Typography textAlign="right" fontWeight={600} variant="h6" sx={{ pr: 1 }}>Hengky Stephano</Typography>
                              <Typography textAlign="right" fontWeight={600} variant="subtitle1" sx={{ pr: 1, color: "#546e7a" }}>UX Consultant, Optimum Solutions Ltd.</Typography>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#f4f4f4", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #7cb342" }}>
                                <Box sx={{ backgroundColor: "#c5e1a5", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.5}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#33691e", width: 20, height: 20 }}><LightbulbIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#33691e" }} fontWeight={600}>Tip</Typography>
                                  </Stack>
                                </Box>
                                <Box sx={{ backgroundColor: "#e6f3d8", p: 2, pr: 3, borderBottomRightRadius: 1.2 }}>
                                  <Typography variant="body1" fontSize="13px" fontWeight={500} sx={{ color: "#323232" }}>In calculus, and more generally in mathematical analysis, integration by parts or partial integration is a process that finds the integral of a product of functions in terms of the integral of the product of their derivative and antiderivative.</Typography>
                                </Box>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#f4f4f4", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #00bcd4" }}>
                                <Box sx={{ backgroundColor: "#b2ebf2", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.5}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#006064", width: 20, height: 20 }}><NotesIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#006064" }} fontWeight={600}>Note</Typography>
                                  </Stack>
                                </Box>
                                <Box sx={{ backgroundColor: "#e0f7fa", p: 2, pr: 3, borderBottomRightRadius: 1.2 }}>
                                  <Typography variant="body1" fontSize="13px" fontWeight={500} sx={{ color: "#323232" }}>In calculus, and more generally in mathematical analysis, integration by parts or partial integration is a process that finds the integral of a product of functions in terms of the integral of the product of their derivative and antiderivative.</Typography>
                                </Box>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 0, pb: 1  }}>
                            <Box sx={{ p: 2, backgroundColor: "#1d1f21", borderRadius: 3, transition: ".1s", "& *": {fontFamily: "monospace", fontSize: "14px"} }}>
                              <SyntaxHighlighter language="cpp" style={tomorrowNight}>
{`// C++ Programming Example No.3

#include<iostream>
using namespace std;
int main()
{
    int num;
    cout<<"Gues a Number: ";
    cin>>num;
    if(num>10 && num<100)
        cout<<"\nWhat a True Guess!";
    else
        cout<<"\nOpps!";
    cout<<endl;
    return 0;
}`}
                              </SyntaxHighlighter>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#f4f4f4", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #009688" }}>
                                <Box sx={{ backgroundColor: "#b2dfdb", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.8}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#004d40", width: 20, height: 20 }}><DataObjectIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#004d40" }} fontWeight={600}>Example (Header, Visual, Description)</Typography>
                                  </Stack>
                                </Box>
                                <Box sx={{ height: "361px", backgroundColor: "#000000" }}>
                                  <Image src="/images/chart.png" width={1200} height={651} style={{ width: "100%", height: "100%" }} />
                                </Box>
                                <Box sx={{ backgroundColor: "#e0f2f1", p: 2, pr: 3, borderBottomRightRadius: 1.2 }}>
                                  <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                  <Typography variant="subtitle1" fontSize="14px">This <span style={{ textDecoration: "underline" }}>quickstart</span> guide will lead you through <span style={{ fontStyle: "italic"  }}>creating</span> a sample project using Manim: an animation engine for <span style={{ fontWeight: 700 }}>precise</span> programmatic animations.</Typography>
                                </Box>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#f4f4f4", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #673ab7" }}>
                                <Box sx={{ backgroundColor: "#d1c4e9", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.8}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#311b92", width: 20, height: 20 }}><DataObjectIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#311b92" }} fontWeight={600}>Example (Header, Visual, Description)</Typography>
                                  </Stack>
                                </Box>
                                <Box sx={{ height: "400px" }}>
                                  <iframe style={{ width: "100%", height: "100%", fontSize: "9px !important" }} src="https://www.youtube.com/embed/_9NQvpuc3P8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </Box>
                                <Box sx={{ backgroundColor: "#ede7f6", p: 2, pr: 3, borderBottomRightRadius: 1.2 }}>
                                  <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                  <Typography variant="subtitle1" fontSize="13px">This quickstart guide will lead you through creating a sample project using Manim: an animation engine for precise programmatic animations.</Typography>
                                </Box>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#f4f4f4", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #009688" }}>
                                <Box sx={{ backgroundColor: "#b2dfdb", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.8}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#004d40", width: 20, height: 20 }}><DataObjectIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#004d40" }} fontWeight={600}>Example (Header, Visual, Description)</Typography>
                                  </Stack>
                                </Box>
                                <Box sx={{ height: "361px", backgroundColor: "#000000" }}>
                                  <Image src="/images/manim.jpg" width={1280} height={720} style={{ width: "100%", height: "100%" }} />
                                </Box>
                                <Divider light />
                                <Box sx={{ backgroundColor: "#2e3440", p: 1.2, pt: 2.5, pb: 2.5, "& *": {fontFamily: "monospace", fontSize: "14px"} }}>
                                  <SyntaxHighlighter language="python" style={nord}>
{`from manim import *

class ImplicitFunctionExample(Scene):
    def construct(self):
        graph = ImplicitFunction(
            lambda x, y: x * y ** 2 - x ** 2 * y - 2,
            color=YELLOW
        )
        self.add(NumberPlane(), graph)`}
                                  </SyntaxHighlighter>
                                </Box>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#f4f4f4", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #673ab7" }}>
                                <Box sx={{ backgroundColor: "#d1c4e9", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.8}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#311b92", width: 20, height: 20 }}><DataObjectIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#311b92" }} fontWeight={600}>Example (Header, Visual, Description)</Typography>
                                  </Stack>
                                </Box>
                                <Box sx={{ p: 2.2, pt: 3, pb: 3, display: "flex", justifyContent: "center" }}>
                                      <Line 
                                        options={{
                                          responsive: true,
                                          plugins: {
                                            legend: {
                                              display: false
                                            },
                                            title: {
                                              display: false
                                            },
                                        }}}

                                        data={{
                                          labels: ['January', 'Februaryyy', 'March', 'April', 'May', 'June', 'July'],
                                          datasets: [
                                            {
                                              fill: true,
                                              label: 'Dataset 2',
                                              data: [314, 569, 345, 932, 476, 121, 320],
                                              borderColor: 'rgb(53, 162, 235)',
                                              backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                            },
                                          ]
                                        }}
                                      />
                                </Box>
                                <Box sx={{ backgroundColor: "#ede7f6", p: 2, pr: 3, borderBottomRightRadius: 1.2 }}>
                                  <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                  <Typography variant="subtitle1" fontSize="13px">This quickstart guide will lead you through creating a sample project using Manim: an animation engine for precise programmatic animations.</Typography>
                                </Box>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#f4f4f4", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #673ab7" }}>
                                <Box sx={{ backgroundColor: "#d1c4e9", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.8}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#311b92", width: 20, height: 20 }}><DataObjectIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#311b92" }} fontWeight={600}>Example (Header, Visual, Description)</Typography>
                                  </Stack>
                                </Box>
                                <Box sx={{ height: "fit-content" }}>
                                  <Plot
                                    data={[
                                      {
                                        z: [
                                          [8.83,8.89,8.81,8.87,8.9,8.87],
                                          [8.89,8.94,8.85,8.94,8.96,8.92],
                                          [8.84,8.9,8.82,8.92,8.93,8.91],
                                          [8.79,8.85,8.79,8.9,8.94,8.92],
                                          [8.79,8.88,8.81,8.9,8.95,8.92],
                                          [8.8,8.82,8.78,8.91,8.94,8.92],
                                          [8.75,12.78,8.77,8.91,8.95,8.92],
                                          [8.8,8.8,8.77,8.91,8.95,8.94],
                                          [8.74,8.81,8.76,8.93,8.98,8.99],
                                          [8.89,8.99,8.92,9.1,9.13,9.11],
                                          [8.97,8.97,8.91,9.09,9.11,9.11],
                                          [9.04,9.08,9.05,9.25,9.28,9.27],
                                          [9,9.01,9,9.2,9.23,9.2],
                                          [8.99,8.99,8.98,9.18,9.2,9.19],
                                          [8.93,8.97,8.97,9.18,9.2,9.18]
                                      ],
                                        type: 'surface'
                                      }
                                    ]}
                                    layout={{ width: 656, height: 400, showlegend: false, margin: {l: 0, r: 18, b: 0, t: 0} }}
                                    config={{ displayModeBar: false }}
                                  />
                                </Box>
                                <Box sx={{ backgroundColor: "#ede7f6", p: 2, pr: 3, borderBottomRightRadius: 1.2 }}>
                                  <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                  <Typography variant="subtitle1" fontSize="13px">This quickstart guide will lead you through creating a sample project using Manim: an animation engine for precise programmatic animations.</Typography>
                                </Box>
                            </Box>  
                        </Box>
                        {/* <Box sx={{ pt: 2, pb: 1 }}>
                            <Box sx={{ backgroundColor: "#f4f4f4", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #673ab7" }}>
                                <Box sx={{ backgroundColor: "#d1c4e9", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.8}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#311b92", width: 20, height: 20 }}><DataObjectIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#311b92" }} fontWeight={600}>Example (Header, Visual, Description)</Typography>
                                  </Stack>
                                </Box>
                                <Box sx={{ height: "400px" }}>
                                    <Manim />
                                </Box>
                                <Box sx={{ backgroundColor: "#ede7f6", p: 2, pr: 3, borderBottomRightRadius: 1.2 }}>
                                  <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                  <Typography variant="subtitle1" fontSize="13px">This quickstart guide will lead you through creating a sample project using Manim: an animation engine for precise programmatic animations.</Typography>
                                </Box>
                            </Box>  
                        </Box> */}
                        <Box sx={{ pt: 2, pb: 1 }}>
                             <Typography variant="h6" fontWeight={600}>PARAMETERS</Typography>
                             <ul style={{ paddingLeft: "30px", lineHeight: 3 }}>
                                    <li><Typography><span style={{ fontWeight: 600 }}>background_image</span> - The path to an image that should be the background image</Typography></li>
                                    <li><Typography><span style={{ fontWeight: 600 }}>background_image</span> - The path to an image that should be the background image</Typography></li>
                                    <li><Typography><span style={{ fontWeight: 600 }}>zor configurationn</span> - The path to an image that should be the background image</Typography></li>
                                    <li><Typography><span style={{ fontWeight: 600 }}>background_image</span> - The path to an image that should be the background image</Typography></li>
                                    <li><Typography><span style={{ fontWeight: 600 }}>background_image</span> - The path to an image that should be the background image</Typography></li>
                             </ul>
                        </Box>
                        <Box sx={{ pt: 2, pb: 1, display: (TableShowed ? "flex" : "none") }}>
                          <Divider sx={{ mr: 2, backgroundColor: "#d6d6d6", width: "3px", border: "none" }} flexItem orientation="vertical" />
                          <Box>
                          <Typography variant="h6" fontWeight={600}>PARAMETERS</Typography>
                          <Box>
                             <TableContainer component={Paper} sx={{ mt: 2 }}>
                              <Table sx={{ minWidth: 600, p: 2 }} aria-label="simple table">
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow
                                        key={2}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          Frozen Yogurt
                                        </TableCell>
                                        <TableCell align="right">159</TableCell>
                                        <TableCell align="right">6</TableCell>
                                        <TableCell align="right">24</TableCell>
                                        <TableCell align="right">4</TableCell>
                                  </TableRow>
                                  <TableRow
                                        key={3}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          Ice cream sandwich
                                        </TableCell>
                                        <TableCell align="right">237</TableCell>
                                        <TableCell align="right">9</TableCell>
                                        <TableCell align="right">37</TableCell>
                                        <TableCell align="right">4.3</TableCell>
                                  </TableRow>
                                  <TableRow
                                        key={4}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          Gingerbread
                                        </TableCell>
                                        <TableCell align="right">262</TableCell>
                                        <TableCell align="right">16</TableCell>
                                        <TableCell align="right">24</TableCell>
                                        <TableCell align="right">6</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                            </Box>
                            </Box>
                        </Box>
                        <Box sx={{ pt: 2, pb: 1 }}>
                          <Button variant="outlined" onClick={() => {setTableShowed((TableShowed ? false : true))}} color="secondary" sx={{ backgroundColor: "#ad1457", color: "#fff", "&:hover": {color: "#ad1457"} }}>Show/Hide a table</Button>
                        </Box>
                        <Box sx={{ pt: 2, pb: 5 }}>
                            <Box sx={{ backgroundColor: "#f4f4f4", borderRadius: 1.2, transition: ".1s", borderLeft: "5px solid #673ab7" }}>
                                <Box sx={{ backgroundColor: "#d1c4e9", borderTopRightRadius: 1.2, pt: 1, pb: 1, pl: 1.5 }}>
                                  <Stack direction="row" alignItems="center" spacing={0.8}>
                                      <Avatar variant="rounded" sx={{ backgroundColor: "transparent", color: "#311b92", width: 20, height: 20 }}><DataObjectIcon sx={{ fontSize: "19px" }} /></Avatar>
                                      <Typography sx={{ color: "#311b92" }} fontWeight={600}>Example (Header, Visual, Description)</Typography>
                                  </Stack>
                                </Box>
                                <Box>
                                  <Carousel blockwidth="100%" width={1920} height={1080} filename="stadium" centerMode={true} axis="horizontal" />
                                </Box>
                                <Box sx={{ backgroundColor: "#ede7f6", p: 2, pr: 3, borderBottomRightRadius: 1.2 }}>
                                  <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                  <Typography variant="subtitle1" fontSize="13px">This quickstart guide will lead you through creating a sample project using Manim: an animation engine for precise programmatic animations.</Typography>
                                </Box>
                            </Box>  
                        </Box>
                        <Box sx={{ pt: 2, pb: 5 }}>
                          <Box sx={{ pl: 2, pt: 2, pr: 2, backgroundColor: "#eeeeee", borderTop: "1px solid #808080", borderBottom: "1px solid #808080" }}>
                            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                              <Typography sx={{ color: "#4a4a4a", letterSpacing: 0.5 }}>Problem 1</Typography>
                              <Stack direction="row" spacing={0.5}>
                                <CircleIcon fontSize="16px" sx={{ color: "#8bc34a" }} />
                                <CircleIcon fontSize="16px" sx={{ color: "#aaaaaa" }} />
                                <CircleIcon fontSize="16px" sx={{ color: "#aaaaaa" }} />
                                <CircleIcon fontSize="16px" sx={{ color: "#aaaaaa" }} />
                              </Stack>
                            </Stack>
                            <Box sx={{ pl: 2, pt: 2, pb: 3 }}>
                              <Typography variant="h6">Solve for <span style={{ fontStyle: "italic" }}>c</span></Typography>
                              <Typography variant="subtitle2" fontStyle="italic">Give an exact answer</Typography>
                              <br />
                              <Typography fontSize="15px" sx={{ mt: 1.5, mb: 2 }}><Latex>{`$4(3 + c) + c = c + 4$`}</Latex></Typography>
                              <Stack direction="row" spacing={1} sx={{ display: "flex", alignItems: "center" }}><Typography variant="h6">c = </Typography><input type="number" style={{ width: "100px", height: "16px", marginTop: "5px" }} /></Stack>
                              <Button sx={{ backgroundColor: "#e8eaf6", fontWeight: 700, color: "#283593", mt: 3, border: "1px solid #283593" }}>CHECK</Button>
                              <Typography sx={{ mt: 2, fontSize: "13px", fontWeight: 500 }}><Link sx={{ color: "#8bc34a" }}>Use a hint</Link></Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={{ pt: 2, pb: 5}}>
                          <Box sx={{ display: "flex", backgroundColor: "#f6f6f6", justifyContent: "center", transition: ".1s", borderRadius: 3, overflow: "hidden", border: "1px dashed #7b1fa2", boxShadow: "5px 5px 1px 1px #7b1fa2 !important", "&:hover": {boxShadow: "9px 9px 1px 1px #7b1fa2 !important", backgroundColor: "#f3e5f5"} }}>
                            <Carousel blockWidth="200px" filename="2713203" width={1080} height={1920} centerMode={false} axis="horizontal" />
                            <Box sx={{ p: 3 }}>
                                <Typography gutterBottom variant="h5" fontWeight={700}>How to evaluate an expression with one variable</Typography>
                                <Typography fontSize="11px" fontWeight={600} sx={{ mb: 2, textTransform: "uppercase", color: "#939393", letterSpacing: .5 }}>Tutorial from Aleksandrov Ruslan</Typography>
                                <Typography textAlign="justify" variant="subtitle1" fontSize="14px">This quickstart guide will <Latex>{`$\\int{1_x + 2^ 2}$`}</Latex> lead you through creating a sample project using Manim: an animation engine for precise programmatic animations.This quickstart guide will lead you through creating a sample project using Manim: an animation engine for precise programmatic animations.</Typography>
                            </Box>
                          </Box>
                        </Box>
                    </Stack>
                </Box>
        </>
    );
}