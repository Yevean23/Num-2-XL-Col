# Num-2-XL-Col

Num-2-XL-Col is a lightweight Javascript utility package designed to simplify the conversion of numeric values to Excel column names, adhering to Excel's unique column naming convention. 

Consider the letter 'A'. If you assume that it represents 0, then AA would also equal 0. If you assume it represents 1, then going from Z to AA would jump you from 9 to 11 if using a base-10 analogy.

This package handles this intricacy effortlessly, saving you valuable time and effort in your software engineering tasks. It's your choice as to whether 'A' represents either 0 or 1, the rest of the values will be mapped out correctly.


## Preview in a React Excel Clone Project
![image](https://github.com/Yevean23/Num-2-XL-Col/assets/56968596/d51c6a41-1153-43c2-9b5b-1994d9a9c947)


## Features

Effortless Conversion: Convert numeric values to Excel column names seamlessly, handling Excel's complex column naming rules behind the scenes.

Flexible Indexing: Whether you prefer 0-based or 1-based indexing, Num-2-XL-Col supports both, accommodating various use cases in your projects.


## Usage
In your terminal:
```
npm i @yevean23/num-2-xl-col
```

In your Javascript project:
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
