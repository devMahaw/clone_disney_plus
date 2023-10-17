document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-question]");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(button) {
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id = ${tabTarget}]`);

            hideTabs();

            tab.classList.add("shows-list-is-active");

            hideButtons();
            
            button.target.classList.add("shows-tabs-button-is-active");
        });
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", openOrCloseAnswer);
    }

    function openOrCloseAnswer(element) {
        const id = "faq-questions-item-is-open";
        const dadElement = element.target.parentNode;

        dadElement.classList.toggle(id);
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