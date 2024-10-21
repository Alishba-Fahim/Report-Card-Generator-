function generateReportCard() {
    const name = document.getElementById('name').value;
    const mathMarks = parseInt(document.getElementById('math').value);
    const scienceMarks = parseInt(document.getElementById('science').value);
    const englishMarks = parseInt(document.getElementById('english').value);

    // Create a student object
    const student = {
        name: name,
        marks: {
            Math: mathMarks,
            Science: scienceMarks,
            English: englishMarks
        },
        getTotalMarks: function() {
            return this.marks.Math + this.marks.Science + this.marks.English;
        },
        getPercentage: function() {
            return (this.getTotalMarks() / 300 * 100).toFixed(2);
        },
        getGrade: function() {
            const percentage = this.getPercentage();
            if (percentage >= 90) return 'A';
            if (percentage >= 75) return 'B';
            if (percentage >= 50) return 'C';
            return 'D';
        }
    };

    // Create report card output
    const reportCard = `
        <h2>Report Card</h2>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Math Marks:</strong> ${student.marks.Math}</p>
        <p><strong>Science Marks:</strong> ${student.marks.Science}</p>
        <p><strong>English Marks:</strong> ${student.marks.English}</p>
        <p><strong>Total Marks:</strong> ${student.getTotalMarks()} / 300</p>
        <p><strong>Percentage:</strong> ${student.getPercentage()}%</p>
        <p><strong>Grade:</strong> ${student.getGrade()}</p>
    `;

    // Display the report card
    const reportCardDiv = document.getElementById('reportCard');
    reportCardDiv.innerHTML = reportCard;
    reportCardDiv.style.display = 'block';
}
