import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
export default function BasicChips({ dataChips }) {
  return (
    <Stack pacing={3} direction="row" useFlexGap flexWrap="wrap">
      {dataChips.map((c, index) => (
        <Chip
          key={c + index}
          variant="container"
          color="error"
          label={c}
          size="small"
          sx={{ m: 0.5 }}
        />
      ))}
    </Stack>
  );
}
