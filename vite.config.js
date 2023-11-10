import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://JuniorArroyave.github.io/ProyevctoFinal-John-Jairo-Arroyave/'
})
