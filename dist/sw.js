self.addEventListener("push", e => {
    const data = e.data?.text() || "No message";
    e.waitUntil(
        self.registration.showNotification("Chat Notifications", {
            body: data
        })
    );
});