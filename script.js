function openTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');

    contents.forEach(content => content.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}