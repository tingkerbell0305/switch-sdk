class WidgetEvents extends EventTarget {
    /**
     * Overriding the addEventListener method to make it easier to use with typescript
     * @param type
     * @param listener
     * @param options
     */
    listenToWidget(type, listener, options) {
        super.addEventListener(type, listener, options);
    }
    /**
     * Overriding the removeEventListener method to make it easier to use with typescript
     * @param type
     * @param listener
     * @param options
     */
    removeWidgetListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
    }
    /**
     * Dispatch an event of the widget
     * To be listened from an integrator website
     * For example to display a success message when transaction is done
     * @param name
     * @param data
     */
    dispatch(name, data) {
        this.dispatchEvent(new CustomEvent(name, { detail: data }));
    }
    /**
     * Will dispatch the main axelar status of transaction
     * This will be called every time the status is received by backend
     * (Using interval to check status)
     * @param status
     */
    dispatchSwapStatus(status) {
        this.dispatch("swapStatus", { status });
    }
    /**
     * Dispatch event when user executes a swap
     * Only when we have the tx hash received
     * @param route
     */
    dispatchSwapExecuteCall(route, txHash) {
        this.dispatch("swap", { route, txHash });
    }
}
export const widgetEvents = new WidgetEvents();
//# sourceMappingURL=eventService.js.map