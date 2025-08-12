## 🖥️ Command Line Cheat Sheet

The command line (CLI) is fully text-based, and lets you interact with your system quickly without a GUI.
This cheat sheet combines common commands, keyboard shortcuts, and productivity tips. 😎

## 📂 Navigation

| Command         | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| `pwd`           | Print current working directory path.                                   |
| `ls`            | List contents of the current directory (`Get-ChildItem` in PowerShell). |
| `cd <path>`     | Change to specified directory.                                          |
| `cd ..`         | Go back one directory.                                                  |
| `cd ../..`      | Go back two directories.                                                |
| `cd dir/subdir` | Navigate into nested directories.                                       |
| `clear` / `cls` | Clear the terminal output.                                              |
| `echo <text>`   | Print the given text.                                                   |
| `cat <file>`    | Print the contents of a file.                                           |
| `code <path>`   | Open file/folder in VS Code.                                            |
| `. $PROFILE`    | Reload PowerShell profile after editing.                                |

## 🗂 File & Directory Manipulation

| Command                 | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| `mkdir <folder>`        | Create a new directory.                                      |
| `mk <file>`             | Create a new file (PowerShell alias if set with `New-Item`). |
| `touch <file>`          | Create a new empty file (Unix/macOS).                        |
| `del <file>`            | Delete a file.                                               |
| `rm <file>`             | Remove a file (`Remove-Item` in PowerShell).                 |
| `rm -r <dir>`           | Delete a non-empty directory (recursive).                    |
| `rmdir <folder>`        | Remove an empty directory (`/S` for recursive in CMD).       |
| `mv <src> <dst>`        | Move or rename a file/directory.                             |
| `copy <src> <dst>`      | Copy a file (PowerShell).                                    |
| `cp <file-a> <file-b>`  | Copy contents of `file-a` to `file-b`.                       |
| `cp -r <dir-a> <dir-b>` | Copy an entire directory.                                    |
| `echo "text" > file`    | Overwrite file with "text".                                  |
| `echo "text" >> file`   | Append "text" to file.                                       |
| `cat file-a > file-b`   | Overwrite file-b with file-a content.                        |
| `cat file-a >> file-b`  | Append file-a content to file-b.                             |

## 🔧 Operators

| Operator | Description                                      | Example                   |                                               |              |     |                 |
| -------- | ------------------------------------------------ | ------------------------- | --------------------------------------------- | ------------ | --- | --------------- |
| `>`      | Overwrite file with command output.              | `echo "Hello" > file.txt` |                                               |              |     |                 |
| `>>`     | Append command output to a file.                 | `echo "Hi" >> file.txt`   |                                               |              |     |                 |
| `;`      | Run multiple commands in sequence.               | `echo "Hi"; ls`           |                                               |              |     |                 |
| `&&`     | Run next command **only if** previous succeeded. | `mkdir test && cd test`   |                                               |              |     |                 |
| \`       |                                                  | \`                        | Run next command **only if** previous failed. | \`mkdir test |     | echo "Failed"\` |

## 📋 Clipboard & Content Handling

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `pastec`        | Paste clipboard content into terminal (needs setup). |
| `history`       | Show command history.                                |
| `up/down arrow` | Navigate through command history.                    |
| `Ctrl + C`      | Stop a running process.                              |
