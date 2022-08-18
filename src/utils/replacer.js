export const replacer = (str, isProp) => {
	if (isProp) return str.replace("$", "--");

	if (str.match(/\$(.*?)[\s)\]}]/g)) {
		return str.replace(/\$(.*?)[\s)\]}]/g, (match, p1) => {
			if (match[match.length - 1] !== " ")
				return `var(--${p1 + match[match.length - 1]})`;

			return `var(--${p1}) `;
		});
	}

	return str.replace(/\$/g, "var(--") + ")";
};
