const names = ['abul', 'babul', 'kabul', 'litom', 'abul', 'babul'];
function removeDuplicate(names) {
    const unique = [];
    for (const elelment of names) {
        console.log(elelment);
        if (unique.indexOf(element) == -1) {
            unique.push(elelment);
        }
    }
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName);