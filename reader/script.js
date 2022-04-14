chrome.commands.onCommand.addListener((command, tab) => {
    runCommand(command, tab)
});

function readerView(){
    myStyles = {
        'margin': 'auto',
        'font-family': 'sans-serif',
        'max-width': '632px',
        'padding': '64px 16px',
    }
    const body = document.querySelector('body');
    for (const property in myStyles){
        body.style[property] = myStyles[property]
    }
}

function lighten(){
    myStyles = {
        'background': 'white',
        'color': 'black',
    }
    const body = document.querySelector('body');
    for (const property in myStyles){
        body.style[property] = myStyles[property]
    }
}

function darken(){
    myStyles = {
        'background': 'black',
        'color': 'white',
    }
    const body = document.querySelector('body');
    for (const property in myStyles){
        body.style[property] = myStyles[property]
    }
}

function runCommand(command, tab){
    if (command === 'readerView'){
        chrome.scripting.executeScript(
            {
              target: {tabId: tab.id},
              function: readerView
            },
        );
    }
    else if(command === 'darken'){
        chrome.scripting.executeScript(
            {
              target: {tabId: tab.id},
              function: darken
            },
        );
    }
    else if(command === 'lighten'){
        chrome.scripting.executeScript(
            {
              target: {tabId: tab.id},
              function: lighten
            },
        );
    }else{
        console.log('command not found??');
    }
}
