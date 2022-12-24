import React, { useEffect } from 'react';

export const DarkMode = () => {

    useEffect(() => {
        const inputContainer = document.querySelector('input')
        const element = document.documentElement

        window.onload = getThemeFromLocalStorage

        const lightTheme = {
            "--background-color": '#edf2f4',
            "--text-color": '#1c1c1c',
            "--color-primary": '#d90429',
        }
        const darkTheme = {
            "--background-color": '#1c1c1c',
            "--text-color": '#edf2f4',
            "--color-primary": '#d90429',
        };

        inputContainer.addEventListener('change', function () {
            const isChecked = inputContainer.checked
            if (isChecked) {
                changeTheme(darkTheme)
            } else {
                changeTheme(lightTheme)
            }
        })
        function changeTheme(theme) {
            for (let prop in theme) {
                changeProperty(prop, theme[prop])
            } saveThemeTolocalStorage(theme)
        }

        function changeProperty(property, value) {
            element.style.setProperty(property, value)
        }

        function saveThemeTolocalStorage(theme) {
            localStorage.setItem('theme', JSON.stringify(theme))
        }
        function getThemeFromLocalStorage() {
            const theme = JSON.parse(localStorage.getItem('theme'));
            if (isThemeIcon(theme, darkTheme)) inputContainer.checked = true
            changeTheme(theme)
            isThemeIcon(theme, darkTheme)
        }

        function isThemeIcon(firstTheme, secondTheme) {
            for (let prop in firstTheme) {
                if (firstTheme[prop] != secondTheme[prop]) return false
            }
            return true
        }
    });
    return (
        <div class='toggle-switch'>
            <label className='label-switch'>
                <input type='checkbox' className='input-switch' />
                <span class='slider'></span>
            </label>
        </div>
    )
}

export default DarkMode