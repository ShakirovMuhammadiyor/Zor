import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import AirplayIcon from '@mui/icons-material/Airplay';

import Link from 'next/link';

export default function () {
    return (
        <>
            <Typography fontSize="22px" fontWeight={600}>Equations with parentheses</Typography>
              <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 0.5, mb: 1.5 }}>
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Avatar variant="rounded" sx={{ backgroundColor: "inherit", color: "#4a4a4a", width: 32, height: 32 }}><AirplayIcon sx={{ fontSize: "18px" }} /></Avatar>
                      <Typography variant="subtitle2">Video Material</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 2 }}>
                      <Link href="/en/courses/profile/0"><Chip avatar={<Avatar src="/images/user.jpg" />} label="@Alek" size="small" variant="outlined" /></Link>
                      <Link href="/en/courses/profile/1"><Chip avatar={<Avatar src="/images/user.png" />} label="@Xabibchik" size="small" variant="outlined" /></Link>
                  </Stack>
              </Stack>
              <Divider flexItem light />
              <Box sx={{ mt: 3, mb: 3, width: "100%", height: "67%",  position: "relative" }}>
                <iframe style={{ width: "100%", height: "100%", position: "absolute", borderRadius: "8px" }} src="https://www.youtube-nocookie.com/embed/YG15m2VwSjA?rel=0&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0"></iframe>
              </Box>
              <Divider flexItem light />
              <Box sx={{ mt: 2 }}>
                <Typography display="inline" gutterBottom variant="h6" fontWeight={500}>Video Description: </Typography>
                <Typography display="inline" vavriant="body2">Here Alek explains one of the essential rules of Algebra - Solving linear equations and their role in today's world. This concept has a very momentous impact on modern mathematics</Typography>
              </Box>
        </>
    );
}