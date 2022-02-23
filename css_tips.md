# CSS Tips
1 try firefox's inspector: many nice features to better view grid and box layouts
2. Sub for Media-query (@media only screen)
* Use in(), max(), clamp()

    ```
    article{
        width: clamp(200px, 50%, 600px);
    }
    ```
3. emoji's can be used as class names
4. aspect-ratio property
    * Not supported everywhere yet
    ```
    video {
        width: 100%;
        aspect-ratio: 16/9;
    }
    ```
5. CSS custom property (variables)
    * attach variables to :root
    * variables can be redefined later in css doc
    ```
    :root {
        --text-color: rgb(255, 0, 0);
    }

    p {
        --text-color: green;
        color: var(--text-color);
    }

    h1 {
        color: var(--text-color);
    }
    ```
6. calc(2px + 2px)
    * example:
    ```
    animation-delay: calc(var(--order)*100ms)
    ```
    * if each element is given an inline style variable representing their order, then calc can set delay based on variable
7. keep track of count "state"
    *
    ```
    :root {
        counter_reset: headings;
    }
    h1 {
        counter-increment: headings;
    }
    h1::before {
        content: counter(headings)
    }
    ```
8. focus-within
    * stays focused when any of the container's children are in focus
    ```
    .dropdown {
        opacity: 0;
        visibility: hidden;
    }

    button:focus-within .dropdown {
        opcacity: 1;
        visibility: visible;
    }
    ```
