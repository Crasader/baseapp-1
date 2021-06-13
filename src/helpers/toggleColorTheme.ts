export const toggleColorTheme = (value: string) => {
    const rootElement = document.getElementsByTagName('body')[0];
    if (value === 'light') {
        rootElement && rootElement.classList.add('light-mode');
    } else {
        //force the light mode anyway..
        //I am forcing the light-mode for this application anyway.
        //The logo remains unchanged thoug and will need some changes
        //rootElement && rootElement.classList.remove('light-mode');
        rootElement.classList.add("light-mode");
    }
};
