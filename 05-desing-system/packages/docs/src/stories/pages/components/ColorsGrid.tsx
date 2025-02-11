import { colors } from "@ignite-ui/tokens";
import { getContrast } from "polished";
import {styled} from "@ignite-ui/react";

const Grid = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
    padding: "1rem",
});

const ColorBox = styled("div", {
    borderRadius: "8px",
    padding: "1.5rem",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    "&:hover": {
        transform: "scale(1.05)",
    },
});

const ColorInfo = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "monospace",
    fontSize: "0.875rem",
});

export function ColorsGrid() {
    return (
        <Grid>
            {Object.entries(colors).map(([key, color]) => {
                return (
                    <ColorBox key={key} style={{ backgroundColor: color }}>
                        <ColorInfo
                            style={{ color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF" }}
                        >
                            <strong>{key}</strong>
                            <span>{color}</span>
                        </ColorInfo>
                    </ColorBox>
                );
            })}
        </Grid>
    );
}
