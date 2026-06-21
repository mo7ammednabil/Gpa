function createInputs() {
    const num = document.getElementById("numSubjects").value;
    const form = document.getElementById("subjectsForm");
    const calcBtn = document.getElementById("calcBtn");
    const result = document.getElementById("result");

    form.innerHTML = "";
    result.innerText = "";

    if (num <= 0) {
        alert("دخل عدد مواد صحيح");
        return;
    }

    for (let i = 1; i <= num; i++) {
        const div = document.createElement("div");
        div.className = "subject fade-in";

        div.innerHTML = `
            <h3>المادة ${i}</h3>

            <label>الدرجة (من 100)</label>
            <input type="number" class="grade" min="0" max="100" required>

            <label>الساعات المعتمدة</label>
            <input type="number" class="hours" min="1" required>
        `;

        form.appendChild(div);
    }

    calcBtn.style.display = "block";
}

function gradeToGPA(score) {
    if (score >= 96) return 4;
    else if (score >= 92) return 3.7;
    else if (score >= 88) return 3.4;
    else if (score >= 84) return 3.2;
    else if (score >= 80) return 3;
    else if (score >= 76) return 2.8;
    else if (score >= 72) return 2.6;
    else if (score >= 68) return 2.4;
    else if (score >= 64) return 2.2;
    else if (score >= 60) return 2;
    else if (score >= 55) return 1.5;
    else if (score >= 50) return 1;
    else return 0;
}

function calculateGPA() {
    const grades = document.getElementsByClassName("grade");
    const hours = document.getElementsByClassName("hours");
    const result = document.getElementById("result");

    let totalPoints = 0;
    let totalHours = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i].value === "" || hours[i].value === "") {
            alert("من فضلك املأ كل الخانات");
            return;
        }

        const score = Number(grades[i].value);
        const credit = Number(hours[i].value);
        const gpa = gradeToGPA(score);

        totalPoints += gpa * credit;
        totalHours += credit;
    }

    const finalGPA = totalPoints / totalHours;

    result.innerText = `GPA = ${finalGPA.toFixed(2)}`;
    result.classList.add("pop");
}