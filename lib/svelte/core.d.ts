// @ts-nocheck
import { type StateVersion } from "../core/store";
export { SCROLL_IDLE, type StateVersion, getOverscanedRange, } from "../core/store";
export { isRTLDocument } from "../core/environment";
export type { ItemResizeObserver } from "../core/resizer";
export declare const ON_MOUNT = 0;
export declare const ON_UN_MOUNT = 1;
export declare const GET_RANGE = 2;
export declare const GET_TOTAL_SIZE = 3;
export declare const GET_VIEWPORT_SIZE = 4;
export declare const GET_SCROLL_OFFSET = 5;
export declare const GET_SCROLL_DIRECTION = 6;
export declare const GET_JUMP_COUNT = 7;
export declare const GET_ITEM_OFFSET = 8;
export declare const IS_ITEM_HIDDEN = 9;
export declare const OBSERVE_ITEM_RESIZE = 10;
export declare const FIX_SCROLL_JUMP = 11;
export declare const CHANGE_ITEM_LENGTH = 12;
export declare const GET_SCROLL_SIZE = 13;
export declare const SCROLL_TO = 14;
export declare const SCROLL_BY = 15;
export declare const SCROLL_TO_INDEX = 16;
/**
 * This function is workaround for terser minification.
 * Svelte doesn't seem to have a good way to modify and print its AST.
 */
export declare const createVirtualizer: (count: number, itemSize: number | undefined, horizontal: boolean, onUpdate: (v: StateVersion) => void, onScroll: (offset: number) => void, onScrollEnd: () => void) => {
    0: (scrollable: HTMLElement) => void;
    1: () => void;
    2: () => import("../core/types").ItemsRange;
    3: () => number;
    4: () => number;
    5: () => number;
    6: () => import("../core/store").ScrollDirection;
    7: () => number;
    8: (index: number) => number;
    9: (index: number) => boolean;
    10: import("../core/resizer").ItemResizeObserver;
    11: () => void;
    12: (len: number, shift?: boolean) => void;
    13: () => number;
    14: (offset: number) => void;
    15: (offset: number) => void;
    16: (index: number, opts?: import("..").ScrollToIndexOpts) => void;
};
