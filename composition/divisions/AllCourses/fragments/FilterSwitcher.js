import { useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";

export default function FilterSwitcher () {
    const [alignment, setAlignment] = useState('left');

    return (
        <ToggleButtonGroup value={alignment} exclusive onChange={(e, newAlignment) => {setAlignment(newAlignment)}}>
            <ToggleButton value="left"><Typography fontSize='.6rem' fontWeight={900}>Recency</Typography></ToggleButton>
            <ToggleButton value="center"><Typography fontSize='.6rem' fontWeight={900}>Alphabetically</Typography></ToggleButton>
        </ToggleButtonGroup>
    );
}