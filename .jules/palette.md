## 2024-05-24 - Semantic Interactive Elements
**Learning:** The app's custom mini-game components (like the durability test) use non-semantic `<div>` elements for core interactions, causing them to lack native keyboard navigability and screen reader support.
**Action:** Always convert custom interactive components to semantic elements (like `<button>`) and apply structural CSS resets to preserve visual layout while gaining native accessibility features.
