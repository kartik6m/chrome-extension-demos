$(()=>{

    chrome.storage.sync.get('limit',(budget)=>{
        $('#limit').val(budget.limit);
    });

    $('#saveLimit').click(()=>{
        var limit = $('#limit').val();
        if (limit){
            chrome.storage.sync.set({'limit': limit},()=>{
                close();
            });
        }
    });

    $('#resetTotal').click(()=>{
        chrome.storage.sync.set({'total': 0}, ()=>{
          
            var notifOptions = {
                type: "basic",
                iconUrl: "icon48.png",
                title: "Resetting Total",
                message: "Total has been reset to 0."
            };
           
            chrome.notifications.create('resetNotif', notifOptions);
           
        });
    });
});