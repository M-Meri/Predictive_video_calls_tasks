const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

let i = 0;

function TabConatent(currentTab) 
{
    currentTab.textContent = i;
    i++;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    tabContents.forEach(content => {
      content.style.display = 'none';
    });
    TabConatent(document.getElementById(tabId));
    document.getElementById(tabId).style.display = 'block';
  });
});


