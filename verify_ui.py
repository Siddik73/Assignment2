from playwright.sync_api import sync_playwright
import time

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8000/Index.html")

        # Scroll to the durability section to trigger GSAP animation
        brick = page.locator("#brick-2d")
        brick.scroll_into_view_if_needed()

        # Wait for the element to become visible and animation to settle
        brick.wait_for(state="visible")
        time.sleep(2)

        # Explicitly focus the element
        brick.focus()

        # Take a screenshot
        page.screenshot(path="screenshot.png")
        browser.close()

if __name__ == "__main__":
    verify()
