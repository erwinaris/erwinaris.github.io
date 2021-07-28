**Tips and tricks**

in linux mint _ctrl+shift+alt+DownArrow_ shortcuts are mapped to moving windows to different wordspaces.

shortcut _ctrl+shift+alt+DownArrow_ and _ctrl+shift+alt+UpArrow_ doesn't work in linux mint

1. open pallete _ctrl+shit+P_ search _preferrence: Open Keyboard Shortcut(JSON)_

2. add code json 
> { "key": "ctrl+shift+alt+8", "command": "editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly" },
    { "key": "ctrl+shift+alt+2", "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly" }
