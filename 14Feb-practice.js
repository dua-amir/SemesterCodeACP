let objArr=[
    {
        name:'dua',
        age: 19
    },
    {
        name: 'samreen',
        age: 20
    },
    {
        name: 'zainab',
        age: 20
    }
];
function print_data(data){
    console.log(data);
}
let new_arr = objArr.map(print_data);
console.log(new_arr);