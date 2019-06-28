import LocalStorage from './utilities/localStorage'

export default class Theme {
    static initialize() {
        const theme = LocalStorage.get('theme')
        const INDEX_COLOR_PRIMARY_LIGHT = 0
        const INDEX_COLOR_PRIMARY_DARK = 1

        if (theme.length !== 0 ) {
            this.onChangeTheme(theme[INDEX_COLOR_PRIMARY_LIGHT], theme[INDEX_COLOR_PRIMARY_DARK])
        }
    };

    static onChangeTheme(colorPrimaryLight, colorPrimaryDark) {
        window.location.href = "/#"

        const root = document.documentElement

        root.style.setProperty('--color-primary-light', colorPrimaryLight)
        root.style.setProperty('--color-primary-dark', colorPrimaryDark)

        LocalStorage.save('theme', [colorPrimaryLight, colorPrimaryDark])
    }
}
