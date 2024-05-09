import type { App } from 'vue';
import { createLibraryPlugin, form, month, text, select } from '@formkit/inputs';
import { createProPlugin, inputs } from '@formkit/pro';
import { createThemePlugin } from '@formkit/themes';
import { plugin, bindings } from '@formkit/vue';
import { rootClasses } from "./formkit.theme"
import '@formkit/themes/genesis';
import '@formkit/pro/genesis';

const library = createLibraryPlugin({ text, form, select, month });
const theme = createThemePlugin('genesis');
const pro = createProPlugin('fk-7dff3553dc7', {
    autocomplete: inputs.autocomplete,
    colorpicker: inputs.colorpicker,
});

export function initializeFormKit(app: App) {
    app.use(plugin, {
        config: {
            rootClasses,
        },
        plugins: [library, theme, pro, bindings],
    });
}