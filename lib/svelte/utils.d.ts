// @ts-nocheck
export declare const onUpdate: (cb: () => void, before?: boolean) => void;
export declare const styleToString: (obj: Record<string, string>) => string;
export declare const defaultGetKey: (_data: unknown, i: number) => string;
/**
 * https://github.com/kitschpatrol/svelte-tweakpane-ui/blob/248fd7c24926af1e485a0676b6a8c053177e92db/src/lib/utils.ts#L57-L59
 */
export type UnwrapCustomEvents<T> = {
    [P in keyof T]: T[P] extends CustomEvent<infer detail> ? detail : never;
};
