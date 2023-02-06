module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            _env: './src/config/env',
            _components: './src/components/',
            _models: './src/models/',
            _enums: './src/enums/',
            _screens: './src/screens/',
            _features: './src/features/',
            _utils: './src/utils/',
            _store: './src/store/',
            _navigation: './src/navigation',
            _hooks: './src/hooks/',
            _languages: './src/locales/languages',
            _i18n: './src/locales/i18n',
            _validation: './src/validation',
            _config: './src/config',
            _api: './src/api/',
          },
        },
      ],
    ],
    presets: ['module:metro-react-native-babel-preset'],
  };
};
