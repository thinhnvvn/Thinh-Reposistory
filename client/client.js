
// const publicVapidKey = "BOd2EQ8LTe3KAgMX9lWwTlHTRzv1Iantw50Mw6pUnsNr3pcxl8iglUs-YlQEQLo4UbJk9oyXs_BxgyAe0TCqKME";
const publicVapidKey = "BCjyovdmE2Req7Z8MpwzzmJgWdCit5TPejJnBloIhfm8X0GAUXLcU5fnv8FILH3QaO2P5jhauuy3GtTkU7tKut8"

if('serviceWorker' in navigator) {
    registerServiceWorker().catch(console.log)
}

async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey,
    });

    await fetch("/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json",
        }
    })
}