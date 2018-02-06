export default [
  { text: 'File', width: 15, items: [
    { text: 'New' },
    { text: 'Open', shortcut: 'F3' },
    { text: 'Save', shortcut: 'F2' },
    { text: 'Save as...' },
    { text: 'Save all', separator: true },
    { text: 'Change dir...' },
    { text: 'Print', disabled: true },
    { text: 'DOS Shell', disabled: true, separator: true },
    { text: 'Quit', shortcut: 'Alt+X' }
  ]},
  { text: 'Edit', items: [
    { text: 'Undo', shortcut: 'Alt+BkSp' },
    { text: 'Redo', shortcut: 'Shift+Alt+BkSp', separator: true },
    { text: 'Cut', shortcut: 'Shift+Del' },
  ]}
];