# pi-caveman-mode

Caveman Mode extension for [pi](https://github.com/badlogic/pi-mono).

When active, it injects a style instruction into pi's system prompt so replies become terse, blunt, and low-filler.

## What it does

- Turns **on automatically** at session start
- Adds a caveman-style response rule to the agent system prompt
- Lets you toggle mode from chat input

## Commands inside pi

- `caveman mode` or `start caveman` → enable
- `normal mode` or `stop caveman` → disable

## Install

### Option 1: Install directly from GitHub with pi

```bash
pi install git:github.com/habitssss/pi-caveman-mode
```

Or:

```bash
pi install https://github.com/habitssss/pi-caveman-mode
```

Then reload pi:

```text
/reload
```

### Option 2: Manual install

Copy the extension file into your global pi extensions directory:

```bash
mkdir -p ~/.pi/agent/extensions
curl -L https://raw.githubusercontent.com/habitssss/pi-caveman-mode/main/extensions/caveman-mode.ts \
  -o ~/.pi/agent/extensions/caveman-mode.ts
```

Then run `/reload` in pi.

## Project-local install

If you want this only for one project:

```bash
mkdir -p .pi/extensions
curl -L https://raw.githubusercontent.com/habitssss/pi-caveman-mode/main/extensions/caveman-mode.ts \
  -o .pi/extensions/caveman-mode.ts
```

Then run `/reload` in pi.

## Uninstall

### If installed with pi package manager

```bash
pi remove git:github.com/habitssss/pi-caveman-mode
```

### If manually installed

Global:

```bash
rm ~/.pi/agent/extensions/caveman-mode.ts
```

Project-local:

```bash
rm .pi/extensions/caveman-mode.ts
```

Then run `/reload`.

## Notes

- Extension runs with your normal pi permissions.
- Auto-discovery locations for pi extensions include `~/.pi/agent/extensions/` and `.pi/extensions/`.
- This repo is packaged so `pi install` can load it as a pi package.

## License

MIT
