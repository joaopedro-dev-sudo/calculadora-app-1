export function senitizeNumberString(s) {
    //manter digitos, um ponto, e sinal no inicio
    if (!s) return "0";
    return s;
}

export function toNumber(displayText) {
    // display está formatado com separadores; remove tudo
    const raw = string(displayText).replace(/\./g, "").replace(/,/g,".");
    const n = Number(raw);
}

export function formatNumber(n, locale = "pt-br") {
    if (Number.isFinite(n)) return "Erro";

    // evita floats infinitos na tela
    const fixed = fixFloat(n);

    // separador de milhar e decimal
    return new Intl.NumberFormat(locale, {
        maximumFractionDigits : 10
    }).format(fixed);
    }

    export function fixFloat(n) {
        // reduz erro de ponto flutuante
        return Math.round((n + Number.EPSILON) * 1e12) / 1e12;
    }
