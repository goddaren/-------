// vite.config.ts

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    // ...
    plugins: [
        vue(),
        // ...
        AutoImport({
            resolvers: [ElementPlusResolver(), IconsResolver({
                prefix: 'Icon',
            }),],
        }),
        // ...
        Components({
            resolvers: [IconsResolver({
                enabledCollections: ['ep'],
            }), ElementPlusResolver()],
        }),
        // ...
        Icons({
            autoInstall: true,
        }),
    ],
    build: {
        minify: true
    },
    base: './',
})