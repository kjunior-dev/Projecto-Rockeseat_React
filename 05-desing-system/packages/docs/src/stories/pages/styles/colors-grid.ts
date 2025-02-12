import {styled} from "@ignite-ui/react";

export const Grid = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
    padding: "1rem",
});

export const ColorBox = styled("div", {
    borderRadius: "8px",
    padding: "1.5rem",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    "&:hover": {
        transform: "scale(1.05)",
    },
});

export const ColorInfo = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "monospace",
    fontSize: "0.875rem",
});

export const Box = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    gap: "1rem",
});