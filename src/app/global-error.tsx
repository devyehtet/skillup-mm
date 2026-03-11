"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="my">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "2rem",
            background:
              "linear-gradient(180deg, #f6fff9 0%, #effbf6 22%, #f8fffb 100%)",
            color: "#120f39",
            fontFamily: "var(--font-sans), var(--font-mm), ui-sans-serif, system-ui, sans-serif",
          }}
        >
          <section
            style={{
              maxWidth: "36rem",
              width: "100%",
              border: "1px solid rgba(47, 39, 139, 0.12)",
              borderRadius: "1.5rem",
              background: "rgba(255, 255, 255, 0.94)",
              padding: "2rem",
              boxShadow: "0 18px 42px rgba(27, 37, 97, 0.08)",
            }}
          >
            <p style={{ color: "#2f278b", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Something went wrong
            </p>
            <h1 style={{ marginTop: "1rem", fontSize: "2rem", lineHeight: 1.1 }}>
              The page could not load correctly.
            </h1>
            <p style={{ marginTop: "1rem", color: "#66728d", lineHeight: 1.7 }}>
              {error.message || "An unexpected application error occurred."}
            </p>
            <button
              onClick={() => reset()}
              style={{
                marginTop: "1.5rem",
                border: "1px solid rgba(33, 27, 103, 0.96)",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #2f278b 0%, #3a3298 52%, #3d95a5 100%)",
                color: "#fff",
                padding: "0.85rem 1.4rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
              type="button"
            >
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
