console.log("Service worker loaded...");

self.addEventListener('push', function(e) {
    console.log('[Service Worker]  Push Received.')   //thinh
    const data = e.data.json();
    console.log('Push data: ', data.body)             //thinh
    self.registration.showNotification(
        data.title,
        {
            body: data.body,
        }
    );
})

///thinh
self.addEventListener('notificationclick', (event) => {
    const clickedNotification = event.notification;
    clickedNotification.close();
  
    // Do something as the result of the notification click
    // const promiseChain = doSomething();
    console.log("Notification clicked.")
    event.waitUntil(promiseChain);
  });