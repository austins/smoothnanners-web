/* eslint-disable @typescript-eslint/consistent-type-imports */

/// <reference types="unplugin-icons/types/svelte" />

declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}

        interface PageData {
            session?: import("@auth/core/types").Session | null;
        }

        // interface Platform {}
    }
}

declare module "@auth/core/types" {
    interface Session {
        user: {
            id: string;
            slug: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        slug: string;
    }
}

export {};
