module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		"^.+\\.ts$": "ts-jest",
	},
	testMatch: ["**/tests/**/*.test.ts"],
	reporters: [
		"default",
		[
			"jest-junit",
			{
				outputDirectory: "dist-report",
				outputName: "ut-report.xml",
			},
		],
	],
	coverageReporters: ["cobertura"],
	collectCoverageFrom: [
		"**/src/controllers/*.{js,jsx,ts,tsx}",
		"**/src/models/*.{js,jsx,ts,tsx}",
		"**/src/routes/*.{js,jsx,ts,tsx}",
		"!**/node_modules/**",
		"!**/dist/**",
		"!**/.work/**",
		"!**/public/**",
	],
};
