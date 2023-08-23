# Khmer Lunar Plugin for Day.js

## Dependencies

- This library is built depends on [momentkh](https://github.com/ThyrithSor/momentkh)

## Installation

```bash
npm install kh-lunar-m-d
```

## Usage

```javascript
import dayjs from 'dayjs';
import toKhDate from 'kh-lunar-m-d';

dayjs.extend(toKhDate);

const khDate = dayjs().toKhDate(format?);
```

## Format Reference

Check out format rules: [momentkh](https://github.com/ThyrithSor/momentkh#format)
