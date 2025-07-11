export const formatCPF = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não é número
    value = value.replace(/^(\d{3})(\d)/, "$1.$2");
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1-$2");
    return value.substring(0, 14); // Garante que não passe do limite
};

export const formatCelular = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d)/, "($1) $2"); // Adiciona o DDD com espaço
    }
    if (value.length > 6) {
        value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o traço depois dos 5 primeiros dígitos
    }
    return value.substring(0, 15); // Garante que não passe do limite (15 caracteres, incluindo espaço e traço)
};

export const formatData = (isoDate: string) => {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
};

export const formatCEP = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não é número
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    return value.substring(0, 9); // Garante que não passe do limite
    };