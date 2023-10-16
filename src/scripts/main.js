document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("[data-tab-button]");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(botao) {
            const tabTarget = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id = ${tabTarget}]`);

            hideTabs();

            tab.classList.add("shows-list-is-active");

            hideButtons();
            
            botao.target.classList.add("shows-tabs-button-is-active");
        });
    }

    function hideButtons() {
        const buttons = document.querySelectorAll("[data-tab-button]");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("shows-tabs-button-is-active");
        }
    }

    function hideTabs() {
        const tabsContainer = document.querySelectorAll("[data-tab-id]");

        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove("shows-list-is-active");
        }
    }
});