import { defineConfig } from 'cz-git'
import fg from 'fast-glob'

const getPackages = (packagePath) =>
	fg.sync('*', { cwd: packagePath, onlyDirectories: true, deep: 2 })

const scopes = [
	...getPackages('packages'),
	...getPackages('apps'),
	'docker',
	'docs',
	'project',
	'style',
	'ci',
	'dev',
	'deploy',
	'other',
	'dependency',
]

// Emoji
/** @type {import('cz-git').UserConfig} */
export default defineConfig({
	extends: ['@commitlint/config-conventional'], // extends can be nested
	parserPreset: 'conventional-changelog-conventionalcommits',
	rules: {
		'subject-case': [0],
		// -- 允许的 scope 列表
		'scope-enum': [2, 'always', scopes],
		// -- header 最长 100 字符
		'header-max-length': [2, 'always', 300],
		// -- body 最长 1000 字符
		'body-max-line-length': [2, 'always', 1000],
		// -- 允许的 type 列表，增加 init
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'perf',
				'test',
				'build',
				'ci',
				'chore',
				'revert',
				'init',
			],
		],
	},
	prompt: {
		settings: {},
		messages: {
			skip: ':skip',
			max: 'upper %d chars',
			min: '%d chars at least',
			emptyWarning: 'can not be empty',
			upperLimitWarning: 'over limit',
			lowerLimitWarning: 'below limit',
		},
		types: [
			{ value: 'feat', name: 'feat:     ✨  A new feature', emoji: '✨ ' },
			{ value: 'fix', name: 'fix:      🐛  A bug fix', emoji: '🐛 ' },
			{
				value: 'docs',
				name: 'docs:     📝  Documentation only changes',
				emoji: '📝 ',
			},
			{
				value: 'style',
				name: 'style:    💄  Changes that do not affect the meaning of the code',
				emoji: '💄 ',
			},
			{
				value: 'refactor',
				name: 'refactor: 📦️   A code change that neither fixes a bug nor adds a feature',
				emoji: '📦️ ',
			},
			{
				value: 'perf',
				name: 'perf:     🚀  A code change that improves performance',
				emoji: '🚀 ',
			},
			{
				value: 'test',
				name: 'test:     🚨  Adding missing tests or correcting existing tests',
				emoji: '🚨 ',
			},
			{
				value: 'build',
				name: 'build:    🛠   Changes that affect the build system or external dependencies',
				emoji: '🛠 ',
			},
			{
				value: 'ci',
				name: 'ci:       🎡  Changes to our CI configuration files and scripts',
				emoji: '🎡 ',
			},
			{
				value: 'chore',
				name: "chore:    🔨  Other changes that don't modify src or test files",
				emoji: '🔨 ',
			},
			{
				value: 'revert',
				name: 'revert:   ⏪️  Reverts a previous commit',
				emoji: '⏪️ ',
			},
			{
				value: 'init',
				name: 'init:     🌱️  Initialize a new project',
				emoji: '🌱️ ',
			},
		],
		useEmoji: true,
		confirmColorize: true,
		emojiAlign: 'center',
		questions: {
			scope: {
				description:
					'What is the scope of this change (e.g. component or file name)',
			},
			subject: {
				description: 'Write a short, imperative tense description of the change',
			},
			body: {
				description: 'Provide a longer description of the change',
			},
			isBreaking: {
				description: 'Are there any breaking changes?',
			},
			breakingBody: {
				description:
					'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
			},
			breaking: {
				description: 'Describe the breaking changes',
			},
			isIssueAffected: {
				description: 'Does this change affect any open issues?',
			},
			issuesBody: {
				description:
					'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
			},
			issues: {
				description: 'Add issue references (e.g. "fix #123", "re #123".)',
			},
		},
	},
})
