var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Mapping the source to work with NextJS and basic create-react-app
 * NextJS will use the .src of img, CRA will use the image ref itself
 * @param param0
 * @returns
 */
export const ImageWrapper = (_a) => {
    var _b;
    var props = __rest(_a, []);
    const source = ((_b = props.src) === null || _b === void 0 ? void 0 : _b.src) || props.src;
    return _jsx("img", Object.assign({}, props, { alt: props.alt, src: source }));
};
//# sourceMappingURL=ImageWrapper.js.map