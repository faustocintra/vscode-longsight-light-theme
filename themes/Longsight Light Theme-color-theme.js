const colors = {

	gray01: '#121417',
	gray02: '#455A64',
	gray03: '#B1B2B3',
	gray04: '#D3D4D5',
	
	cyan01: '#4db6ac',
	cyan01_33: '#4db6ac33',
	cyan02: '#00695c',
	
	blue01: '#0d47a1',
   blue02: '#1A237E',
	blue03: '#64b5f6',
	blue04: '#2962ff',

	purple01: '#8E24AA',

	green01: '#33691E',
	green02: '#9E9D24',
	green03: '#AFB42B',
   
	burgundy01: '#580933',
	burgundy02: '#880E4F',
	
	pink01: '#E91E63',
	pink02: '#ff5252',
	pink03: '#E57373',
	
	brown01: '#B71C1C',
	brown01_66: '#B71C1C66',
	brown02: '#8D6E63',
	brown02_66: '#8D6E6366',

	orange01: '#FF5722',
	orange02: '#F57F17',
	orange03: '#FF8A65',
	orange03_66: '#FF8A6566',
	orange02_2F: '#F57F172F',

	white01: '#FFFEF8',
	white01_80: '#FFFEF880',
	white02: '#FFF4F1'
	
}

