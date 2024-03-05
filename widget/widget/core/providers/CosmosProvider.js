var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { useCosmos } from "../../hooks/useCosmos";
export const CosmosContext = React.createContext({
    getCosmosAddressForChain: () => __awaiter(void 0, void 0, void 0, function* () { return ""; }),
});
export const CosmosProvider = ({ children }) => {
    return (_jsx(CosmosContext.Provider, Object.assign({ value: useCosmos() }, { children: children })));
};
export function useCosmosContext() {
    return React.useContext(CosmosContext);
}
//# sourceMappingURL=CosmosProvider.js.map