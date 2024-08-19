/** @jsxImportSource vue */
import { ComponentOptionsMixin, SlotsType } from "vue";
import { VirtualizerHandle } from "./Virtualizer";
interface VListHandle extends VirtualizerHandle {
}
export declare const VList: import("vue").DefineComponent<{
    /**
     * The data items rendered by this component.
     */
    data: {
        type: ArrayConstructor;
        required: true;
    };
    /**
     * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
     * @defaultValue 4
     */
    overscan: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.
     *
     * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
     * - If set, you can opt out estimation and use the value as initial item size.
     */
    itemSize: NumberConstructor;
    /**
     * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
     */
    shift: BooleanConstructor;
    /**
     * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
     */
    horizontal: BooleanConstructor;
    /**
     * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.
     */
    ssrCount: NumberConstructor;
}, VListHandle, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    /**
     * Callback invoked whenever scroll offset changes.
     * @param offset Current scrollTop or scrollLeft.
     */
    scroll: (offset: number) => void;
    /**
     * Callback invoked when scrolling stops.
     */
    scrollEnd: () => void;
    /**
     * Callback invoked when visible items range changes.
     */
    rangeChange: (
    /**
     * The start index of viewable items.
     */
    startIndex: number, 
    /**
     * The end index of viewable items.
     */
    endIndex: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The data items rendered by this component.
     */
    data: {
        type: ArrayConstructor;
        required: true;
    };
    /**
     * Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
     * @defaultValue 4
     */
    overscan: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.
     *
     * - If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
     * - If set, you can opt out estimation and use the value as initial item size.
     */
    itemSize: NumberConstructor;
    /**
     * While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.
     */
    shift: BooleanConstructor;
    /**
     * If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.
     */
    horizontal: BooleanConstructor;
    /**
     * A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated.
     */
    ssrCount: NumberConstructor;
}>> & {
    onScroll?: ((offset: number) => any) | undefined;
    onScrollEnd?: (() => any) | undefined;
    onRangeChange?: ((startIndex: number, endIndex: number) => any) | undefined;
}, {
    shift: boolean;
    overscan: number;
    horizontal: boolean;
}, SlotsType<{
    default: any;
}>>;
export {};
