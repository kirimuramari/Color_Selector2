import js from "@eslint/js";
import unusedImports from "eslint-plugin-unused-imports";

export default [
    {
        ignores:[
            "**/*.config.js",
            "**/node_modules/**",
            "**/.expo/**",
            "**/dist/**",
            "**/build/**",
            "**/.next/**",
        ],
    },
    js.configs.recommended,{
        plugins:{
            "unused-imports": unusedImports,
        },
        rules:{
            "no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars:"all",
                    varsIgnorePattern:"^_",
                    args:"after-used",
                    argsIgnorePattern:"^_"
                },
            ],
        },
    },
];