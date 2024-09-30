document.addEventListener('DOMContentLoaded', () => {
    const markInput = document.getElementById('mark');
    const submitButton = document.getElementById('submit');
    const resultDiv = document.getElementById('result');

    submitButton.addEventListener('click', () => {
        const mark = parseInt(markInput.value);
        
        if (isNaN(mark) || mark < 0 || mark > 100) {
            resultDiv.innerHTML = '<p class="error">Please enter a valid mark between 0 and 100.</p>';
            resultDiv.className = 'result-container';
            return;
        }

        const grade = calculateGrade(mark);
        const isPassed = mark >= 30;

        resultDiv.innerHTML = `
            <div class="result-header ${isPassed ? 'pass' : 'fail'}">
                ${isPassed ? 'PASSED' : 'FAILED'}
            </div>
            <div class="result-details">
                <p>Mark: <strong>${mark}</strong></p>
                <p>Grade: <strong>${grade}</strong></p>
            </div>
        `;
        resultDiv.className = 'result-container';
    });

    function calculateGrade(mark) {
        if (mark >= 90) return 'A+';
        if (mark >= 80) return 'A';
        if (mark >= 70) return 'B+';
        if (mark >= 60) return 'B';
        if (mark >= 50) return 'C+';
        if (mark >= 40) return 'C';
        if (mark >= 30) return 'D+';
        if (mark >= 20) return 'D';
        return 'E';
    }
});
