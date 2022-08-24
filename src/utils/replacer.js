export const replacer = (str, isProp) => {
	if (isProp) return str.replace("$", "--");

	if (str.match(/\$([A-Za-z0-9_-]*)/g)) {
		return str.replace(/\$([A-Za-z0-9_-]*)/g, (match, p1) => {
			if (match[match.length - 1] !== " ") return `var(--${p1})`;

			return `var(--${p1}) `;
		});
	}
};
