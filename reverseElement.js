let x = [-3, 5, 1, 3, 2, 10];
document.write(x + "<br>");
let i = 0;
let j = x.length - 1;
while (i < j) {
    let a = x[i];
    x[i] = x[j];
    //Gán giá trị cho element trong mảng
    x[j] = a;
    i++;
    j--;
}
document.write(x);