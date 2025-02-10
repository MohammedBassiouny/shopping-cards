export default function Popup(message, bgColor = "white" ,color) {
    let existingPopup = document.getElementById("customPopup");
    if (existingPopup) {
        existingPopup.remove(); 
    }

    
    let popup = document.createElement("div");
    popup.id = "customPopup";
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.background = "rgba(0, 0, 0, 0.5)"; 
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.style.zIndex = "1000"; 

    
    let popupContent = document.createElement("div");
    popupContent.style.background = bgColor;
    popupContent.style.padding = "20px";
    popupContent.style.borderRadius = "10px";
    popupContent.style.textAlign = "center";
    popupContent.style.fontSize = "18px";
    popupContent.style.fontWeight = "bold";
    popupContent.style.color = color; 
    popupContent.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    popupContent.style.minWidth = "250px";


    let text = document.createElement("p");
    text.textContent = message;


    let closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.style.marginTop = "10px";
    closeButton.style.padding = "8px 15px";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    closeButton.style.background = "#333";
    closeButton.style.color = "#fff";
    closeButton.onclick = function () {
        popup.remove(); 
    };


    popupContent.appendChild(text);
    popupContent.appendChild(closeButton);
    popup.appendChild(popupContent);

    document.body.appendChild(popup);


    setTimeout(() => {
        popup.remove();
    }, 2000 );
}
