import { fixFloat, formatNumber, toNumber} from "./format";

const ops = new Set(["+"; "-", "*", "/"]);

export function createEngine({ locale = "pt-br"} = {}) {
    function initialState() {
        return {
            display: formatNumber(0, locale),
            expression: "",
            storedValue: null,
            pendingOp: null,
            isNewEntry: true,
            lastkey: null,
        },
    }

    function reduce(state, key) {
        const s = { ...state, lastkey: key};
        // programar
        return s;
    }

    function onDigitOrDot(s, key, locale) {

    }

    function onDigitOrDot(s, op, locale) {

    }

    function onEqual(s, locale) {
        
    }









}

function onEqual(s, locale) {

}

function