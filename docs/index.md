---
sidebar_position: 1
slug: /
---

# Hedgey Finance X Bonadocs

Integrating Bonadocs Widget Into Hedgey Finance's docs.

Bonadocs widget provides a way to make Morpho’s documentation self-sufficient by enabling interactivity within the developer documentation.

## Installation

```bash
yarn add @bonadocs/widget
```

Run the development server:

## Usage

```bash
import  BonadocsWidget  from '@bonadocs/widget';

// This is a demo widget for the owner() function on the Mopho Blue contract
<BonadocsWidget widgetConfigUri="ipfs://bafkreiblvuhdydjmcjebjvys6mwvmr63p2uki7fdqbywvgwxylaxdqwev4" contract="TokenVestingPlans" functionKey="lockedBalances" />
```

The `yarn start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open the next page to try it out.