const themeSettings = {
	"name": "Longsight Light Theme",
	"type": "light",
	"colors": {
		"activityBar.background": colors.burgundy01,
		"activityBar.foreground": colors.white01,
		"activityBarBadge.background": colors.orange01,
		"activityBarBadge.foreground": colors.white01,
		"badge.background": colors.white01,
		"badge.foreground": colors.white01,
		"button.background": colors.burgundy02,
		"button.foreground": colors.white01,
		"button.hoverBackground": colors.pink01,
		"diffEditor.insertedTextBackground": colors.cyan01_33,
		"dropdown.background": colors.white01,
		"dropdown.border": colors.orange03,
		"editor.background": colors.white01,
		"editor.lineHighlightBackground": colors.white02,
		"editor.selectionBackground": colors.orange02_2F,
		"editorCursor.foreground": colors.brown01,
		"editorGroup.background": colors.white02,
		"editorGroup.border": colors.orange03,
		"editorGroupHeader.tabsBackground": colors.white01,
		"editorHoverWidget.background": colors.white02,
		"editorHoverWidget.border": colors.orange03,
		"editorIndentGuide.background": colors.brown02_66,
		"editorLineNumber.foreground": colors.brown02_66,
		"editorSuggestWidget.background": colors.white02,
		"editorSuggestWidget.border": colors.orange03,
		"editorSuggestWidget.selectedBackground": colors.white01,
		"editorWhitespace.foreground": colors.orange03_66,
		"editorWidget.background": colors.white02,
		"extensionButton.prominentBackground": colors.green02,
		"extensionButton.prominentHoverBackground": colors.green03,
		"focusBorder": colors.pink01,
		"input.background": colors.white01,
		"input.border": colors.orange03,
		"list.activeSelectionBackground": colors.orange03_66,
		"list.activeSelectionForeground": colors.gray02,
		"list.focusBackground": colors.orange03,
		"list.highlightForeground": colors.gray01,
		"list.hoverBackground": colors.orange03_66,
		"list.inactiveSelectionBackground": colors.orange03_66,
		"list.inactiveSelectionForeground": colors.gray02,
		"peekView.border": colors.pink01,
		"peekViewEditor.background": colors.white01,
		"peekViewResult.background": colors.white02,
		"peekViewResult.selectionBackground": colors.orange02_2F,
		"peekViewTitle.background": colors.white01,
		"pickerGroup.border": colors.pink01,
		"scrollbarSlider.activeBackground": colors.white01_80,
		"scrollbarSlider.background": colors.white01_80,
		"scrollbarSlider.hoverBackground": colors.orange03_66,
		"sideBar.background": colors.white02,
		"sideBarSectionHeader.background": colors.brown01_66,
		"sideBarSectionHeader.foreground": colors.white01,
		"statusBar.background": colors.orange03,
		"statusBar.debuggingForeground": colors.white01,
		"statusBar.foreground": colors.white01,
		"statusBar.noFolderBackground": colors.pink03,
		"statusBarItem.hoverBackground": colors.orange03,
		"tab.activeBackground": colors.orange02_2F,
		"tab.border": colors.orange03_66,
		"tab.inactiveBackground": colors.white01,
		"textLink.activeForeground": colors.burgundy02,
		"textLink.foreground": colors.burgundy02,
		"titleBar.activeBackground": colors.burgundy01,
		"titleBar.activeForeground": colors.white01,
		"titleBar.inactiveBackground": colors.pink01,
		"titleBar.inactiveForeground": colors.white01,
		"terminal.ansiBlack": colors.gray01,
		"terminal.ansiBlue": colors.blue01,
		"terminal.ansiBrightBlack": colors.gray02,
		"terminal.ansiBrightBlue": colors.blue03,
		"terminal.ansiBrightCyan": colors.cyan01,
		"terminal.ansiBrightGreen": colors.green03,
		"terminal.ansiBrightMagenta": colors.pink01,
		"terminal.ansiBrightRed": colors.orange01,
		"terminal.ansiBrightWhite": colors.gray04,
		"terminal.ansiBrightYellow": colors.orange02,
		"terminal.ansiCyan": colors.cyan02,
		"terminal.ansiGreen": colors.green01,
		"terminal.ansiMagenta": colors.burgundy02,
		"terminal.ansiRed": colors.brown01,
		"terminal.ansiWhite": colors.gray03,
		"terminal.ansiYellow": colors.orange02	
	},
	"tokenColors": [
		//-----------------------------------------------------------------------------
		// Language agnostic section
		//-----------------------------------------------------------------------------
		{
			"name": "Language agnostic: class",
			"scope": [
				"entity.name.class",
				"entity.name.type.class",
				"keyword.control.class",
				"support.class",
				"support.type"
			],
			"settings": {
				"foreground": colors.burgundy02
			}
		},
		{
			"name": "Language agnostic: comment",
			"scope": [
				"comment",
				"punctuation.definition.comment"
			],
			"settings": {
				"foreground": colors.cyan01,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Language agnostic: constant",
			"scope": [
				"constant.language",
				"meta.preprocessor",
				"support.constant.media.css"
			],
			"settings": {
				"foreground": colors.orange02
			}
		},
		{
			"name": "Language agnostic: documentation",
			"scope": [
				"meta.documentation"
			],
			"settings": {
				"foreground": colors.brown02,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Language agnostic: escape \\ char",
			"scope": "constant.character.escape",
			"settings": {
				"foreground": colors.blue03
			}
		},
		{
			"name": "Language agnostic: function",
			"scope": [
				"entity.name.function",
				"support.function",
				"variable.function"
			],
			"settings": {
				"foreground": colors.gray01
			}
		},
		{
			"name": "Language agnostic: keyword",
			"scope": [
				"keyword.control.at-rule.import",
				"keyword.control.at-rule.include",
				"keyword.control.import.from",
				"keyword.control.import",
				"keyword.other.import",
				"keyword",
				"meta.import keyword",
				"storage.type",
				"storage",
				"variable.language.super",
				"variable.language.this"
			],
			"settings": {
				"foreground": colors.pink01,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Language agnostic: number",
			"scope": [
				"constant.numeric",
				"constant.numeric.css",
				"keyword.other.unit"
			],
			"settings": {
				"foreground": colors.green01
			}
		},
		{
			"name": "Language agnostic: operator",
			"scope": [
				"keyword.operator.arithmetic",
				"keyword.operator.assignment",
				"keyword.operator.bitwise",
				"keyword.operator.comparison",
				"keyword.operator.decrement",
				"keyword.operator.increment",
				"keyword.operator.logical",
				"keyword.operator.ternary",
				"keyword.other.new",
				"support.function.construct"
			],
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "Language agnostic: punctuation",
			"scope": [
				"meta.brace.curly",
				"meta.brace.round",
				"meta.brace.square",
				"meta.class punctuation",
				"punctuation.definition.binding-pattern.object",
				"punctuation.definition.block",
				"punctuation.definition.parameters.begin",
				"punctuation.definition.parameters.end",
				"punctuation.section.block.begin.bracket.curly",
				"punctuation.section.block.end.bracket.curly",
				"punctuation.section.braces.begin",
				"punctuation.section.braces.end",
				"punctuation.section.embedded",
				"punctuation.section.method.begin.bracket.curly",
				"punctuation.section.method.end.bracket.curly",
				"punctuation.section.method",
				"punctuation.section.property-list.begin.bracket.curly",
				"punctuation.section.property-list.end.bracket.curly",
				"punctuation.separator.comma",
				"punctuation.separator.dot",
				"punctuation.separator",
				"punctuation.terminator.statement"
			],
			"settings": {
				"foreground": colors.pink03
			}
		},
		{
			"name": "Language agnostic: regexp",
			"scope": [
				"keyword.control.anchor.regexp",
				"string.regexp keyword",
				"string.regexp punctuation.definition.string.begin",
				"string.regexp punctuation.definition.string.end",
				"string.regexp"
			],
			"settings": {
				"foreground": colors.blue04
			}
		},
		{
			"name": "Language agnostic: string",
			"scope": [
				"punctuation.definition.string.begin",
				"punctuation.definition.string.end",
				"string.quoted.double",
				"string.quoted.single",
				"string"
			],
			"settings": {
				"foreground": colors.blue01
			}
		},
		{
			"name": "Language agnostic: variable",
			"scope": [
				"variable.other.constant",
				"variable.other.object",
				"variable.other.readwrite",
				"variable"
			],
			"settings": {
				"foreground": colors.gray02
			}
		},
		{
			"name": "Language agnostic: variable start",
			"scope": "punctuation.definition.variable",
			"settings": {
				"foreground": colors.gray01
			}
		},
		//-----------------------------------------------------------------------------
		// C# section
		//-----------------------------------------------------------------------------
		{
			"name": "C#: class",
			"scope": [
				"storage.type.cs"
			],
			"settings": {
				"foreground": colors.burgundy02
			}
		},
		{
			"name": "C#: documentation",
			"scope": [
				"comment.block.documentation.cs"
			],
			"settings": {
				"foreground": colors.brown02,
				"fontStyle": "italic"
			}
		},
		{
			"name": "C#: documentation types and keywords",
			"scope": [
				"comment.block.documentation.cs meta.tag.cs entity.name.tag.cs entity.name.tag.localname.cs entity.name.tag"
			],
			"settings": {
				"foreground": colors.brown01,
				"fontStyle": "italic"
			}
		},
		{
			"name": "C#: operator",
			"scope": [
				"keyword.operator.relational.cs"
			],
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "C#: preprocessor",
			"scope": [
				"meta.preprocessor.cs"
			],
			"settings": {
				"foreground": colors.green02
			}
		},
		{
			"name": "C#: punctuation",
			"scope": [
				"punctuation.accessor.cs",
				"punctuation.curlybrace.close.cs",
				"punctuation.curlybrace.open.cs",
				"punctuation.definition.typeparameters.begin.cs",
				"punctuation.definition.typeparameters.end.cs",
				"punctuation.parenthesis.close.cs",
				"punctuation.parenthesis.open.cs",
				"punctuation.squarebracket.close.cs",
				"punctuation.squarebracket.open.cs"
			],
			"settings": {
				"foreground": colors.pink03
			}
		},
		//-----------------------------------------------------------------------------
		// CSS, LESS, SASS, SCSS section
		//-----------------------------------------------------------------------------
		{
			"name": "CSS: #id",
			"scope": [
				"source.css entity.other.attribute-name.id",
				"source.less entity.other.attribute-name.id",
				"source.sass entity.other.attribute-name.id",
				"source.scss entity.other.attribute-name.id"
			],
			"settings": {
				"foreground": colors.purple01
			}
		},
		{
			"name": "CSS: .class",
			"scope": [
				"entity.other.attribute-name.class.css",
				"entity.other.attribute-name.class.sass"
			],
			"settings": {
				"foreground": colors.burgundy02
			}
		},
		{
			"name": "CSS :pseudo",
			"scope": [
				"entity.other.attribute-name.pseudo-class",
				"entity.other.attribute-name.pseudo-element.css",
				"entity.other.attribute-name.tag.pseudo-class"
			],
			"settings": {
				"foreground": colors.brown02
			}
		},
		{
			"name": "CSS: property name",
			"scope": [
				"entity.other.attribute-name.css",
				"meta.property-list.scss entity.name.tag.css",
				"meta.property-name.scss",
				"support.type.property-name.css",
				"support.type.vendored.property-name.css"
			],
			"settings": {
				"foreground": colors.pink02
			}
		},
		{
			"name": "CSS: property value",
			"scope": "support.constant.property-value.css",
			"settings": {
				"foreground": colors.gray02
			}
		},
		{
			"name": "CSS: operator",
			"scope": [
				"entity.name.tag.reference.scss",
				"keyword.operator.css",
				"keyword.operator.pattern.css"
			],
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "CSS: punctuation",
			"scope": [
				"punctuation.definition.attribute-selector.begin.bracket.square.scss",
				"punctuation.definition.attribute-selector.end.bracket.square.scss",
				"punctuation.definition.entity.begin.bracket.square.css",
				"punctuation.definition.entity.end.bracket.square.css",
				"punctuation.definition.interpolation.begin.bracket.curly.scss",
				"punctuation.definition.interpolation.end.bracket.curly.scss",
				"punctuation.definition.map.begin.bracket.round.scss",
				"punctuation.definition.map.end.bracket.round.scss",
				"punctuation.section.function.begin.bracket.round.css",
				"punctuation.section.function.end.bracket.round.css",
				"punctuation.section.function.scss",
				"punctuation.section.function.scss",
				"punctuation.section.media.begin.bracket.curly.css",
				"punctuation.section.media.end.bracket.curly.css",
				"punctuation.separator.key-value.css",
				"punctuation.terminator.rule.css",
				"punctuation.terminator.rule.scss"
			],
			"settings": {
				"foreground": colors.pink03
			}
		},
		{
			"name": "CSS: standard color value",
			"scope": [
				"constant.other.color.rgb-value.hex.css"
			],
			"settings": {
				"foreground": colors.gray02
			}
		},
		{
			"name": "CSS: selector > [] and non-spec tags",
			"scope": "meta.selector.css",
			"settings": {
				"foreground": colors.pink03
			}
		},
		{
			"name": "CSS: tag",
			"scope": [
				"entity.name.tag.css",
				"entity.name.tag.scss",
				"source.less keyword.control.html.elements",
				"source.sass keyword.control.untitled",
				"entity.name.tag.custom.scss"
			],
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "CSS: url",
			"scope": "variable.parameter.url.css",
			"settings": {
				"foreground": colors.pink02,
				"fontStyle": "underline"
			}
		},
		{
			"name": "SCSS: variable",
			"scope": "variable.scss",
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "SCSS: atribute name placeholder",
			"scope": "entity.other.attribute-name.placeholder.css",
			"settings": {
				"foreground": colors.brown01,
				"fontStyle": "italic"
			}
		},
		//-----------------------------------------------------------------------------
		// HTML, XML section
		//-----------------------------------------------------------------------------
		{
			"name": "HTML: attribute=",
			"scope": [
				"entity.other.attribute-name.html",
				"meta.tag.block.any.html",
				"meta.tag.inline.any.html",
				"meta.tag.xml entity.other.attribute-name",
				"punctuation.separator.key-value.html",
				"text.html.basic entity.other.attribute-name.html",
				"text.html.basic meta.tag.any.html",
				"text.html.basic meta.tag.block.any",
				"text.html.basic meta.tag.inline.any",
				"text.html.basic meta.tag.other.html",
				"text.html.basic meta.tag.structure.any.html",
				"text.html.basic source.js.embedded.html",
				"entity.other.attribute-name.xml",
				"meta.tag.preprocessor.xml text.xml"
			],
			"settings": {
				//"foreground": colors.orange01
				"foreground": colors.pink02
			}
		},
		{
			"name": "HTML: doctype",
			"scope": [
				"meta.tag.sgml.doctype.html",
				"meta.tag.sgml.doctype.xml",
				"keyword.other.doctype.xml",
				"variable.language.documentroot.xml"
			],
			"settings": {
				//"foreground": colors.orange01
				"foreground": colors.pink03
			}
		},
		{
			"name": "HTML: tag name",
			"scope": "entity.name.tag",
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "HTML: tag start/end",
			"scope": [
				"meta.tag.sgml.doctype.html",
				"meta.tag.sgml.html",
				"punctuation.definition.tag.begin",
				"punctuation.definition.tag.end",
				"punctuation.definition.tag.html",
				"punctuation.definition.tag.xml"
			],
			"settings": {
				//"foreground": colors.orange01
				"foreground": colors.pink02
			}
		},
		{
			"name": "HTML: text",
			"scope": [
				"text.html.basic",
				"text.xml"
			],
			"settings": {
				"foreground": colors.gray02
			}
		},
		//-----------------------------------------------------------------------------
		// Java section
		//-----------------------------------------------------------------------------
		{
			"name": "Java: annotation",
			"scope": [
				"punctuation.definition.annotation.java",
				"storage.type.annotation.java"
			],
			"settings": {
				"foreground": colors.green02
			}
		},
		{
			"name": "Java: class",
			"scope": [
				"storage.modifier.import.java",
				"storage.type.generic.java",
				"storage.type.java",
				"storage.type.object.array.java",
				"storage.type.primitive.array.java",
				"storage.type.primitive.java",
				"variable.language.this.java"
			],
			"settings": {
				"foreground": colors.burgundy02
			}
		},
		{
			"name": "Java: documentation",
			"scope": [
				"comment.block.javadoc.java punctuation.definition.comment.java",
				"comment.block.javadoc.java"
			],
			"settings": {
				"foreground": colors.brown02,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Java: documentation types and keywords",
			"scope": [
				"comment.block.javadoc.java variable.parameter.java",
				"keyword.other.documentation.javadoc.java"
			],
			"settings": {
				"foreground": colors.brown01,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Java: operator",
			"scope": [
				"keyword.control.new.java",
				"keyword.operator.increment-decrement.java"
			],
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "Java: property",
			"scope": [
				"variable.other.object.property.java",
				"variable.other.property.java"
			],
			"settings": {
				"foreground": colors.purple01
			}
		},
		{
			"name": "Java: punctuation",
			"scope": [
				"punctuation.terminator.java"
			],
			"settings": {
				"foreground": colors.pink03
			}
		},
		{
			"name": "Java: source",
			"scope": [
				"source.java"
			],
			"settings": {
				"foreground": colors.gray02
			}
		},
		//-----------------------------------------------------------------------------
		// Javascript, JSON, Typescript section
		//-----------------------------------------------------------------------------
		{
			"name": "Javascript: class",
			"scope": [
				"storage.type.js",
				"variable.other.readwrite.alias.ts",
				"entity.name.type.ts",
				"variable.language.this.ts",
				"support.constant.math.js",
				"variable.other.object.ts",
				"variable.other.object.tsx"
			],
			"settings": {
				"foreground": colors.burgundy02
			}
		},
		{
			"name": "Javascript: documentation",
			"scope": [
				"comment.block.documentation.js",
				"comment.block.documentation.ts"
			],
			"settings": {
				"foreground": colors.cyan01,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Javascript: documentation types and keywords",
			"scope": [
				"comment.block.documentation.js punctuation.definition.block.tag.jsdoc",
				"comment.block.documentation.js storage.type.class.jsdoc",
				"comment.block.documentation.ts punctuation.definition.block.tag.jsdoc",
				"comment.block.documentation.ts storage.type.class.jsdoc",
				"entity.name.type.instance.jsdoc"
			],
			"settings": {
				"foreground": colors.brown01,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Javascript: JSON key names",
			"scope": [
				"variable.other.property",
				"string.quoted.double.js > meta.object-literal.key.js",
				"meta.object-literal.key.js",
				"meta.object-literal.key.js punctuation.definition.string.begin.js",
				"meta.object-literal.key.js punctuation.definition.string.end.js",
				"meta.object-literal.key.js string.quoted.single.js",
				"meta.object.member.js meta.object-literal.key.js",
				"meta.object.member.ts meta.object-literal.key.ts",
				"meta.object.member.tsx meta.object-literal.key.tsx",
				"source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
				"source.json meta.structure.dictionary.json > string.quoted.json",
				"support.type.property-name.json"
			],
			"settings": {
				"foreground": colors.pink02 /* colors.gray02 */
			}
		},
		{
			"name": "Javascript: Object properties",
			"scope": [
				"variable.object.property.js",
				"variable.object.property.ts",
				"variable.other.object.property.ts",
				"variable.other.property.ts",
				"support.variable.property.dom.ts",
				"variable.object.property.tsx",
				"variable.other.property.js",
				"variable.other.object.property.js"
			],
			"settings": {
				"foreground": colors.pink02 /* colors.purple01 */
			}
		},
		{
			"name": "Javascript: operator",
			"scope": [
				"keyword.operator",
				"keyword.operator.expression.instanceof.js",
				"keyword.operator.expression.void.js",
				"keyword.operator.new.js",
				"keyword.operator.optional.js",
				"keyword.operator.optional.ts",
				"keyword.operator.relational.js",
				"keyword.operator.rest.js",
				"keyword.operator.rest.ts",
				"keyword.operator.type.annotation.js",
				"keyword.operator.type.annotation.ts",
				"keyword.operator.type.js",
				"keyword.operator.type.ts",
				"keyword.operator.type.tsx",
				"storage.type.function.arrow.js",
				"storage.type.function.arrow.ts"
			],
			"settings": {
				"foreground": colors.brown01,
				"fontStyle": ""
			}
		},
		{
			"name": "Javascript: punctuation",
			"scope": [
				"punctuation.accessor.js",
				"punctuation.accessor.ts",
				"punctuation.decorator.ts",
				"punctuation.definition.array.begin.json",
				"punctuation.definition.array.end.json",
				"punctuation.definition.dictionary.begin.json",
				"punctuation.definition.dictionary.end.json",
				"punctuation.definition.section.case-statement.js",
				"punctuation.definition.section.case-statement.ts",
				"punctuation.separator.comma.js",
				"punctuation.separator.key-value.js",
				"punctuation.separator.key-value.ts",
				"punctuation.separator.key-value.tsx",
				"source.ts punctuation.separator.comma",
				"source.tsx punctuation.separator.comma"
			],
			"settings": {
				"foreground": colors.pink03
			}
		},
		{
			"name": "Javascript: variable property",
			"scope": [
				"support.variable.property.js",
				"support.variable.property.ts",
				"support.variable.property.tsx"
			],
			"settings": {
				"foreground": colors.pink02
			}
		},
		{
			"name": "Javascript: string template",
			"scope": [
				"punctuation.definition.string.template.begin.js",
				"punctuation.definition.string.template.begin.ts",
				"punctuation.definition.string.template.begin.tsx",
				"punctuation.definition.string.template.end.js",
				"punctuation.definition.string.template.end.ts",
				"punctuation.definition.string.template.end.tsx",
				"string.template.js",
				"string.template.ts",
				"string.template.tsx"
			],
			"settings": {
				"foreground": colors.blue04
			}
		},
		{
			"name": "Javascript: string template expression",
			"scope": [
				"meta.template.expression.js",
				"meta.template.expression.ts",
				"meta.template.expression.tsx",
				"punctuation.definition.template-expression.begin.js",
				"punctuation.definition.template-expression.begin.ts",
				"punctuation.definition.template-expression.begin.tsx",
				"punctuation.definition.template-expression.end.js",
				"punctuation.definition.template-expression.end.ts",
				"punctuation.definition.template-expression.end.tsx"
			],
			"settings": {
				"foreground": colors.blue03
			}
		},
		
		//-----------------------------------------------------------------------------
		// Markdown section
		//-----------------------------------------------------------------------------
		{
			"name": "Markdown: em",
			"scope": "markup.italic",
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"name": "Markdown: fenced code, raw strings",
			"scope": [
				"markup.fenced_code.block.markdown",
				"markup.inline.raw.string.markdown",
				"markup.raw.block.markdown"
			],
			"settings": {
				"foreground": colors.orange01
			}
		},
		{
			"name": "Markdown: link",
			"scope": [
				"markup.underline.link.image.markdown",
				"markup.underline.link.markdown",
				"meta.link.reference constant.other.reference.link.markdown"
			],
			"settings": {
				"foreground": colors.pink02,
				"fontStyle": "underline"
			}
		},
		{
			"name": "Markdown: link title",
			"scope": [
				"punctuation.definition.string.begin.markdown",
				"punctuation.definition.string.end.markdown",
				"string.other.link.title.markdown"
			],
			"settings": {
				"foreground": colors.purple01
			}
		},
		{
			"name": "Markdown: paragraph",
			"scope": [
				"meta.paragraph.markdown"
			],
			"settings": {
				"foreground": colors.gray02
			}
		},
		{
			"name": "Markdown: punctuation",
			"scope": [
				"beginning.punctuation.definition.list.markdown",
				"punctuation.definition.constant.markdown",
				"punctuation.definition.metadata.markdown"
			],
			"settings": {
				"foreground": colors.pink03
			}
		},
		{
			"name": "Markdown: quote",
			"scope": [
				"beginning.punctuation.definition.quote.markdown",
				"markup.quote.markdown meta.paragraph.markdown"
			],
			"settings": {
				"foreground": colors.purple01,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Markdown: section",
			"scope": [
				"entity.name.section.markdown",
				"markup.heading.setext.1.markdown",
				"punctuation.definition.heading.markdown"
			],
			"settings": {
				"foreground": colors.burgundy02
			}
		},
		{
			"name": "Markdown: strong",
			"scope": "markup.bold",
			"settings": {
				"fontStyle": "bold"
			}
		},
		//-----------------------------------------------------------------------------
		// PHP section
		//-----------------------------------------------------------------------------
		{
			"name": "PHP: begin/end markers",
			"scope": [
				"punctuation.section.embedded.begin.php",
				"punctuation.section.embedded.end.php"
			],
			"settings": {
				"foreground": colors.purple01
			}
		},
		{
			"name": "PHP: class",
			"scope": [
				"entity.other.inherited-class.php",
				"meta.class.body.php constant.other.php",
				"meta.class.php",
				"constant.other.php",
				"meta.other.inherited-class.php"
			],
			"settings": {
				"foreground": colors.burgundy02
			}
		},
		{
			"name": "PHP: class constant",
			"scope": [
				"constant.other.class.php",
				"support.constant.std.php",
				"meta.class.body.php constant.other.php"
			],
			"settings": {
				"foreground": colors.orange02
			}
		},
		{
			"name": "PHP: documentation",
			"scope": [
				"comment.block.documentation.phpdoc.php punctuation.definition.comment.php",
				"comment.block.documentation.phpdoc.php"
			],
			"settings": {
				"foreground": colors.brown02,
				"fontStyle": "italic"
			}
		},
		{
			"name": "PHP: documentation types and keywords",
			"scope": [
				"keyword.other.phpdoc.php",
				"meta.other.type.phpdoc.php keyword.other.array.phpdoc.php",
				"meta.other.type.phpdoc.php keyword.other.type.php",
				"meta.other.type.phpdoc.php punctuation.separator.delimiter.php",
				"meta.other.type.phpdoc.php punctuation.separator.inheritance.php",
				"meta.other.type.phpdoc.php support.class.builtin.php",
				"meta.other.type.phpdoc.php support.class.php",
				"meta.other.type.phpdoc.php support.other.namespace.php"
			],
			"settings": {
				"foreground": colors.brown01,
				"fontStyle": "italic"
			}
		},
		{
			"name": "PHP: embedded SQL",
			"scope": [
				"source.sql.embedded.php keyword"
			],
			"settings": {
				"foreground": colors.pink02
			}
		},
		{
			"name": "PHP: false regex inside string bug fix",
			"scope": [
				"string.regexp.single-quoted.php"
			],
			"settings": {
				"foreground": colors.pink02
			}
		},
		{
			"name": "PHP: namespace",
			"scope": [
				"keyword.operator.key.php",
				"support.other.namespace.php"
			],
			"settings": {
				"foreground": colors.gray02
			}
		},
		{
			"name": "PHP: operator",
			"scope": [
				"keyword.operator.class.php",
				"keyword.operator.key.php"
			],
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "PHP: punctuation",
			"scope": [
				"punctuation.definition.begin.bracket.round.php",
				"punctuation.definition.end.bracket.round.php",
				"punctuation.definition.begin.bracket.curly.php",
				"punctuation.definition.end.bracket.curly.php",
				"punctuation.definition.arguments.begin.bracket.round.php",
				"punctuation.definition.arguments.end.bracket.round.php",
				"punctuation.section.array.begin.php",
				"punctuation.section.array.end.php",
				"punctuation.terminator.expression.php"
			],
			"settings": {
				"foreground": colors.pink03
			}
		},
		{
			"name": "PHP: this/self",
			"scope": [
				"variable.language.this.php",
				"variable.language.this.php punctuation.definition.variable.php",
				"storage.type.php"
			],
			"settings": {
				"foreground": colors.burgundy02
			}
		},
		{
			"name": "PHP: variable",
			"scope": [
				"punctuation.definition.variable.php",
				"variable.other.class.php",
				"variable.other.php"
			],
			"settings": {
				"foreground": colors.gray02
			}
		},
		//-----------------------------------------------------------------------------
		// Python section
		//-----------------------------------------------------------------------------
		{
			"name": "Python: binary string",
			"scope": [
				"string.quoted.binary.single.python punctuation.definition.string.begin.python",
				"string.quoted.binary.single.python punctuation.definition.string.end.python",
				"string.quoted.binary.single.python",
				"string.quoted.binary.double.python punctuation.definition.string.begin.python",
				"string.quoted.binary.double.python punctuation.definition.string.end.python",
				"string.quoted.binary.double.python",
				"storage.type.string.python"
			],
			"settings": {
				"foreground": colors.blue02
			}
		},
		{
			"name": "Python: constant",
			"scope": [
				"constant.other.caps.python"
			],
			"settings": {
				"foreground": colors.orange02
			}
		},
		{
			"name": "Pyton: documentation",
			"scope": [
				"string.quoted.docstring.multi.python keyword.control.flow.python",
				"string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
				"string.quoted.docstring.multi.python punctuation.definition.string.end.python",
				"string.quoted.docstring.multi.python",
				"string.quoted.docstring.single.python punctuation.definition.string.begin.python",
				"string.quoted.docstring.single.python punctuation.definition.string.end.python",
				"string.quoted.docstring.single.python"

			],
			"settings": {
				"foreground": colors.brown02,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Pyton: documentation tag",
			"scope": [
				"keyword.codetag.notation.python"
			],
			"settings": {
				"foreground": colors.brown01,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Python: decorator",
			"scope": [
				"entity.name.function.decorator.python",
				"meta.function.decorator.python support.type.python",
				"meta.function.decorator.python punctuation.definition.arguments.begin.python",
				"meta.function.decorator.python punctuation.definition.arguments.end.python",
				"meta.function.decorator.python"
			],
			"settings": {
				"foreground": colors.green02
			}
		},
		{
			"name": "Python: magical variable and function",
			"scope": [
				"support.function.magic.python",
				"support.variable.magic.python"
			],
			"settings": {
				"foreground": colors.orange03
			}
		},
		{
			"name": "Python: number",
			"scope": [
				"storage.type.number.python"
			],
			"settings": {
				"foreground": colors.green01
			}
		},
		{
			"name": "Python: operator",
			"scope": [
				"keyword.operator.unpacking.arguments.python",
				"keyword.operator.unpacking.parameter.python"
			],
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "Python: plain text",
			"scope": [
				"source.python"
			],
			"settings": {
				"foreground": colors.gray02
			}
		},
		{
			"name": "Python: punctuation",
			"scope": [
				"punctuation.definition.arguments.begin.python",
				"punctuation.definition.arguments.end.python",
				"punctuation.definition.dict.begin.python",
				"punctuation.definition.dict.end.python",
				"punctuation.definition.list.begin.python",
				"punctuation.definition.list.end.python",
				"punctuation.parenthesis.begin.python",
				"punctuation.parenthesis.end.python",
				"punctuation.section.function.begin.python",
				"punctuation.section.function.end.python"
			],
			"settings": {
				"foreground": colors.pink03
			}
		},
		{
			"name": "Python: regexp",
			"scope": [
				"string.regexp.quoted.double.python storage.type.string.python",
				"string.regexp.quoted.single.python storage.type.string.python"
			],
			"settings": {
				"foreground": colors.blue04
			}
		},
		{
			"name": "Python: self",
			"scope": [
				"variable.language.special.self.python",
				"variable.parameter.function.language.special.self.python"
			],
			"settings": {
				"foreground": colors.burgundy02
			}
		},
		//-----------------------------------------------------------------------------
		// Ruby section
		//-----------------------------------------------------------------------------
		{
			"name": "Ruby: class",
			"scope": [
				"entity.other.inherited-class.ruby",
				"variable.language.self.ruby"
			],
			"settings": {
				"foreground": colors.burgundy02
			}
		},
		{
			"name": "Ruby: constant",
			"scope": [
				"variable.other.constant.ruby"
			],
			"settings": {
				"foreground": colors.orange02
			}
		},
		{
			"name": "Ruby: embedded punctuation",
			"scope": [
				"meta.embedded.line.ruby punctuation.separator.method.ruby",
				"punctuation.section.embedded.begin.ruby",
				"punctuation.section.embedded.end.ruby"
			],
			"settings": {
				"foreground": colors.blue03
			}
		},
		{
			"name": "Ruby: embedded variable",
			"scope": [
				"meta.embedded.line.ruby"
			],
			"settings": {
				"foreground": colors.gray02
			}
		},
		{
			"name": "Ruby: hashkey",
			"scope": [
				"constant.other.symbol.hashkey.parameter.function.ruby",
				"constant.other.symbol.hashkey.ruby"
			],
			"settings": {
				"foreground": colors.purple01
			}
		},
		{
			"name": "Ruby: class variable",
			"scope": [
				"variable.other.readwrite.class.ruby punctuation.definition.variable.ruby",
				"variable.other.readwrite.class.ruby"
			],
			"settings": {
				"foreground": colors.purple01,
				"fontStyle": "italic"
			}
		},
		{
			"name": "Ruby: global variable",
			"scope": [
				"variable.other.readwrite.global.pre-defined.ruby punctuation.definition.variable.ruby",
				"variable.other.readwrite.global.pre-defined.ruby",
				"variable.other.readwrite.global.ruby punctuation.definition.variable.ruby",
				"variable.other.readwrite.global.ruby"
			],
			"settings": {
				"foreground": colors.purple01
			}
		},
		{
			"name": "Ruby: instance variable",
			"scope": [
				"variable.other.readwrite.instance.ruby punctuation.definition.variable.ruby",
				"variable.other.readwrite.instance.ruby"
			],
			"settings": {
				"foreground": colors.purple01
			}
		},
		{
			"name": "Ruby: operator",
			"scope": [
				"keyword.operator.other.ruby"
			],
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "Ruby: source",
			"scope": [
				"source.ruby"
			],
			"settings": {
				"foreground": colors.gray02
			}
		},
		{
			"name": "Ruby: special method",
			"scope": [
				"keyword.other.special-method.ruby"
			],
			"settings": {
				"foreground": colors.brown01
			}
		},
		{
			"name": "Ruby: punctuation",
			"scope": [
				"punctuation.definition.parameters.ruby",
				"punctuation.section.array.begin.ruby",
				"punctuation.section.array.end.ruby",
				"punctuation.section.function.ruby",
				"punctuation.section.scope.begin.ruby",
				"punctuation.section.scope.end.ruby"
			],
			"settings": {
				"foreground": colors.pink03
			}
		},
		
		{
			"name": "Ruby: symbol",
			"scope": [
				"constant.other.symbol.ruby"
			],
			"settings": {
				"foreground": colors.green02
			}
		}
		
		
	],
	"uuid": "130e5195-c9e1-4f74-b5d4-c0ffe77192e5"
}

const fs = require('fs')

let output = __filename.replace('.js', '.json')

fs.writeFile(output, JSON.stringify(themeSettings), (err) => {
	if (err) throw err;
	console.log('Theme file (.json) has been saved!');
})