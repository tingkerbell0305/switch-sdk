import { useCallback, useEffect } from "react";
import { useSquidRouter } from "../hooks/useSquidRouter";
export const useKeyboardNavigation = (props) => {
    const { itemsListRef, activeListItemClassName = "" } = props !== null && props !== void 0 ? props : {};
    const { previousRoute } = useSquidRouter();
    const onKeyDown = useCallback((event) => {
        var _a, _b, _c;
        if (event.key === "Escape") {
            previousRoute();
            return;
        }
        if (activeListItemClassName.trim() === "")
            return;
        const itemsList = itemsListRef === null || itemsListRef === void 0 ? void 0 : itemsListRef.current;
        const separatedActiveItemClassNames = activeListItemClassName.split(" ");
        const defaultActiveItem = itemsList === null || itemsList === void 0 ? void 0 : itemsList.querySelector(`.${separatedActiveItemClassNames.join(".")}`);
        if (event.key === "ArrowUp") {
            if (!itemsList)
                return;
            event.preventDefault();
            const activeItem = defaultActiveItem !== null && defaultActiveItem !== void 0 ? defaultActiveItem : itemsList.lastElementChild;
            if (!activeItem)
                return;
            const previousItem = activeItem.previousElementSibling;
            if (previousItem) {
                activeItem.classList.remove(...separatedActiveItemClassNames);
                previousItem.classList.add(...separatedActiveItemClassNames);
                // scroll to previous item
                itemsList.scrollTo({
                    top: ((_a = previousItem.offsetTop) !== null && _a !== void 0 ? _a : 0) -
                        itemsList.clientHeight,
                    behavior: "smooth",
                });
            }
        }
        else if (event.key === "ArrowDown") {
            if (!itemsList)
                return;
            event.preventDefault();
            const activeItem = defaultActiveItem !== null && defaultActiveItem !== void 0 ? defaultActiveItem : itemsList.firstElementChild;
            if (!activeItem)
                return;
            const nextItem = activeItem.nextElementSibling;
            if (nextItem) {
                activeItem.classList.remove(...separatedActiveItemClassNames);
                nextItem.classList.add(...separatedActiveItemClassNames);
                // scroll to next item
                itemsList.scrollTo({
                    top: ((_b = nextItem.offsetTop) !== null && _b !== void 0 ? _b : 0) -
                        itemsList.clientHeight,
                    behavior: "smooth",
                });
            }
        }
        else if (event.key === "Enter") {
            event.preventDefault();
            if (defaultActiveItem) {
                // select active item
                (_c = defaultActiveItem.querySelector("button")) === null || _c === void 0 ? void 0 : _c.click();
            }
        }
    }, [previousRoute, itemsListRef, activeListItemClassName]);
    useEffect(() => {
        document.addEventListener("keydown", onKeyDown, false);
        return () => {
            document.removeEventListener("keydown", onKeyDown, false);
        };
    }, [onKeyDown]);
};
//# sourceMappingURL=useKeyboardNavigation.js.map