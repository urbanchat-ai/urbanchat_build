

const urbanChatServerUrl = "https://urbanchat.ai"


const linkCode = `<link rel="stylesheet" href="${urbanChatServerUrl}/integration/chatbot-integration.css">`



window.addEventListener('load', onChatbotLoad)


async function onChatbotLoad() {

    if (!urbanChatbotId) {
        alert('You have missed the script file, try copy again!')
        return
    }

    const baseCode = `
        <iframe id="urban-chat-iframe" class="hide" src="${urbanChatServerUrl}/#/chatbot-iframe/${urbanChatbotId}" title="description"></iframe>
        <button id="urban-toggle-btn">
            <img src="${urbanChatServerUrl}/bot.svg"/>
        </button>
    `

    const linkEle = document.createElement('link')
    linkEle.rel = 'stylesheet'
    linkEle.href = urbanChatServerUrl + "/integration/chatbot-integration.css"

    document.head.appendChild(linkEle)

    await sleep(1000)


    const res = await fetchData(urbanChatbotId)

    if (!res) {
        console.log('Failed to load chatbot')
        return
    }

    // check for allowed domain

    const host = location.hostname
    

    try {

        const arr = JSON.parse(res.domain)

        if (arr.length > 0) {
            let isFound = false
            for (const iterator of arr) {
                if (iterator.url.indexOf(host) != -1) {
                    isFound = true
                    break
    
                }
            }
    
    
            if (!isFound) {
                console.log('Not allowed on this domain')
                return
            }
        }
        
    } catch (error) {
        console.log("Data is not in correct format, please update it from domain section", error)
        return
    }

   

    const para = document.createElement("div");
    para.className = 'urban-chat-box'

    if (res.align == 'left') {
        para.className = 'urban-chat-box left'
    }

    para.innerHTML = baseCode;
    document.body.appendChild(para);

    const btn = document.querySelector('#urban-toggle-btn')
    const image = document.querySelector('#urban-toggle-btn img')
    btn.addEventListener('click', toggleUrbanChatbot)

    if (res.icon) image.src = res.icon

}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




async function fetchData(id) {
    // Replace this URL with the actual API endpoint
    const apiUrl = 'https://urbanchat.ai/api/fetch-chatbot?chat_model_id=' + id;

    try {
        // Make a GET request using Fetch and wait for the response
        const response = await fetch(apiUrl);

        // console.log(response)

        // Check if the response status is OK (status code 200-299)
        if (response.ok) {
            const data = await response.json()
            return {
                align: data.view[0].align_chat_bubble,
                icon: data.view[0].icon_or_popup,
                domain: data.view[0].allowed_domains
            }
        } else {
            throw new Error('something went wrong')
        }

    } catch (error) {
        // Handle errors during the fetch
        console.error('Error during fetch:', error.message);
        return null
    }
}




if (window.addEventListener) {
    window.addEventListener("message", onUrbanChatMessage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onmessage", onUrbanChatMessage, false);
}

function onUrbanChatMessage(event) {
    var data = event.data;

    if (typeof (window[data.func]) == "function") {
        window[data.func].call(null, data.message);
    }
}





function toggleUrbanChatbot() {
    const iframe = document.getElementById("urban-chat-iframe")
    iframe.classList.toggle('hide')
    const btn = document.querySelector('#urban-toggle-btn')
    btn.classList.toggle("hide-chat")

}