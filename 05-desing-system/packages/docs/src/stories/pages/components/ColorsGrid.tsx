import { colors } from "@ignite-ui/tokens";
import { getContrast } from "polished";
import {Grid, Box, ColorInfo, ColorBox} from "../styles/colors-grid.ts";

export function ColorsGrid() {
    return (
        <Grid>
            {Object.entries(colors).map(([key, color]) => {
                return (
                    <ColorBox key={key} style={{ backgroundColor: color }}>
                        <ColorInfo
                            style={{ color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF" }}
                        >
                            <Box>
                                <strong>{key}</strong>
                                <span>{color}</span>
                            </Box>
                        </ColorInfo>
                    </ColorBox>
                );
            })}
        </Grid>
    );
}
