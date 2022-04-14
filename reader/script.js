chrome.commands.onCommand.addListener((command, tab) => {
    runCommand(command, tab)
});

//
// toggles between normal and reader view
//
function readerView(){
    myStyles = {
        'margin': 'auto',
        'font-family': 'sans-serif',
        'max-width': '632px',
        'padding': '64px 16px',
    }
    const body = document.querySelector('body');

    //
    // Check if the feature already exists... so we can unapply
    //

    var unApply = body.getAttribute('hasReaderView') === '1';
    for (const property in myStyles){
        body.style[property] = unApply ? '' : myStyles[property]
    }

    //
    // toggle value of hasReaderView attribute
    //
    
    if (unApply){
        body.setAttribute('hasReaderView', '0')
    }else{
        body.setAttribute('hasReaderView', '1')
    }
}

function lighten(){
    myStyles = {
        'background': 'white',
        'color': 'black',
    }
    const body = document.querySelector('body');

    var unApply = body.getAttribute('useReaderLight') === '1';

    for (const property in myStyles){
        body.style[property] = unApply ? '' : myStyles[property]
    }


    if (unApply){
        body.setAttribute('useReaderLight', '0')
    }else{
        body.setAttribute('useReaderLight', '1')
    }

}

function darken(){
    myStyles = {
        'background': 'black',
        'color': 'white',
    }
    const body = document.querySelector('body');

    var unApply = body.getAttribute('useReaderDark') === '1';
    for (const property in myStyles){
        body.style[property] = unApply ? '' : myStyles[property]
    }

    if (unApply){
        body.setAttribute('useReaderDark', '0')
    }else{
        body.setAttribute('useReaderDark', '1')
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
