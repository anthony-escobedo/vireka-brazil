import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

/** Minimal mark derived from the landing-page palette — not a new logo. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2a463b",
          color: "#f4f2ee",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          letterSpacing: "-0.04em",
        }}
      >
        V
      </div>
    ),
    {
      ...size,
    }
  );
}
