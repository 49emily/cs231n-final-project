import { style } from "@vanilla-extract/css";

export const app = style({
  textAlign: "center",
  padding: "2%",
});

export const nameContainer = style({
  display: "flex",
  flexDirection: "row",
});

export const nameDiv = style({
  width: "50%",
});

export const contentStyle = style({
  textAlign: "center",
  background: "lightgray",
  //   height: "60vh",
  padding: "0em 1em 3em 1em",
});

export const abstract = style({
  textAlign: "center",
  //   height: "60vh",
  //   padding: "0em 1em 3em 1em",
  margin: "0 auto",
  width: "50%",

  "@media": {
    "(max-width: 800px)": {
      width: "90%",
    },
  },
});

export const carousel = style({
  margin: "5%",
});

export const carouselContentFlex = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  "@media": {
    "(max-width: 800px)": {
      flexDirection: "column",
    },
  },
});

export const italic = style({
  fontStyle: "italic",
});
