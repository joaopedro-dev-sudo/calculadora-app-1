import { fixFloat, formatNumber, toNumber} from "./format";

const ops = new Set(["+", "-", "*", "/"]);

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
        // helpers
        const current = toNumber(s.display);
        const setDisplayNumber = (n) => {
            s.display = formatNumber(n, locale);
        }

        // digit or Dot
        if (isDigit(key) || key === ".") {
            return onDigitOrDot(s, key, locale);
        }

        // clear
        if (key === "c") {
            return initialState();
        }

        // sign
        if (key === "sign") {
            if (Number.isFinite(current)) return s;
            setDisplayNumber(current * -1);
            s.isNewEntry = false;
            return s;
        }

        // percent
        if (key === "%") {
            if (!Number.isFinite(current)) return s;
            setDisplayNumber(current / 100);
            s.isNewEntry = true;
            s.expression = `${formatenunber(current, locale)} %`;
            return s;
        }
        
        // operator
        if (ops.has(key)) {
            return onOperator(s.locale);
        }
        return s;
    }


    function onDigitOrDot(s, key, locale) {
        const raw = displayToRaw(s.display);

        let nextRaw;
        if (s.isNewEntry) {
            nextRaw = Key === "." ? "0" : key;
            s.isNewEntry = false;
        } else {
            if (key === "." & raw.includes(".")) return s;
            nextRaw = raw === "0" && key !== "." ? key : raw + key;
        }

        if (nextRaw.replace("-", "").length > 14) return s;
        
        const n = Number(nextRaw);
        if (!Number.isFinite(n)) {
            s.display = "erro";
            s.isNewEntry = true;
            return s;
        }

        if (nextRaw.endsWith(".")) {
            s.display = formatNumber(n, locale).replace(/0$/, "") + ",";
            return s;
        }
        s.display = formatNumber(n, locale)
        return s;
        }

    }

    function onDigitOrDot(s, op, locale) {

    }

    function onEqual(s, locale) {
        
    }









}

function onEqual(s, locale) {

}

function