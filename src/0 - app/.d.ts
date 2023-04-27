interface ImportMetaEnv {
  readonly VITE_KEY: string;
  readonly VITE_KEY2: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
