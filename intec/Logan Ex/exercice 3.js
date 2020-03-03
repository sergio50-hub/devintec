function myage() {
    let age = document.getElementById("myage").value;
    console.log(age)

    if (age != '') {
        if (age >= 50) {
            alert('welcome to the real world!!!!');
        } else {
            alert('enjoy life!!!');
        }

    } else {
        alert('please fill in stupid')
    }


}