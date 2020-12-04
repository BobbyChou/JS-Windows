import React, { useEffect, useState } from 'react'
import './Mine.less'



// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });

// let a: number[] = [1, 2, 3, 5]
// console.log(a)
// a.push(6)
// console.log(a)
// let ro: ReadonlyArray<number> = a
// a = ro as number[]
// console.log(a)
// a.push(7)
// console.log(a)

// interface testFn {
//   (name: string, age: number): string
// }
// let fn: testFn
// fn = (name: string, age: number) => {
//   return name
// }

// console.log('%cMine.tsx line:42 fn', 'color: #007acc;', fn('zhouteng', 30));

// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propsName: string]: any;
// }

// interface stringArray {
//   [index: number]: string;
// }
// let _arr: stringArray = ['zhouteng', 'zhouteng1']
// console.log(_arr)
// console.log(_arr[0])
// console.log(_arr[1])

// interface ClassInterface {
//   date: Date
// }

// class test implements ClassInterface {
//   date: Date = new Date()
//   constructor(h: number, m: number) { }
// }
// console.log(test)

const fn = (name: string, age: number, sex?: string) => {
  console.log(name)
  console.log(age)
  console.log('%cMine.tsx line:71 string', 'color: #007acc;', sex);
}

fn('zhouteng', 30)
fn('zhouteng', 30, 'male')

// function reverse<T>(items: T[]): T[] {
//   const toreturn = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//     toreturn.push(items[i]);
//   }
//   return toreturn;
// }

// const sample = [1, 2, 3];
// let reversed = reverse(sample);

const buildName = (firstName: string, ...otherName: string[]): string => {
  // return [...firstName, ...otherName].join('-')
  // return firstName + '-' + otherName.join('-')
  return `${firstName}-${otherName.join('-')}`
}

console.log('%cMine.tsx line:83 buildName', 'color: #007acc;', buildName('zhou', 'teng', 'hen', 'li', 'hai', 'ni', 'zhi', 'dao', 'ma'));


// function createSquare(config: SquareConfig): {color: string; area: number } {
//   console.log(config)
//   return {
//     color: config.color || "red",
//     area: config.width ? config.width * config.width : 20,
//   };
// }

// let mySquare = createSquare({colour: "red", width: 100 });

// let squareOptions = {colour: "red" };
// let mySquare = createSquare(squareOptions);
// let mySquare = createSquare({width: 100, opacity: 0.5 } as SquareConfig);





const Mine: React.FC = (props) => {

  let [count, setCount] = useState(0)

  // useEffect(() => {
  //   window.addEventListener('mousemove', function () {
  //     setCount(count++)
  //     console.log(count)
  //   })
  // }, [])

  useEffect(() => {
    // console.log(count)
  }, [count])

  return (
    <div>
      <input type="text" value={count} onChange={(e: any) => { e.current.value = count }} />
      <button onClick={() => { setCount(++count) }}>+</button>
    </div>
  )
}

export default Mine