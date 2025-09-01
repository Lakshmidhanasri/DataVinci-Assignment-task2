const selectAll = document.getElementById("selectAll");
const categoryCheckboxes = document.querySelectorAll(".category-checkbox");
const allCheckboxes = document.querySelectorAll("input[type='checkbox']");

// Select All functionality
selectAll.addEventListener("change", function() {
    allCheckboxes.forEach((cb) => {
        cb.checked = this.checked;
    });
});

// Category checkbox functionality
categoryCheckboxes.forEach((categoryCb) => {
    categoryCb.addEventListener("change", function() {
        const items = this.closest(".category").querySelectorAll(".items input");
        items.forEach((item) => {
            item.checked = this.checked;
        });
        updateSelectAll();
    });
});

// Items checkbox functionality
allCheckboxes.forEach((cb) => {
    cb.addEventListener("change", function() {
        if (!this.classList.contains("category-checkbox") && this.id !== "selectAll") {
            const categoryDiv = this.closest(".category");
            const categoryCb = categoryDiv.querySelector(".category-checkbox");
            const items = categoryDiv.querySelectorAll(".items input");

            categoryCb.checked = [...items].every((item) => item.checked);
            updateSelectAll();
        }
    });
});

// Update "Select All"
function updateSelectAll() {
    const allExceptMain = [...allCheckboxes].filter((cb) => cb.id !== "selectAll");
    selectAll.checked = allExceptMain.every((cb) => cb.checked);
}