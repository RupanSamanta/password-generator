function checkPasswordStrength(password) {
    let score = 0;

    if (!password) {
        return {
            score,
            label: "Empty"
        }
    }

    // Check the length
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (password.length >= 20) score++;

    // Check for containing both lowercase and uppercase letters
    if (/[a-z]/.test(password) || /[A-Z]/.test(password)) score++;

    // Check for at least one number
    if (/\d/.test(password)) score++;

    // Check for at least one special character
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const labels = [
        "Very Weak",
        "Weak",
        "Medium",
        "Strong",
        "Very Strong",
        "Excellent",
    ];

    return {
        score,
        label: labels[score],
    };
}

export { checkPasswordStrength }