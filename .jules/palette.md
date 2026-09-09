## 2024-09-09 - Accessible Interactive Visual Elements
**Learning:** Custom interactive visual elements (like mini-games) implemented with non-semantic tags (`div`) hide interactivity from assistive technologies and break keyboard navigation. Adding ARIA labels alone isn't enough; they need semantic interactive elements (`button`) and `aria-live` regions for dynamic updates.
**Action:** Always replace `div`-based click targets with `button` tags, reset browser default styles (`appearance: none`, `padding: 0`), add focus-visible styles, and use `aria-live` for associated dynamic text changes.
