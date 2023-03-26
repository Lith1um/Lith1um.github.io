// Methods to handle when a page loads
export const pageInits = {
  webComps: () => {
    document.getElementById('web-comp-install-npm-html').code = `<script
  type="module"
  src="node_modules/canopy-stencil-web/dist/canopy-stencil-web/canopy-stencil-web.esm.js">
</script>
<link
  rel="stylesheet"
  href="node_modules/canopy-stencil-web/dist/canopy-stencil-web/canopy-stencil-web.css"/>`;

    document.getElementById('web-comp-install-unpkg-html').code = `<script
  type="module"
  src="https://unpkg.com/canopy-stencil-web@latest/dist/canopy-stencil-web/canopy-stencil-web.esm.js">
</script>
<link
  rel="stylesheet"
  href="https://unpkg.com/canopy-stencil-web@latest/dist/canopy-stencil-web/canopy-stencil-web.css"/>`;
  },

  angularComps: () => {
    document.getElementById('angular-comp-install-module').code = `import { CanopyStencilModule } from 'canopy-stencil-angular';
import { defineCustomElements } from 'canopy-stencil-web/loader';

defineCustomElements();

@NgModule({
  imports: [
    CanopyStencilModule,
    ...
  ],
  ...
});`;

    document.getElementById('angular-comp-install-assets').code = `"assets": [
  {
    "glob": "**/*",
    "input": "node_modules/canopy-stencil-web/dist/canopy-stencil-web/webfonts",
    "output": "/webfonts/"
  },
  ...
],
"styles": [
  "node_modules/canopy-stencil-web/dist/canopy-stencil-web/canopy-stencil-web.css",
  ...
],
...`;
  },

  colours: () => {
    document.getElementById('colours-override-simple').code = `html {
  --cpy-bg-primary-rgb: 8, 145, 178; /* cyan-600 */
  --cpy-bg-primary-light-rgb: 236, 254, 255;  /* cyan-50 */
  --cpy-bg-primary-hover-rgb: 6, 182, 212; /* cyan-500 */
  
  --cpy-text-primary: rgb(14, 116, 144); /* cyan-700 */
}
html.dark {
  --cpy-bg-primary-light-rgb: 8, 145, 178;  /* cyan-600 */
      
  --cpy-text-primary: rgb(6, 182, 212); /* cyan-500 */
}`;
    document.getElementById('colours-palette-css').code = `:root {
  /* overrides the text colour in dark mode for edge cases
      like white text on coloured background for alerts */
  --cpy-dm-text-override: currentColor;

  --cpy-bg-hover: rgba(0, 0, 0, 0.05);

  /* based on tailwind colours */
  --cpy-bg-light-rgb: 250, 250, 250; /* zinc-50 */
  --cpy-bg-medium-rgb: 229, 231, 235; /* grey-200 */
  --cpy-bg-white-rgb: 255, 255, 255;
  --cpy-bg-basic-rgb: 75, 85, 99; /* gray-600 */
  --cpy-bg-basic-light-rgb: 249, 250, 251; /* grey-50 */
  --cpy-bg-basic-hover-rgb: 107, 114, 128; /* grey-500 */
  --cpy-bg-basic-border-rgb: 229, 231, 235; /* grey-200 */
  --cpy-bg-primary-rgb: 124, 58, 237; /* violet-600 */
  --cpy-bg-primary-light-rgb: 238, 242, 255;  /* violet-50 */
  --cpy-bg-primary-hover-rgb: 139, 92, 246; /* violet-500 */
  --cpy-bg-secondary-rgb: 234, 88, 12; /* orange-600 */
  --cpy-bg-secondary-light-rgb: 255, 247, 237; /* orange-50 */
  --cpy-bg-secondary-hover-rgb: 249, 115, 22; /* orange-500 */
  --cpy-bg-success-rgb: 22, 163, 74; /* green-600 */
  --cpy-bg-success-light-rgb: 240, 253, 244; /* green-50 */
  --cpy-bg-success-hover-rgb: 34, 197, 94; /* green-500 */
  --cpy-bg-error-rgb: 220, 38, 38; /* red-600 */
  --cpy-bg-error-light-rgb: 254, 242, 242; /* red-50 */
  --cpy-bg-error-hover-rgb: 239, 68, 68; /* red-500 */
  --cpy-bg-warn-rgb: 217, 119, 6; /* amber-600 */
  --cpy-bg-warn-light-rgb: 255, 251, 235; /* amber-50 */
  --cpy-bg-warn-hover-rgb: 245, 158, 11; /* amber-500 */
  --cpy-bg-disabled-rgb: 229, 231, 235; /* gray-200 */

  --cpy-text-disabled: rgb(156, 163, 175); /* gray-400 */
  --cpy-text-base: rgb(31, 41, 55); /* gray-800 */
  --cpy-text-light: rgb(107, 114, 128); /* gray-500 */
  --cpy-text-primary: rgb(109, 40, 217); /* violet-700 */
  --cpy-text-secondary: rgb(194, 65, 12); /* orange-700 */
  --cpy-text-basic: rgb(55, 65, 81); /* gray-700 */
  --cpy-text-success: rgb(21, 128, 61); /* green-700 */
  --cpy-text-warn: rgb(180, 83, 9); /* amber-700 */
  --cpy-text-error: rgb(185, 28, 28); /* red-700 */
  
  --cpy-tooltip-bg: var(--cpy-bg-dark);
  --cpy-tooltip-text: var(--cpy-bg-white);
  --cpy-progress-bar-bg: var(--cpy-bg-primary);
  --cpy-comment-author-text: var(--cpy-text-primary);
}`;

    document.getElementById('colours-pallette-dark-css').code = `html.dark {
  /* overrides the text colour in dark mode for edge cases
      like white text on coloured background for alerts */
  --cpy-dm-text-override: rgb(255, 255, 255);

  --cpy-bg-hover: rgba(0, 0, 0, 0.05);

  /* based on tailwind colours */
  --cpy-bg-light-rgb: 15, 23, 42; /* slate-900 */
  --cpy-bg-white-rgb: 30, 41, 59; /* slate-800 */
  ...
}`;

    document.getElementById('colours-pallette-dark-alt').code = `@media (prefers-color-scheme: dark) {
  ...
}`;
  },

  formValidation: () => {
    document.getElementById('getting-started-types').code = `// Validators input type
validators: Array<string | ValidatorEntry | Validator<string>>;

export interface ValidatorEntry {
  name: string;
  options?: { [key: string]: any; };
}

interface Validator<T> {
  validate: (val: T) => boolean;
  errorMessage?: string;
}`;

    document.getElementById('built-in-validation').code = `<cpy-input label="Form Input"></cpy-input>

<script>
  document.querySelector('cpy-input').validators = [
    'required',
    'email',
    'number',
    {name: 'length', options: {min: 4, max: 10}},
    {name: 'numberLength', options: {min: 0, max: 100}},
  ]
</script>`;

    document.getElementById('custom-validators-typescript').code = `// Custom validator to check if a number is even
const IsEvenValidator: Validator<string> = {
  validate: (val: string) => {
    // ignore empty values
    val = val ?? '';
    if (val === '') {
      return true;
    }

    // get the value as a number
    const numVal = parseFloat(val);

    // ignore validation if the number is not valid
    if (isNaN(numVal)) {
      return true;
    }
    return numVal % 2 === 0;
  },
  errorMessage: 'You must enter an even number'
}

document.querySelector('cpy-input').validators = [IsEvenValidator];`;

    document.getElementById('input-state-valid').code = `<cpy-input label="Form Input"></cpy-input>

<script>
  (async () => {
    await customElements.whenDefined('cpy-input');
    const isValid = await document.querySelector('cpy-input').isValid();
  })();
</script>`;

    document.getElementById('input-state-mark-touched').code = `<cpy-input label="Form Input"></cpy-input>

<script>
  document.querySelector('cpy-input').markAsTouched();
</script>`;
  },

  codeBlock: () => {
    document.getElementById('code-block-scss-example').code = `.nav-menu-item {
  --item-opacity: 0;
  background-color: rgba(var(--cpy-bg-basic-rgb), var(--item-opacity));

  &:hover, &--active {
    --item-opacity: 0.1;
  }
}`;

    document.getElementById('code-block-ts-example').code = `import { Component, h, Prop } from '@stencil/core';
import '../../utils/prism';

@Component({
  tag: 'cpy-code-block',
  styleUrl: 'code-block.scss',
  shadow: true,
})
export class CodeBlock {

  @Prop() code: string;

  @Prop() language: 'typescript' | 'javascript' | 'scss' | 'css' | 'html' | 'json' | 'shell' = 'typescript';

  codeElem: HTMLElement;

  componentDidRender(): void {
    Prism.highlightElement(this.codeElem);
  }

  render() {
    return (
      <pre>
        <code ref={(el) => this.codeElem = el as HTMLElement} class={\`language-\${this.language}\`}>
          {this.code}
        </code>
      </pre>
    );
  }
}`;

    document.getElementById('code-block-html-example').code = `<cpy-code-block language="scss"></cpy-code-block>

<script>
  document.querySelector('cpy-code-block').code = \`.nav-menu-item {
    --item-opacity: 0;
    background-color: rgba(var(--cpy-bg-basic-rgb), var(--item-opacity));

    &:hover, &--active {
      --item-opacity: 0.1;
    }
  }\`;
</script>`;

    document.getElementById('code-block-props').tableData = [
      { name: 'code', description: 'The code snippet to show', type: "string", default: "", required: true },
      { name: 'show-details', description: 'Shows the language and copy button', type: "boolean", default: "false", required: false},
      { name: 'language', description: 'The code snippet language', type: "'typescript' | 'javascript' | 'scss' | 'css' | 'html' | 'json' | 'shell'", default: "'typescript'", required: false },
    ];
  },

  codeSnippet: () => {
    document.getElementById('code-snippet-html-example').code = `<cpy-code-snippet>console.log('This is a code snippet!');</cpy-code-snippet>`;

    document.getElementById('code-snippet-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the code snippet (this should just be basic text)' },
    ];
  },

  comment: () => {
    const defaultComment = {
      author: 'Alex',
      date: '1994-06-12T08:37:00.000Z',
      imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
      text: `This is a comment.`
    };

    const longComment = {
      author: 'Gena',
      date: '1994-02-01T10:45:00.000Z',
      imageUrl: 'https://react.semantic-ui.com/images/avatar/large/molly.png',
      text: `Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra. Integer in rutrum odio. Maecenas ornare, ligula et consequat iaculis, lacus quam eleifend ante, non aliquam lectus diam nec diam. Aenean rhoncus sed nunc vitae lacinia. Aenean id risus sodales tortor sollicitudin dignissim sed a tellus. Vivamus suscipit tristique lacus vitae ultricies.`
    };

    document.getElementById('comment-comp-1').comment = defaultComment;
    document.getElementById('comment-comp-small').comment = defaultComment;
    document.getElementById('comment-comp-large').comment = defaultComment;
    document.getElementById('comment-comp-right').comment = defaultComment;
    document.getElementById('comment-comp-max').comment = longComment;
    document.getElementById('comment-comp-secondary').comment = defaultComment;
    document.getElementById('comment-comp-basic').comment = defaultComment;
    
    document.getElementById('comment-comp-2').comment = longComment;
    document.getElementById('comment-comp-3').comment = {
      author: 'Rhys',
      date: '1991-10-06T14:03:00.000Z',
      imageUrl: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      text: `This is a comment.`
    };

    document.getElementById('comment-html-example').code = `<cpy-comment size="small" max-lines="2"></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'This is a comment.'
  };
</script>`;

    document.getElementById('comment-props').tableData = [
      { name: 'comment', description: 'The comment data to display', type: "CommentItem", default: "", required: true },
      { name: 'rightAligned', description: 'Setting this will right align the comments', type: "boolean", default: "false", required: false },
      { name: 'maxLines', description: 'The max lines to truncate comment message to (not setting this will cause the comment not to truncate)', type: "number", default: "null", required: false },
      { name: 'size', description: 'Comment size', type: "'small' | 'default' | 'large'", default: "'default'", required: false },
      { name: 'type', description: 'Colour scheme of the comment', type: "'primary' | 'secondary' | 'basic'", default: "'primary'", required: false },
      { name: 'showMoreText', description: 'Text to display for the "show more" button if max lines is true', type: "string", default: "'show more'", required: false },
      { name: 'showLessText', description: 'Text to display for the "show less" button if max lines is true', type: "string", default: "'show less'", required: false },
    ];

    document.getElementById('comment-interface').code = `interface CommentItem {
  author?: string;
  date?: string;
  imageUrl: string;
  text: string;
}`;
  },

  tooltip: () => {
    document.getElementById('code-block-html-example').code = `<cpy-tooltip position="top" text="I'm a tooltip!">
  <!-- slotted content for tooltip to point at -->
  <cpy-icon>info</cpy-icon>
</cpy-tooltip>`;

    document.getElementById('code-block-html-example-two').code = `<!-- tooltip with customised content -->
<cpy-tooltip position="left">
  <!-- slotted content for tooltip to point at -->
  <cpy-icon>info</cpy-icon>
  <!-- slot for tooltip content to point at -->
  <div slot="content">
    <img src="logo.png" alt="Logo" width="60" style="margin: 0 auto; padding: 8px 0;">
    <div style="padding: 8px; background-color: var(--cpy-bg-primary); color: white; border-radius: 0 0 4px 4px;">
      This is a more customised tooltip
    </div>
  </div>
</cpy-tooltip>`;

    document.getElementById('tooltip-props').tableData = [
      { name: 'position', description: 'The tooltips position relative to the item it\'s wrapping', type: "'bottom' | 'left' | 'right' | 'top'", default: "'bottom'", required: false },
      { name: 'hideArrow', description: 'Whether to hide the arrow on the tooltip', type: "boolean", default: "false", required: false },
      { name: 'text', description: 'The text to display within the tooltip', type: 'string', default: "", required: false },
    ];

    document.getElementById('tooltip-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Content the tooltip attaches to' },
      { slotName: "'content'", purpose: 'Contents of the tooltip' },
    ];
  },

  expandCollapse: () => {
    const expandElem = document.getElementById('expand-collapse');
    const expandButton = document.getElementById('expand-button');
    expandButton.innerHTML = expandElem.expanded
        ? 'Collapse'
        : 'Expand'
    expandButton.onclick = () => {
      expandElem.expanded = !expandElem.expanded;
      expandButton.innerHTML = expandElem.expanded
        ? 'Collapse'
        : 'Expand';
    };

    const expandElem2 = document.getElementById('expand-collapse-2');
    const expandButton2 = document.getElementById('expand-button-2');
    expandButton2.innerHTML = expandElem2.expanded
        ? 'Collapse'
        : 'Expand'
    expandButton2.onclick = () => {
      expandElem2.expanded = !expandElem2.expanded;
      expandButton2.innerHTML = expandElem2.expanded
        ? 'Collapse'
        : 'Expand';
    };

    document.getElementById('expand-html-example').code = `<cpy-expand-collapse expanded>
  <div style="padding: 2rem; border: 1px solid var(--cpy-bg-basic-border);">
    I'm in an expandable container!
  </div>
</cpy-expand-collapse>

<script>
  const expandElem = document.querySelector('cpy-expand-collapse');
  // call an api method
  expandElem.toggle();
  // or set the value directly
  expandElem.expanded = !expandElem.expanded;
</script>`;

    document.getElementById('expand-props').tableData = [
      { name: 'expanded', description: 'Whether the container is expanded or not', type: "boolean", default: "", required: false },
      { name: 'duration', description: 'Animation duration (ms) for expand/collapse', type: "number", default: "300", required: false },
    ];

    document.getElementById('expand-events').tableData = [
      { name: 'toggleExpanded', description: 'Triggered when the state of the container changes, emitting if it is expanded or not', emitsType: "boolean" },
    ];

    document.getElementById('expand-methods').tableData = [
      { name: 'expand()', description: 'Opens the container', returnType: "" },
      { name: 'collapse()', description: 'Closes the container', returnType: "" },
      { name: 'toggle()', description: 'Toggles the container', returnType: "" }
    ];

    document.getElementById('expand-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the expandable container' }
    ];
  },

  accordion: () => {
    document.getElementById('accordion-default').addEventListener('accordionOpened', () => console.log('opened'));

    document.getElementById('accordion-html-example').code = `<cpy-accordion size="large" header-title="I'm a large Accordion">
  <!-- slotted content for accordion -->
  I'm the content of an Accordion
</cpy-accordion>

<script>
  const accordionElem = document.querySelector('cpy-accordion');
  accordionElem.addEventListener('accordionOpened', () => console.log('opened'));
  accordionElem.toggle();
</script>`;

    document.getElementById('accordion-props').tableData = [
      { name: 'opened', description: 'Whether the accordion is open or not', type: "boolean", default: "", required: false },
      { name: 'size', description: 'Accordion size', type: "'small' | 'default' | 'large'", default: "'default'", required: false },
      { name: 'header-title', description: 'Title to display on the accordion', type: "string", default: "", required: true }
    ];

    document.getElementById('accordion-events').tableData = [
      { name: 'accordionOpened', description: 'Triggered when the accordion is opened', emitsType: "" },
    ];

    document.getElementById('accordion-methods').tableData = [
      { name: 'open()', description: 'Opens the accordion', returnType: "" },
      { name: 'close()', description: 'Closes the accordion', returnType: "" },
      { name: 'toggle()', description: 'Toggles the accordion', returnType: "" }
    ];

    document.getElementById('accordion-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the accordion' }
    ];
  },

  input: () => {
    document.getElementById('input-comp-length').validators = [{name: 'length', options: {min: 4, max: 10}}];
    document.getElementById('input-comp-number').validators = [{name: 'numberLength', options: {min: 1, max: 100}}];

    document.getElementById('input-html-example').code = `<cpy-input type="text" label="Text Input" value="Test value" size="large"></cpy-input>`;

    document.getElementById('input-props').tableData = [
      { name: 'type', description: 'Input type', type: "'text' | 'number' | 'email' | 'password'", default: "'text'", required: false },
      { name: 'disabled', description: 'Whether the input is disabled', type: "boolean", default: "", required: false },
      { name: 'validators', description: 'list of validators for the input', type: "Array<string | ValidatorEntry | Validator<string | number>>", default: "", required: false },
      { name: 'value', description: 'Input value', type: "string", default: "", required: false },
      { name: 'size', description: 'Input size', type: "'small' | 'default' | 'large'", default: "'default'", required: false },
      { name: 'label', description: 'Label for input', type: "string", default: "", required: false },
      { name: 'required', description: 'Whether the input is required or not', type: "boolean", default: "false", required: false }
    ];

    document.getElementById('input-events').tableData = [
      { name: 'valueChange', description: 'Triggered when the text input value is changed', emitsType: "string" },
    ];

    document.getElementById('input-methods').tableData = [
      { name: 'isValid()', description: 'Returns validation result for the input', returnType: "Promise<boolean>" },
      { name: 'markAsTouched()', description: 'Marks the input as interacted with, running validation on it and updating the UI if invalid', returnType: "" },
    ];

    document.getElementById('input-slots').tableData = [
      { slotName: "prefix", purpose: 'Prefix content for the input (intended for use with <cpy-icon>)' },
      { slotName: "suffix", purpose: 'Suffix content for the input (intended for use with <cpy-icon>)' }
    ];
  },

  toggle: () => {
    document.getElementById('toggle-html-example').code = `<cpy-input-toggle size="large" label="Large toggle"></cpy-input-toggle>`;

    document.getElementById('toggle-props').tableData = [
      { name: 'checked', description: 'Whether the is checked', type: "boolean", default: "", required: false },
      { name: 'size', description: 'Toggle size', type: "'small' | 'default' | 'large'", default: "'default'", required: false },
      { name: 'label', description: 'Label for the toggle', type: "string", default: "", required: false }
    ];

    document.getElementById('toggle-events').tableData = [
      { name: 'checkedChange', description: 'Triggered when the toggle value is changed', emitsType: "boolean" },
    ];
  },

  popup: () => {
    document.getElementById('popup-test').items = [
      { title: 'Option 1', icon: 'home', separator: true },
      {
        title: 'Group of options', description: 'hover this to show more options', children: [
          { title: 'Option 1', icon: 'chat_bubble' },
          { title: 'Option 2', icon: 'menu' },
          { title: 'Option 3', icon: 'refresh' },
          { title: 'Option 4', icon: 'smart_button' },
          { title: 'Option 5', icon: 'warning' },
        ]
      }
    ];

    document.getElementById('popup-html-example').code = `<cpy-popup>
  <!-- slotted content for popup to attach to -->
  <cpy-button icon>
    <cpy-icon>info</cpy-icon>
  </cpy-button>
  <!-- slot for popup content to point at -->
  <div slot="content">
    <img src="logo.png" alt="Logo" width="60" style="margin: 0 auto; padding: 8px 0;">
    <div style="padding: 8px; background-color: var(--cpy-bg-primary); color: white; border-radius: 0 0 4px 4px;">
      This is a customised popup
    </div>
  </div>
</cpy-popup>`;

    document.getElementById('popup-props').tableData = [
      { name: 'active-on', description: 'What triggers the popup to show', type: "'click' | 'hover'", default: "'click'", required: false },
      { name: 'position', description: 'The position of the popup relative to the element it is linked with', type: "'bottom-start' | 'left-start' | 'right-start' | 'top-start'", default: "'bottom-start'", required: false },
    ];

    document.getElementById('popup-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Content the popup attaches to' },
      { slotName: "'content'", purpose: 'Contents of the popup' },
    ];
  },

  contextMenu: () => {
    document.getElementById('context-menu-example').items = [
      { title: 'Option 1', icon: 'home', separator: true },
      {
        title: 'Group of options', description: 'hover this to show more options', children: [
          { title: 'Option 1', icon: 'chat_bubble' },
          { title: 'Option 2', icon: 'menu' },
          { title: 'Option 3', icon: 'refresh' },
          { title: 'Option 4', icon: 'smart_button' },
          { title: 'Option 5', icon: 'warning' },
        ]
      }
    ];

    document.getElementById('menu-html-example').code = `<cpy-context-menu></cpy-context-menu>

<script>
  document.querySelector('cpy-context-menu').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        { title: 'Option 2', icon: 'menu' },
        { title: 'Option 3', icon: 'refresh' },
        { title: 'Option 4', icon: 'smart_button' },
        { title: 'Option 5', icon: 'warning' },
      ]
    }
  ];
</script>`;

    document.getElementById('context-menu-interface').code = `interface ContextMenuItem {
  icon?: string;
  separator?: boolean;
  title: string;
  description?: string;
  url: string;
  openInNewTab?: boolean;
  function?: () => any;
  children?: ContextMenuItem[];
}`;

    document.getElementById('context-menu-props').tableData = [
      { name: 'items', description: 'Items to populate the menu with', type: 'ContextMenuItem[]', default: "", required: true }
    ];

    document.getElementById('context-menu-methods').tableData = [
      { name: 'recalculatePosition()', description: 'Recalculates the position of any menu items to ensure all is visible on the page if moved', returnType: "" },
    ];
  },

  icon: () => {
    document.getElementById('icon-html-example').code = `<cpy-icon style="font-size: 2rem;">rocket_launch</cpy-icon>`;

    document.getElementById('icon-slots').tableData = [
      { slotName: "-- (default)", purpose: 'The icon name' },
    ];
  },

  pageContent: () => {
    document.getElementById('page-html-example').code = `<cpy-page-content>
  <h3 id="header-1">Header 1</h3>
  <div>Some content</div>
  <h3 id="header-2">Header 2</h3>
  <div>Some other content</div>
</cpy-page-content>`;

    document.getElementById('page-props').tableData = [
      { name: 'hide-contents-list', description: 'Whether to hide the contents list', type: 'boolean', default: "false", required: false }
    ];

    document.getElementById('page-slots').tableData = [
      { slotName: "-- (default)", purpose: 'The contents of the page' },
    ];
  },

  navMenu: () => {
    document.getElementById('nav-menu-example').items = [
      { title: 'Basic Nav Item' },
      { title: 'Basic Nav Item w/ Icon', icon: 'home' },
      { title: 'Basic Nav Item w/ Description', description: 'Basic nav item description' },
      { title: 'Basic Nav Item w/ Separator After', separator: true },
      { title: 'Basic Nav Item w/ All Applied', icon: 'home', description: 'Basic nav item description', separator: true },
      {
        title: 'Nav Item Group', type: 'group', separator: true, description: 'Represents the start of a group of items', children: [
          { title: 'Group Item 1', type: 'basic', icon: 'chat_bubble' },
          { title: 'Group Item 2', type: 'basic', icon: 'menu' },
          { title: 'Group Item 3', type: 'basic', icon: 'list_alt' }
        ]
      },
      {
        title: 'Collapsible Nav Item', type: 'collapsible', description: 'A collection of items hidden in a drawer', children: [
          { title: 'Collapsible Item 1', type: 'basic', icon: 'dashboard' },
          { title: 'Collapsible Item 2', type: 'basic', icon: 'touch_app' },
          { title: 'Collapsible Item 3', type: 'basic', icon: 'inventory_2' }
        ]
      },
    ];

    document.getElementById('nav-menu-html-example').code = `<cpy-nav-menu></cpy-nav-menu>
    
<script>
  document.querySelector('cpy-nav-menu').items = [
    { title: 'Basic Nav Item' },
    { title: 'Basic Nav Item w/ Icon', icon: 'home' }
  ];
</script>`;

    document.getElementById('nav-menu-interface').code = `type NavMenuItemType = 'basic' | 'group' | 'collapsible';

interface NavMenuItem {
  icon?: string;
  separator?: boolean;
  title: string;
  description?: string;
  type: NavMenuItemType;
  url: string;
  active?: boolean;
  looseMatch?: boolean;
  openInNewTab?: boolean;
  function?: any;
  children?: NavMenuItem[];
}`;

    document.getElementById('nav-menu-props').tableData = [
      { name: 'items', description: 'Items to populate the navigation menu with', type: 'NavMenuItem[]', default: "", required: true }
    ];
  },

  toast: () => {
    const toastElem1 = document.getElementById('toast-comp-1');
    document.getElementById('toast-show-button-1').onclick = () => {
      toastElem1.open();
    };
    
    const toastElem2 = document.getElementById('toast-comp-2');
    document.getElementById('toast-show-button-2').onclick = () => {
      toastElem2.open();
    };

    const toastElem3 = document.getElementById('toast-comp-3');
    document.getElementById('toast-show-button-3').onclick = () => {
      toastElem3.open();
    };

    const toastElem4 = document.getElementById('toast-comp-4');
    document.getElementById('toast-show-button-4').onclick = () => {
      toastElem4.open();
    };

    const toastElem5 = document.getElementById('toast-comp-5');
    document.getElementById('toast-show-button-5').onclick = () => {
      toastElem5.open();
    };

    const toastElem6 = document.getElementById('toast-comp-6');
    document.getElementById('toast-show-button-6').onclick = () => {
      toastElem6.open();
    };

    document.getElementById('toast-html-example').code = `<cpy-toast
  position="top-end"
  dismissible
  title="This is a Toast message"
  icon="build">
  Some additional details you can add to the toast
</cpy-toast>

<script>
  const toastElem = document.querySelector('cpy-toast');
  toastElem.open();
</script>`;

    document.getElementById('toast-props').tableData = [
      { name: 'position', description: 'Position of the toast message', type: "'top-start' | 'top-middle' | 'top-end' | 'bottom-start' | 'bottom-middle' | 'bottom-end'", default: "'top-end'", required: false },
      { name: 'zIndex', description: 'Z-index of the toast', type: "string", default: "50", required: false },
      { name: 'dismissible', description: 'Whether the toast can be dismissed', type: "boolean", default: "", required: false },
      { name: 'duration', description: 'Duration to keep toast open. A value of 0 will keep it open until the close method is called', type: "number", default: "4000", required: false },
      { name: 'type', description: 'Colour scheme of the toast', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false },
      { name: 'toast-title', description: 'Main text for the toast', type: "string", default: "", required: true },
      { name: 'icon', description: 'The icon (if any) to show', type: 'string', default: "", required: false },
    ];

    document.getElementById('toast-events').tableData = [
      { name: 'closed', description: 'Triggered when the toast is closed', emitsType: "" },
      { name: 'opened', description: 'Triggered when the toast is opened', emitsType: "" }
    ];

    document.getElementById('toast-methods').tableData = [
      { name: 'close()', description: 'Closes the toast', returnType: "" },
      { name: 'open()', description: 'Opens the toast', returnType: "" }
    ];

    document.getElementById('toast-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Additional content for toast' }
    ];
  },

  contextMenuTrigger: () => {
    const contentMenu = document.getElementById('context-menu-trigger');
    contentMenu.items = [
      { title: 'Option 1', icon: 'home', separator: true },
      {
        title: 'Group of options', description: 'hover this to show more options', children: [
          { title: 'Option 1', icon: 'chat_bubble' },
          { title: 'Option 2', icon: 'menu' },
          { title: 'Option 3', icon: 'refresh' },
          { title: 'Option 4', icon: 'smart_button' },
          { title: 'Option 5', icon: 'warning' },
        ]
      }
    ];

    document.getElementById('context-menu-trigger-html-example').code = `<cpy-context-menu-trigger>
  right click me!
</cpy-context-menu-trigger>

<script>
  const contextMenu = document.querySelector('cpy-context-menu-trigger');
  contextMenu.items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        { title: 'Option 2', icon: 'menu' },
        { title: 'Option 3', icon: 'refresh' },
        { title: 'Option 4', icon: 'smart_button' },
        { title: 'Option 5', icon: 'warning' },
      ]
    }
  ];
</script>`;

    document.getElementById('context-menu-trigger-props').tableData = [
      { name: 'items', description: 'Items to populate the menu with', type: 'ContextMenuItem[]', default: "", required: true }
    ];

    document.getElementById('context-menu-trigger-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Content to attach the context menu listener to' }
    ];
  },

  dialog: () => {
    const dialogSmallElem = document.getElementById('dialog-small');
    document.getElementById('dialog-small-open').onclick = () => dialogSmallElem.open();
    
    const dialogDefaultElem = document.getElementById('dialog-default');
    document.getElementById('dialog-default-open').onclick = () => dialogDefaultElem.open();

    const dialogLargeElem = document.getElementById('dialog-large');
    document.getElementById('dialog-large-open').onclick = () => dialogLargeElem.open();

    const dialogFullElem = document.getElementById('dialog-full');
    document.getElementById('dialog-full-open').onclick = () => dialogFullElem.open();

    document.getElementById('dialog-html-example').code = `<cpy-dialog dialog-title="Confirm Delete" size="small">
  <!-- slot for dialog content -->
  <p>Are you sure you want to delete this?</p>
  <!-- slotted content for dialog buttons-->
  <cpy-button slot="buttons" appearance="outline" type="basic">
    Cancel
  </cpy-button>
  <cpy-button slot="buttons" type="error">
    Delete
  </cpy-button>
</cpy-dialog>

<script>
  const dialogElem = document.querySelector('cpy-dialog');
  dialogElem.open();
</script>`;

    document.getElementById('dialog-props').tableData = [
      { name: 'dialog-title', description: 'Title to display in the dialog', type: "string", default: "", required: true },
      { name: 'size', description: 'Dialog size', type: "'small' | 'default' | 'large' | 'full-screen'", default: "'default'", required: false },
      { name: 'z-index', description: 'Z-index of the dialog', type: "string", default: "50", required: false },
    ];

    document.getElementById('dialog-events').tableData = [
      { name: 'closed', description: 'Triggered when the dialog is closed', emitsType: "boolean" }
    ];

    document.getElementById('dialog-methods').tableData = [
      { name: 'open()', description: 'Opens the dialog', returnType: "" },
      { name: 'close()', description: 'Closes the dialog', returnType: "" }
    ];

    document.getElementById('dialog-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Dialog main content' },
      { slotName: "buttons", purpose: 'Dialog footer contents (intended for placing buttons)' },
    ];
  },

  carousel: () => {
    document.getElementById('carousel-html-example').code = `<cpy-carousel carousel-title="This is a carousel!">
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
</cpy-carousel>`;

    document.getElementById('carousel-props').tableData = [
      { name: 'carousel-title', description: 'Title to display with the carousel', type: "string", default: "", required: false }
    ];

    document.getElementById('carousel-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Main content of carousel' },
    ];
  },

  drawer: () => {
    document.getElementById('drawer-html-example').code = `<cpy-drawer-container>
  <!-- slotted content for drawer contents -->
  <div slot="drawer" style="padding: 20px;">
    I'm a drawer!
  </div>
  <!-- slot for main content -->
  <div style="background-color: var(--cpy-bg-white); display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
    <cpy-button onclick="toggleDrawer()">Click me!</cpy-button>
  </div>
</cpy-drawer-container>

<script>
  const drawerElem = document.querySelector('cpy-drawer-container');
  const toggleDrawer = () => drawerElem.opened = !drawerElem.opened;
</script>`;

    const drawerElem = document.getElementById('drawer-example');
    document.getElementById('drawer-toggle').onclick = () => drawerElem.opened = !drawerElem.opened;

    document.getElementById('drawer-props').tableData = [
      { name: 'opened', description: 'Whether the drawer in open', type: "boolean", default: "false", required: true }
    ];

    document.getElementById('drawer-events').tableData = [
      { name: 'toggleOpened', description: 'Triggered when the drawer has internally changed its opened state', emitsType: "boolean" }
    ];

    document.getElementById('drawer-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Main content' },
      { slotName: "drawer", purpose: 'Contents of the drawer' }
    ];
  },

  progressBar: () => {
    document.getElementById('progress-bar-html-example').code = `<cpy-progress-bar size="large" type="secondary"></cpy-progress-bar>`;

    document.getElementById('progress-bar-props').tableData = [
      { name: 'value', description: 'Progress Bar value (as a percentage complete)', type: "number", default: "", required: false },
      { name: 'size', description: 'Progress Bar size', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
      { name: 'border', description: 'Whether the Progress Bar has a border', type: "boolean", default: "false", required: false },
      { name: 'indeterminate', description: 'Whether the Progress Bar has an animated unknown value', type: "boolean", default: "false", required: false },
      { name: 'type', description: 'Colour scheme of the Progress Bar', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "", required: false },
    ];
  },

  showMore: () => {
    document.getElementById('show-more-html-example').code = `<cpy-show-more lines="3" text="Nunc sit amet porta augue..."></cpy-show-more>`;

    document.getElementById('show-more-props').tableData = [
      { name: 'lines', description: 'Number of lines to truncate to', type: "number", default: "3", required: false },
      { name: 'text', description: 'Text to display', type: "string", default: "", required: true },
      { name: 'showMoreText', description: 'Text to display in button when text is truncated', type: "string", default: "'show more'", required: false },
      { name: 'showLessText', description: 'Text to display in button when text is expanded', type: "string", default: "'show less'", required: false },
      { name: 'type', description: 'Colour scheme of the show more button', type: "'primary' | 'secondary' | 'basic'", default: "'primary'", required: false },
    ];
  },

  spinner: () => {
    document.getElementById('spinner-html-example').code = `<cpy-spinner size="large" type="secondary"></cpy-spinner>`;

    document.getElementById('spinner-props').tableData = [
      { name: 'size', description: 'Spinner size', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
      { name: 'type', description: 'Colour scheme of the spinner', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "", required: false },
    ];
  },

  stack :() =>  {
    document.getElementById('stack-html-example').code = `<cpy-stack direction="right" overlap="0.5">
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg"></cpy-avatar>
</cpy-stack>`;

    document.getElementById('stack-props').tableData = [
      { name: 'direction', description: 'The side that the stack begins from (the starting side will have the highest z-index element)', type: "'left' | 'right'", default: "'left'", required: false },
      { name: 'overlap', description: 'The amount of overlap for each element in the stack as a ratio of the element\'s width ', type: "number", default: "0.5", required: false },
    ];

    document.getElementById('stack-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the stack' }
    ];
  },

  badge: () => {
    document.getElementById('badge-html-example').code = `<cpy-badge>12</cpy-badge>`;

    document.getElementById('badge-props').tableData = [
      { name: 'size', description: 'badge size', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
      { name: 'appearance', description: 'Button styles', type: "'counter' | 'tag'", default: "'counter'", required: false },
      { name: 'type', description: 'Colour scheme of the badge', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false },
    ];

    document.getElementById('badge-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the badge' }
    ];
  },

  button: () => {
    document.getElementById('button-html-example').code = `<cpy-button>
  Submit
</cpy-button>

<cpy-button appearance="outline" type="error">
  <cpy-icon>clear</cpy-icon>Delete
</cpy-button>`;

    document.getElementById('button-props').tableData = [
      { name: 'appearance', description: 'Button styles', type: "'borderless' | 'fill' | 'outline'", default: "'fill'", required: false },
      { name: 'disabled', description: 'Whether the button is disabled or not', type: 'boolean', default: "false", required: false },
      { name: 'icon', description: 'If the button is only for an icon', type: 'boolean', default: "false", required: false },
      { name: 'size', description: 'Size of the button', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
      { name: 'type', description: 'Colour scheme of the button', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false }
    ];

    document.getElementById('button-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the button' }
    ];
  },

  card: () => {
    document.getElementById('card-html-example').code = `<cpy-card style="margin-top: 1rem; margin-bottom: 2rem;">
  <div style="display: flex; gap: 1rem; align-items: center;">
    <cpy-avatar size="x-large" src="https://react.semantic-Ui.com/images/avatar/large/matthew.png"></cpy-avatar>
    <div style="flex: 1;">
      <p style="font-weight: 500; font-size: 1.125rem;">Alex Rayner</p>
      <p style="font-size: 0.75rem;">Front End Developer</p>
    </div>
  </div>
  <div slot="footer">
    This is a footer!
  </div>
</cpy-card>`;

    document.getElementById('card-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the card' },
      { slotName: "footer", purpose: 'Footer contents for the card' }
    ];
  },

  link: () => {
    document.getElementById('func-link').func = () => window.alert('You clicked a link with a function');

    document.getElementById('link-html-example').code = `<cpy-link href="https://www.google.com" new-tab>
  A link to google
</cpy-link>

<cpy-link href="https://github.com/lith1um/Canopy-Stencil" new-tab>
  <!-- image within a link -->
  <img src="https://github.com/Lith1um/Canopy-Stencil/raw/main/logo.png" alt="Logo" width="140">
</cpy-link>`;

    document.getElementById('link-props').tableData = [
      { name: 'type', description: 'Colour scheme of the spinner', type: "'primary' | 'secondary' | 'basic'", default: "'primary'", required: false },
      { name: 'href', description: 'Href for the link', type: "string", default: "", required: false },
      { name: 'func', description: 'Callback to invoke on click (overrides default navigation behaviour)', type: "function", default: "", required: false },
      { name: 'new-tab', description: 'Whether the link should open in a new tab', type: "boolean", default: "false", required: false },
    ];

    document.getElementById('link-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the link' }
    ];
  },

  alert: () => {
    document.getElementById('alert-html-example').code = `<cpy-alert type="success">
  <!-- slotted content for alert message -->
  This is a success alert
  <!-- slot for additional content -->
  <div slot="content">Some additional text about the success alert</div>
</cpy-alert>`;

    document.getElementById('alert-props').tableData = [
      { name: 'appearance', description: 'Alert styles', type: "'border' | 'soft'", default: "'soft'", required: false },
      { name: 'container', description: 'Whether the alert has a container', type: 'boolean', default: "true", required: false },
      { name: 'icon', description: 'The icon (if any) to show', type: 'string', default: "", required: false },
      { name: 'type', description: 'Colour scheme of the alert', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'error'", required: false },
      { name: 'dismissible', description: 'Whether the alert can be dismissed (does not work with alert container set to false)', type: "boolean", default: "false", required: false }
    ];
    
    document.getElementById('alert-events').tableData = [
      { name: 'closed', description: 'Triggered when the alert dismiss button is clicked', emitsType: "" }
    ];

    document.getElementById('alert-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Title of the alert' },
      { slotName: "'content'", purpose: 'Description/additional information for the alert' },
    ];
  },

  avatar: () => {
    document.getElementById('avatar-html-example').code = `<cpy-avatar src="https://react.semantic-Ui.com/images/avatar/large/matthew.png"></cpy-avatar>

<cpy-avatar
  type="square"
  size="large"
  src="https://react.semantic-Ui.com/images/avatar/large/matthew.png">
</cpy-avatar>`;

    document.getElementById('avatar-props').tableData = [
      { name: 'border', description: 'Shows a border around the avatar', type: 'boolean', default: "false", required: false },
      { name: 'size', description: 'Size of the avatar', type: "'default' | 'large' | 'small' | 'x-large'", default: "'default'", required: false },
      { name: 'src', description: 'Image source for the avatar', type: 'string', default: "", required: false },
      { name: 'initials', description: 'Initials to display in place of an avatar image', type: 'string', default: "", required: false },
      { name: 'type', description: 'Colour scheme of the button', type: "'rounded' | 'square'", default: "'rounded'", required: false }
    ];
  },

  table: () => {
    document.getElementById('table-example').tableData = [{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},{"id":3,"todo":"Watch a classic movie","completed":false,"userId":4},{"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false,"userId":48},{"id":5,"todo":"Solve a Rubik's cube","completed":false,"userId":31},{"id":6,"todo":"Bake pastries for me and neighbor","completed":false,"userId":39},{"id":7,"todo":"Go see a Broadway production","completed":false,"userId":32},{"id":8,"todo":"Write a thank you letter to an influential person in my life","completed":true,"userId":13}];

    document.getElementById('table-html-example').code = `<cpy-table></cpy-table>

<script>
  document.querySelector('cpy-table').items = [
    { id: 1, todo: "Do something nice for someone I care about", completed: true, userId:26 },
    { id: 2, todo: "Memorize the fifty states and their capitals", completed: false, userId: 48 }
  ];
</script>`;

    document.getElementById('table-props').tableData = [
      { name: 'table-data', description: 'Data to display in the table', type: "{ [key: string]: string | number | boolean | null | undefined }", default: "", required: true }
    ];
  },

  tabs: () => {
    document.getElementById('tabs-example').addEventListener('tabChanged', (e) => console.log('Tab changed, index is:', e.detail));

    document.getElementById('tabs-html-example').code = `<cpy-tabs id="tabs-example" style="width: 100%; margin-top: 1rem; margin-bottom: 2rem;">
  <cpy-tab-header slot="header" tab-title="Tab 1"></cpy-tab-header>
  <cpy-tab-header slot="header" tab-title="Tab 2"></cpy-tab-header>
  <cpy-tab-header slot="header" tab-title="Tab 3"></cpy-tab-header>

  <cpy-tab-content slot="content">
    Content 1
  </cpy-tab-content>
  <cpy-tab-content slot="content">
    Content 2
  </cpy-tab-content>
  <cpy-tab-content slot="content">
    Content 3
  </cpy-tab-content>
</cpy-tabs>`;

    document.getElementById('tabs-props').tableData = [
      { name: 'active-index', description: 'Current active tab', type: "number", default: "0", required: false }
    ];

    document.getElementById('tab-header-props').tableData = [
      { name: 'tab-title', description: 'Tab title', type: "string", default: "", required: true }
    ];

    document.getElementById('tabs-events').tableData = [
      { name: 'tabChanged', description: 'Triggered when the active tab changes', emitsType: "number" }
    ];

    document.getElementById('tabs-slots').tableData = [
      { slotName: "'header'", purpose: 'Tab headers' },
      { slotName: "'content'", purpose: 'Tab contents' },
    ];
    document.getElementById('tab-content-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the tab' },
    ];
  }
};
