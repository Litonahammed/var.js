<<<<<<< HEAD
const names = ['abul', 'babul', 'kabul', 'litom', 'abul', 'babul'];
=======
const names = ['abul', 'babul', 'kabul', 'abul', 'babul'];
>>>>>>> 4a3bd801c5c04bb29c609c3ab807c522f7ea2bfe
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