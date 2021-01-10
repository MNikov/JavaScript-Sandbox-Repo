function solve() {
    let linkElements = document.querySelectorAll('.link-1 a');
    for (const linkEl of linkElements){
        linkEl.addEventListener('click', onLinkElementClick)
    }
    function onLinkElementClick(e){
        let visitsElement = e.currentTarget.nextElementSibling;
        let visits = Number(visitsElement.innerText.split(' ')[1]);
        visits++;
        visitsElement.innerText = `visited ${visits} times`;
    }
}