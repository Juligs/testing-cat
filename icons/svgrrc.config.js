const path = require('path');

/** @type {import('@svgr/core').Config} */
module.exports = {
    // The default parser set by svgr is `babel`, which makes the import sorting plugin fail.
    prettierConfig: {
        parser: 'babel-ts',
    },
    icon: true,
    typescript: true,
    outDir: './src',
    jsxRuntime: 'automatic',
    replaceAttrValues: {
        '#171D26': 'currentColor',
        '#3131FF': 'currentColor',
    },
    indexTemplate(filePaths) {
        const exportEntries = filePaths.map((file) => {
            const originalPath = file.originalPath;
            const basename = path.basename(originalPath, path.extname(originalPath));
            const cleanBaseName = basename.replace(/[^\w\s]/g, '_');
            const formattedBaseName = cleanBaseName
                .replace(/_+([a-zA-Z])/g, (_, letter) => letter.toUpperCase())
                .replace(/^([a-zA-Z])/, (_, letter) => letter.toUpperCase())
                .replace(/[^a-zA-Z0-9]/g, '');
            const exportName = /^\d/.test(formattedBaseName)
                ? `Svg${formattedBaseName}`
                : formattedBaseName;

            return `export { default as ${exportName} } from './${exportName}';`;
        });

        return exportEntries.join('\n');
    },
    template(variables, { tpl }) {
        const template = tpl`

        ${variables.imports};

    ${variables.interfaces};

    export default function ${variables.componentName}(${variables.props}) {
        return (
            ${variables.jsx}
        )
    };
    `;

        return template;
    },
};
