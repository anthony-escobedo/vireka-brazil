import { ImageResponse } from "next/og";

export const alt =
  "VIREKA Space Brasil — Clareza antes de decisões e da IA";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#f4f2ee",
          color: "#1c1b19",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#5a5852",
            marginBottom: 28,
          }}
        >
          VIREKA Space Brasil
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 920,
            marginBottom: 28,
          }}
        >
          Clareza antes de decisões e da IA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            lineHeight: 1.4,
            color: "#5a5852",
            maxWidth: 820,
          }}
        >
          Uma entrada brasileira para conhecer o VIREKA Space
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            width: 72,
            height: 2,
            background: "#2a463b",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
