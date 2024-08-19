import { SvelteComponent } from "svelte";
import { type ItemResizeObserver } from "./core";
declare const __propDef: {
    props: {
        index: number;
        offset: number;
        hide: boolean;
        horizontal: boolean;
        resizer: ItemResizeObserver;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ListItemProps = typeof __propDef.props;
export type ListItemEvents = typeof __propDef.events;
export type ListItemSlots = typeof __propDef.slots;
export default class ListItem extends SvelteComponent<ListItemProps, ListItemEvents, ListItemSlots> {
}
export {};
