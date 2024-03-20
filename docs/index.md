---
sidebar_position: 1
slug: /
---

# Morpho X Bonadocs

Integrating Bonadocs Widget Into Mopho's docs.


Bonadocs widget provides a way to make Morph’s documentation self-sufficient by enabling interactivity within the developer documentation. 

## Installation
```bash
yarn add @bonadocs/widget
```
Run the development server:

## Usage
```bash
import { BonadocsWidget } from '@bonadocs/widget';

// This is a demo widget for the owner() function on the Mopho Blue contract
<BonadocsWidget widgetConfigUri="ipfs://bafkreia4ww7vqu7musrojcort35mpyiob6e5xbjeicw3sdrm4f6ud6hrai" contract="MorphoBlue" functionKey="function owner() view returns (address)" />
```

The `yarn start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open the next page to try it out.
