$(document).ready(function () {

    let table = $("#table");

    let avgGr3 = $("#avgGr3");
    let avgGr5 = $("#avgGr5");
    let mSk18 = $("#mSk18");
    let f24AvgGr = $("#f24AvgGr");
    let mBAvgGr = $("#mBAvgGr");

    let p = $("p");

    let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";


    function fillTable(array) {
        table.append(' <thead class="thead-dark"> <tr><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Average Grade</th></thead></table>');
        array.forEach(student => {
            table.append(`<tbody><div class="row">
<td><div class="col-md-3">${student.firstName}</div></td>
<td><div class="col-md-3">${student.lastName}</div></td>
<td><div class="col-md-3">${student.averageGrade}</div></td>
</div></tbody>`);
        }
        )
    }

    function fillTableWithNames(array) {
        table.append(' <thead class="thead-dark"> <tr><th scope="col">First Name</th><th scope="col">Last Name</th></thead></table>');
        array.forEach(student => {
            table.append(`<tbody><div class="row">
        <td><div class="col-md-10">${student.firstName}</div></td>
<td><div class="col-md-10">${student.lastName}</div></td>
    </div></tbody>`);
        }
        )
    }

    function checkStudentsName(name) {
        let flag = false;
        if (name[0].toLowerCase() == "b") {
            flag = true;
        }
        if (flag) {
            return true;
        }
    }


    function avgGradeHigherThan3(array) {
        table.html("");
        p.html("");
        let avgGradesArray = array.filter(student => student.averageGrade > 3);
        fillTable(avgGradesArray);
    }

    function fStudentsAvgGrFive(array) {
        table.html("");
        p.html("");
        let fStudentsWithAvgGFive = array.filter(student => student.gender === "Female" && student.averageGrade === 5);
        fStudentsWithAvgGFive.forEach(student => student.name)
        fillTableWithNames(fStudentsWithAvgGFive);
    }

    function mStudentsSkopje18(array) {
        table.html("");
        p.html("");
        let mStudentsInSkopje18 = array.filter(student => student.gender === "Male" && student.city === "Skopje")
            .filter(student => student.age > 18)
        mStudentsInSkopje18.forEach(student => student.name)
        fillTableWithNames(mStudentsInSkopje18);
    }

    function avgGrFStudents24(array) {
        table.html("");
        p.text("");
        let fStudentsOver24AvgGrade = array.filter(student => student.gender === "Female")
            .filter(student => student.age > 24)
            .map(student => student.averageGrade)
        let sumAverageGrades = fStudentsOver24AvgGrade.reduce((sum, grade) => sum += grade, 0);
        let averageFemalesGrades = sumAverageGrades / fStudentsOver24AvgGrade.length;
        p.text(`The average grade of all the females who are over 24 is: ${averageFemalesGrades}`);
    }

    function maleBAvgGradeOver2(array) {
        table.html("");
        p.html("");
        let mBAvgGr = array.filter(student => student.gender === "Male")
            .filter(student => student.averageGrade > 2)
            .filter(student => checkStudentsName(student.firstName) == true)
        fillTable(mBAvgGr);
    }

    function apiCall(url) {

        $.ajax({
            method: "GET",
            url: url,
            success: function (response) {
                console.log(response);
                let responseObject = JSON.parse(response);

                avgGr3.click(function () {
                    avgGradeHigherThan3(responseObject);
                });

                avgGr5.click(function () {
                    fStudentsAvgGrFive(responseObject);
                });

                mSk18.click(function () {
                    mStudentsSkopje18(responseObject)
                });

                f24AvgGr.click(function () {
                    avgGrFStudents24(responseObject)
                });


                mBAvgGr.click(function () {
                    maleBAvgGradeOver2(responseObject)
                });

            },
            error: function (error) {
                console.log(error);
            }
        })
    }


    apiCall(url);

})