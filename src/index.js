import postcss from "postcss";
import { replacer } from "./utils/replacer";

export default postcss.plugin("postcss-postcss-test-plugin", () => {
	return (root) => {
		root?.nodes?.forEach((node) => {
			node?.nodes?.forEach((node) => {
				if (node?.prop?.startsWith("$")) {
					node.prop = replacer(node?.prop, true);
				}

				if (node?.value?.includes("$")) node.value = replacer(node?.value);
			});
		});
	};
});
