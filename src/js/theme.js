import LocalStorage from './utilities/localStorage';

/**
 * Classe Theme. Fornece métodos para auxiliar nas funções referentes ao tema da aplicação.
 */
export default class Theme {

    /**
     * initialize() => Função responsável por verificar se há algum tema pré-selecionado. 
     * Descrição: As cores do tema são buscadas do LocalStorage. Caso existam cores salvas
     * no LocalStorage, a função onChangeTheme() é invocada passando-as via parâmetro.
     */
    static initialize() {
        const theme = LocalStorage.get('theme');

        if (theme.length !== 0 )
            this.onChangeTheme(theme[0], theme[1]);
    };

    /**
     * onChangeTheme() => Função responsável por alterar as cores de tema da aplicação.
     * Descrição: As cores passadas via parâmetro são incorporadas ao DOM alterando as 
     * variáveis CSS, assim, todos os elementos que utilizam estas variáveis serão alteradas
     * para as novas cores. Por fim, as cores são salvas no LocalStorage.
     * @param {*} colorPrimaryLight = Cor primária clara - colorPrimaryLight = String;
     * @param {*} colorPrimaryDark = Cor primária escura - colorPrimaryDark = String;
     */
    static onChangeTheme(colorPrimaryLight, colorPrimaryDark) {
        window.location.href = "/#";

        const root = document.documentElement;

        root.style.setProperty('--color-primary-light', colorPrimaryLight);
        root.style.setProperty('--color-primary-dark', colorPrimaryDark);

        LocalStorage.save('theme', [colorPrimaryLight, colorPrimaryDark]);
    };

};