# Khmer Lunar Plugin for Day.js

## Dependencies

- This library is built depends on [momentkh](https://github.com/ThyrithSor/momentkh)

## Installation

```bash
npm install khmer-lunar-md
```

## Usage

```javascript
import dayjs from 'dayjs';
import toKhDateM from 'khmer-lunar-md';

dayjs.extend(toKhDateM);

const khDate = dayjs().toKhDateM(format?);
```

## Format Reference

Check out format rules: [momentkh](https://github.com/ThyrithSor/momentkh#format)
