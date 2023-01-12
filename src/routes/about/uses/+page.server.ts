import { toolData, type ToolSet } from '@content/uses/uses';
import type { PageServerLoadEvent } from './$types';

export const load = async ({}: PageServerLoadEvent) => {
	const categories = Object.keys(toolData);
	const tools: ToolSet[][] = Object.values(toolData);
	return { categories, tools };
};
