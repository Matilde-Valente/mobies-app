global.importMetaEnv = {
  VITE_API_KEY: 'test-api-key',
};

Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: {
        VITE_API_KEY: 'mock-api-key', // Mocked environment variable
      },
    },
  },
});
