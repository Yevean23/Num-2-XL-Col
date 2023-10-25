# Num-2-XL-Col

Num-2-XL-Col is a lightweight utility package designed to simplify the conversion of numeric values to Excel column names, adhering to Excel's unique column naming convention. In Excel, the letter 'A' is not just the first column but also represents 1 when considering columns beyond the ones digit. This package handles this intricacy effortlessly, saving you valuable time and effort in your software engineering tasks.

## Preview in a React Excel Clone Project
![image](https://github.com/Yevean23/Num-2-XL-Col/assets/56968596/d51c6a41-1153-43c2-9b5b-1994d9a9c947)


## Features

Effortless Conversion: Convert numeric values to Excel column names seamlessly, handling Excel's complex column naming rules behind the scenes.

Flexible Indexing: Whether you prefer 0-based or 1-based indexing, Num-2-XL-Col supports both, accommodating various use cases in your projects.


## Usage

```
import { numToExcelCol, excelColtoNum } from "@yevean23/num-2-xl-col";

console.log(numToExcelCol(0)); // Output: 'A'
console.log(numToExcelCol(1, oneBased=true)); // Output: 'A'
console.log(excelColtoNum('AA')); // Output: 26
console.log(excelColtoNum('AA', oneBased=true)); // Output: 27
```


## Feature Requests and Contributions
If you have ideas for enhancing this package or encounter any issues, please don't hesitate to reach out via email at vovk.yev@gmail.com. Your feedback and suggestions are highly appreciated!


## License
This project is licensed under the MIT License.
