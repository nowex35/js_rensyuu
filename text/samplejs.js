// let names = '名前';
// console.log(names);
const TAX = 100;
let data1 = [0,1,2,3,4,5,6,7,8,9];
// console.log(data1[2]);
// let data2 = data1;
// console.log(data1 == data2);
let books = [
    ['ゼロからわかる TypeScript入門', "技術評論社"],
    ["これから始めるVue.js 3実践入門", "SBクリエイティブ"],
    ["Bootstrap 5 フロントエンド開発の教科書", "技術評論社"]
];
let str = "  空白ないよ"
let list = ["松","竹","梅"]
console.log(TAX >= 100 ? "たかいよ" : "ゆるす");
console.log(TAX || 'ゆるす');

for (let value of data1) {
    console.log(value);
}

for (let [title, publisher] of books) {
    console.log(`${title} (${publisher})刊行`);
}

// for (let i = 1; i < 10; i++)  {
//     for (let j = 1; j < 10; j++) {
//         let result = i*j;
//         if (result > 30) {break;}
//         document.write(`${result} `);
//     }
//     document.write('<br />');
// }

console.log(`${str.trim()}`);

list = list.concat(["杉","檜"])
console.log(list);
//TODO: add