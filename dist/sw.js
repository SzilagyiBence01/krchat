self.addEventListener("push", e =>{
    const data = e.data?.tex() || "No message";
    e.waitUntil(
        self.ServiceWorkerRegistration.showNotifications("Chat Notifications", {
            body: data
        })
    );
});