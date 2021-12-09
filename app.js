let newWindow;

document.querySelector('button').addEventListener("click", function () {
    let features = "menubar=no, scrollbars=yes, width=500, height=500, statuts=no, toolbar=no"
    newWindow = window.open('https://github.com/Lyz03/Exo-102-JS-Introduction-au-BOM', '', features)
    newWindow.resizeTo(600, 700);
    newWindow.moveBy(200, 200)
})

document.getElementById('close').addEventListener('click', function() {
    newWindow.close();
})