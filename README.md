## ** Nested Checkbox Component**

### 🎯 Objective

Fix the logic of the **nested checkbox component** where selecting parent categories should automatically check all children, and selecting “Select All” should select everything.

### 📌 Intended Behavior

1. **Select All Checkbox**
    - When checked: All categories (Fruits, Vegetables) and all individual items should be checked.
    - When unchecked: All should be deselected.
2. **Parent Category Checkbox (e.g., Fruits / Vegetables)**
    - When checked: All child items under that category should be checked.
    - When unchecked: All child items under that category should be unchecked.
3. **Child Checkbox (e.g., Apple, Banana, Carrot, etc.)**
    - When individual items are selected, the parent should automatically reflect the correct state:
        - **All children selected** → Parent should be checked.
        - **Some children selected** → Parent should be in an **indeterminate state**.
        - **No children selected** → Parent should be unchecked.
