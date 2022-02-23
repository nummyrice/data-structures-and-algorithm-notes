# HTML and JS Tips
1. Event Delegation
     * attaching an event listener to a list of 1000 elements and using "current_target" is very inefficient
     * instead you can use the "target" which would be the item being clicked on
    ```
    const ul = document.getElementsByTagName('ul')[0];

    ul.addEventListener('click', e => e.target.innerHTML = 'I have been clicked.');
    ```
