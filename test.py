import http.server
import socketserver
import threading
import time
from playwright.sync_api import sync_playwright

def serve():
    Handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("", 8080), Handler)
    httpd.serve_forever()

server_thread = threading.Thread(target=serve, daemon=True)
server_thread.start()
time.sleep(1)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8080/Index.html")
    assert page.locator("#canvas-container").is_visible(), "Canvas not visible, script failed to load."
    browser.close()
