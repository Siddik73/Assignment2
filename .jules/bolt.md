## 2026-10-20 - Prevent Unnecessary Operations on Mouse Events
**Learning:** By adding an early return pattern `if (!isDragging) return;` to the mousemove event instead of just conditionally executing the internal logic, we prevent unneeded object allocations (`previousMousePosition = { x: ..., y: ... }`) happening on every single mouse movement over the container, reducing garbage collection pressure in a 3D app. Also, only capturing the previous position on `mouseenter` if dragging avoids unneeded allocations when a user simply moves the mouse over the canvas.

**Action:** Look for high-frequency events like `mousemove` or `scroll` and apply early return logic to minimize allocations and main-thread work before any actual conditional logic block.
