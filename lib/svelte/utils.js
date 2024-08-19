import { afterUpdate, beforeUpdate } from "svelte";
export const onUpdate = (cb, before) => {
    (before ? beforeUpdate : afterUpdate)(() => {
        cb();
    });
};
export const styleToString = (obj) => {
    return Object.keys(obj).reduce((acc, k) => acc + `${k}:${obj[k]};`, "");
};
export const defaultGetKey = (_data, i) => "_" + i;
