import typescript from 'rollup-plugin-typescript2';
import path from 'path';

export default {
  input: 'src/index.ts', // Asegúrate de que el archivo principal de entrada es correcto
  output: [
    {
      file: 'dist/index.js', // Salida de JavaScript
      format: 'esm', // Formato de módulo
    },
    {
      file: 'dist/index.d.ts', // Salida de tipos
      format: 'esm',
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json', // Utiliza tu archivo tsconfig.json
      useTsconfigDeclarationDir: true, // Asegúrate de que se generen las definiciones de tipo
    }),
  ],
};
