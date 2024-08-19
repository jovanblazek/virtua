import { SvelteComponent } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
declare class __sveltets_Render<T> {
    props(): {
        /**
           * Get current scrollTop or scrollLeft.
           */ getScrollOffset?: () => number;
        /**
           * Get current scrollHeight or scrollWidth.
           */ getScrollSize?: () => number;
        /**
           * Get current offsetHeight or offsetWidth.
           */ getViewportSize?: () => number;
        /**
           * Scroll to the item specified by index.
           * @param index index of item
           * @param opts options
           */ scrollToIndex?: (index: number, opts?: import("../core/types").ScrollToIndexOpts) => void;
        /**
           * Scroll to the given offset.
           * @param offset offset from start
           */ scrollTo?: (offset: number) => void;
        /**
           * Scroll by the given offset.
           * @param offset offset from current position
           */ scrollBy?: (offset: number) => void;
    } & HTMLAttributes<HTMLDivElement> & {
        /**
         * The data items rendered by this component.
         */
        data: T[];
        /**
         * Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.
         * @default defaultGetKey (returns index of item)
         */
        getKey?: ((data: T, index: number) => string | number) | undefined;
        /**
         * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
         * @defaultValue 4
         */
        overscan?: number;
        /**
         * Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.
         *
         * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
         * - If set, you can opt out estimation and use the value as initial item size.
         */
        itemSize?: number;
        /**
         * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
         */
        shift?: boolean;
        /**
         * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
         */
        horizontal?: boolean;
    };
    events(): {
        /**
         * Callback invoked whenever scroll offset changes.
         * @param offset Current scrollTop or scrollLeft.
         */
        scroll: CustomEvent<number>;
        /**
         * Callback invoked when scrolling stops.
         */
        scrollEnd: CustomEvent<void>;
        /**
         * Callback invoked when visible items range changes.
         */
        rangeChange: CustomEvent<[start: number, end: number]>;
    };
    slots(): {
        default: {
            item: T;
            index: number;
        };
    };
}
export type VListProps<T> = ReturnType<__sveltets_Render<T>['props']>;
export type VListEvents<T> = ReturnType<__sveltets_Render<T>['events']>;
export type VListSlots<T> = ReturnType<__sveltets_Render<T>['slots']>;
/** Virtualized list component. */
export default class VList<T> extends SvelteComponent<VListProps<T>, VListEvents<T>, VListSlots<T>> {
    get getScrollOffset(): () => number;
    get getScrollSize(): () => number;
    get getViewportSize(): () => number;
    get scrollToIndex(): (index: number, opts?: import("../core/types").ScrollToIndexOpts) => void;
    get scrollTo(): (offset: number) => void;
    get scrollBy(): (offset: number) => void;
}
export {};
