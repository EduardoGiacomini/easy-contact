import LocalStorage from './utilities/localStorage'

export default class Theme {

    static initialize() {
        const theme = LocalStorage.get('theme')

        if (theme.length !== 0 )
            this.onChangeTheme(theme[0], theme[1])
    };

    static onChangeTheme(colorPrimaryLight, colorPrimaryDark) {
        window.location.href = "/#"

        const root = document.documentElement

        root.style.setProperty('--color-primary-light', colorPrimaryLight)
        root.style.setProperty('--color-primary-dark', colorPrimaryDark)

        LocalStorage.save('theme', [colorPrimaryLight, colorPrimaryDark])
    }
}
