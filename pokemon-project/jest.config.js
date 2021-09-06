module.exports = {
    verbose: true,
    transform: {"^.+\\.js&$": "babel-jest"},
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
    supportsStaticESM: true,
    supportsDynamicImport: true
}


  