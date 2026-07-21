## 2026-07-21 - [CSS Animation Performance]
**Learning:** Animating `background-position` on large elements (like a full-screen gradient background) causes continuous layout and paint thrashing, severely degrading rendering performance.
**Action:** Replace `background-position` animations with GPU-accelerated `transform: translate3d(...)` on an oversized element, reducing CPU load and improving framerates.
